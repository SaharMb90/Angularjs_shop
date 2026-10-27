'use strict';

/**
 * MainController — catalogue, search, category filter, cart and language.
 * Cart and language persist in localStorage (guarded, so private mode still works).
 */
angular
  .module('zenithStore')
  .controller('MainController', ['$scope', '$timeout', 'productCatalog', 'i18n',
    function ($scope, $timeout, productCatalog, i18n) {

    function load(key, fallback) {
      try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
    }
    function save(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ }
    }

    // ----- Language -----
    $scope.lang = load('zenith.lang', 'en') === 'fa' ? 'fa' : 'en';
    $scope.t = i18n[$scope.lang];
    function applyLang() {
      $scope.t = i18n[$scope.lang];
      document.documentElement.lang = $scope.lang;
      document.documentElement.dir = $scope.t.dir;
      document.title = $scope.t.brand;
      save('zenith.lang', $scope.lang);
    }
    $scope.setLang = function (lang) { $scope.lang = lang; applyLang(); };
    $scope.fmt = function (text, vars) {
      return String(text).replace(/\{(\w+)\}/g, function (_, k) { return vars[k]; });
    };
    applyLang();

    // ----- Catalogue -----
    $scope.products = productCatalog;
    $scope.query = { text: '' };
    $scope.selectedCategory = 'All';
    $scope.categories = ['All'].concat(productCatalog
      .map(function (p) { return p.category; })
      .filter(function (c, i, a) { return a.indexOf(c) === i; }));

    $scope.name = function (p) { return p[$scope.lang].name; };
    $scope.desc = function (p) { return p[$scope.lang].desc; };

    $scope.visible = function () {
      var q = $scope.query.text.trim().toLowerCase();
      return productCatalog.filter(function (p) {
        if ($scope.selectedCategory !== 'All' && p.category !== $scope.selectedCategory) return false;
        if (!q) return true;
        return (p.en.name + ' ' + p.fa.name + ' ' + p.en.desc + ' ' + p.fa.desc).toLowerCase().indexOf(q) !== -1;
      });
    };
    $scope.countIn = function (cat) {
      return cat === 'All' ? productCatalog.length : productCatalog.filter(function (p) { return p.category === cat; }).length;
    };

    // ----- Cart -----
    var byId = {};
    productCatalog.forEach(function (p) { byId[p.id] = p; });
    $scope.cart = load('zenith.cart', []).filter(function (i) { return byId[i.id] && i.qty > 0; });
    $scope.cartOpen = false;

    $scope.product = function (item) { return byId[item.id]; };
    $scope.qtyOf = function (p) {
      var it = $scope.cart.filter(function (i) { return i.id === p.id; })[0];
      return it ? it.qty : 0;
    };
    $scope.canAdd = function (p) { return p.stock > 0 && $scope.qtyOf(p) < p.stock; };

    $scope.addToCart = function (p) {
      if (!$scope.canAdd(p)) return;
      var it = $scope.cart.filter(function (i) { return i.id === p.id; })[0];
      if (it) it.qty += 1; else $scope.cart.push({ id: p.id, qty: 1 });
      $scope.bump = true;
      $timeout(function () { $scope.bump = false; }, 350);
    };
    $scope.changeQty = function (item, delta) {
      var max = byId[item.id].stock;
      item.qty = Math.min(max, item.qty + delta);
      if (item.qty <= 0) $scope.removeFromCart(item);
    };
    $scope.removeFromCart = function (item) {
      $scope.cart = $scope.cart.filter(function (i) { return i.id !== item.id; });
    };
    $scope.cartCount = function () {
      return $scope.cart.reduce(function (s, i) { return s + i.qty; }, 0);
    };
    $scope.cartTotal = function () {
      return $scope.cart.reduce(function (s, i) { return s + byId[i.id].price * i.qty; }, 0);
    };
    $scope.$watch('cart', function (v) { save('zenith.cart', v); }, true);

    $scope.openCart = function () { $scope.cartOpen = true; };
    $scope.closeCart = function () { $scope.cartOpen = false; };
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && $scope.cartOpen) $scope.$apply($scope.closeCart);
    });

    // ----- Checkout (simulated) -----
    $scope.toast = '';
    $scope.checkout = function () {
      $scope.cart = [];
      $scope.cartOpen = false;
      $scope.toast = $scope.t.ordered;
      $timeout(function () { $scope.toast = ''; }, 3500);
    };

    $scope.year = new Date().getFullYear();
  }]);
