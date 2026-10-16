'use strict';

/**
 * zenithStore.app
 * ---------------
 * Root AngularJS module for the Zenith Store demo.
 * Product data lives in products.data.js and is registered as the
 * `productCatalog` constant, which controllers inject directly.
 */
angular
  .module('zenithStore', [])

  // Format numbers as US-style currency strings ($1,299.00).
  // (Kept for parity with the original single-file app; Angular's built-in
  // `currency` filter is used in the views, this custom filter is provided
  // as an example of module-level configuration.)
  .filter('usdCurrency', ['$filter', function ($filter) {
    return function (value) {
      if (angular.isUndefined(value) || value === null) return '';
      return $filter('currency')(value, '$', 2);
    };
  }]);
