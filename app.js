'use strict';

/**
 * zenithStore.app — root AngularJS module.
 * Holds the UI dictionary (English / Persian) and a locale-aware price filter.
 */
angular
  .module('zenithStore', [])

  .constant('i18n', {
    en: {
      dir: 'ltr',
      brand: 'Zenith Store',
      search: 'Search products',
      heroTitle: 'Everyday things, chosen with care.',
      heroText: 'Tech, home, fashion and sport — a small catalogue you can actually browse in one sitting.',
      inStock: 'in stock',
      soldOut: 'Sold out',
      onlyLeft: 'Only {n} left',
      add: 'Add to cart',
      inCart: 'In cart',
      reviews: 'reviews',
      empty: 'No products match “{q}”. Try another word or pick a different category.',
      clear: 'Clear search',
      cart: 'Your cart',
      cartEmpty: 'Your cart is empty. Add something from the catalogue to see it here.',
      subtotal: 'Subtotal',
      checkout: 'Place order',
      ordered: 'Order placed — this is a demo, so nothing was charged.',
      close: 'Close',
      remove: 'Remove',
      results: '{n} products',
      footer: 'Demo storefront built with AngularJS 1.8. No real orders are processed.',
      categories: { All: 'All', Electronics: 'Electronics', Home: 'Home', Fashion: 'Fashion', Sports: 'Sports' }
    },
    fa: {
      dir: 'rtl',
      brand: 'فروشگاه زنیت',
      search: 'جست‌وجوی محصول',
      heroTitle: 'وسایل روزمره، با دقت انتخاب‌شده.',
      heroText: 'دیجیتال، خانه، پوشاک و ورزش — یک کاتالوگ کوچک که می‌شود در یک نشست کامل دیدش.',
      inStock: 'موجود',
      soldOut: 'ناموجود',
      onlyLeft: 'فقط {n} عدد باقی مانده',
      add: 'افزودن به سبد',
      inCart: 'در سبد',
      reviews: 'نظر',
      empty: 'محصولی با «{q}» پیدا نشد. کلمهٔ دیگری امتحان کنید یا دسته‌بندی را عوض کنید.',
      clear: 'پاک کردن جست‌وجو',
      cart: 'سبد خرید',
      cartEmpty: 'سبد خرید خالی است. از کاتالوگ چیزی اضافه کنید تا اینجا ببینید.',
      subtotal: 'جمع کل',
      checkout: 'ثبت سفارش',
      ordered: 'سفارش ثبت شد — این یک دموست و هزینه‌ای کسر نشد.',
      close: 'بستن',
      remove: 'حذف',
      results: '{n} محصول',
      footer: 'فروشگاه نمایشی ساخته‌شده با AngularJS 1.8. هیچ سفارش واقعی ثبت نمی‌شود.',
      categories: { All: 'همه', Electronics: 'دیجیتال', Home: 'خانه', Fashion: 'پوشاک', Sports: 'ورزش' }
    }
  })

  // Price in USD, digits localised to the active language.
  .filter('price', function () {
    return function (value, lang) {
      if (value === undefined || value === null) return '';
      var locale = lang === 'fa' ? 'fa-IR' : 'en-US';
      return new Intl.NumberFormat(locale, { style: 'currency', currency: 'USD' }).format(value);
    };
  })

  // Localised integers (e.g. ۱۲ vs 12).
  .filter('num', function () {
    return function (value, lang) {
      return Number(value).toLocaleString(lang === 'fa' ? 'fa-IR' : 'en-US');
    };
  });
