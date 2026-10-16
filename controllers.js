'use strict';

/**
 * MainController
 * --------------
 * Drives the storefront: catalog rendering, search, category filtering,
 * and the shopping cart. Product data is injected from the `productCatalog`
 * constant registered in products.data.js — no global variables are used.
 */
angular
  .module('zenithStore')
  .controller('MainController', ['$scope', '$filter', 'productCatalog', function ($scope, $filter, productCatalog) {

    // ----- Catalog & filtering state -----
    $scope.products = angular.copy(productCatalog);
    $scope.searchQuery = '';
    $scope.selectedCategory = 'All';
    $scope.categories = ['All'].concat(
      $scope.products
        .map(function (p) { return p.category; })
        .filter(function (c, i, arr) { return arr.indexOf(c) === i; })
    );

    // ----- Cart state -----
    $scope.cart = [];
    $scope.cartOpen = false;

    $scope.currentYear = new Date().getFullYear();

    // ----- Catalog helpers -----
    $scope.categoryFilter = function (product) {
      return $scope.selectedCategory === 'All' || product.category === $scope.selectedCategory;
    };

    // ----- Cart operations -----
    $scope.addToCart = function (product) {
      if (product.stock === 0) return;

      var existing = $scope.cart.filter(function (i) { return i.id === product.id; })[0];
      if (existing) {
        existing.qty += 1;
      } else {
        $scope.cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
      }
    };

    $scope.changeQty = function (item, delta) {
      item.qty += delta;
      if (item.qty <= 0) {
        $scope.removeFromCart(item);
      }
    };

    $scope.removeFromCart = function (item) {
      $scope.cart = $scope.cart.filter(function (i) { return i.id !== item.id; });
    };

    $scope.cartCount = function () {
      return $scope.cart.reduce(function (sum, i) { return sum + i.qty; }, 0);
    };

    $scope.cartTotal = function () {
      return $scope.cart.reduce(function (sum, i) { return sum + (i.price * i.qty); }, 0);
    };

    $scope.toggleCart = function () {
      $scope.cartOpen = !$scope.cartOpen;
    };

    // Demo checkout — a portfolio sample, so no real payment gateway.
    $scope.checkout = function () {
      alert('Thank you! This is a demo store — checkout is simulated.\n\n' +
            'Items: ' + $scope.cartCount() + '\n' +
            'Total: ' + $filter('currency')($scope.cartTotal(), '$', 2));
      $scope.cart = [];
      $scope.cartOpen = false;
    };
  }]);
