'use strict';

/**
 * Zenith Store — product catalogue (bilingual).
 * Registered as an injectable constant so controllers never rely on globals.
 */
angular
  .module('zenithStore')
  .constant('productCatalog', [
    { id: 1, emoji: '🎧', price: 249.99, stock: 12, stars: 5, reviews: 328, category: 'Electronics',
      en: { name: 'Noise-cancelling headphones', desc: 'Active noise cancellation and a 30-hour battery.' },
      fa: { name: 'هدفون نویزکنسلینگ', desc: 'حذف فعال نویز و ۳۰ ساعت شارژدهی.' } },
    { id: 2, emoji: '⌨️', price: 129.5, stock: 8, stars: 4, reviews: 154, category: 'Electronics',
      en: { name: 'Mechanical keyboard', desc: 'Hot-swappable switches, per-key RGB, compact 75% layout.' },
      fa: { name: 'کیبورد مکانیکی', desc: 'سوییچ قابل‌تعویض، نورپردازی RGB و چیدمان جمع‌وجور ۷۵٪.' } },
    { id: 3, emoji: '📷', price: 199, stock: 5, stars: 4, reviews: 92, category: 'Electronics',
      en: { name: '4K action camera', desc: 'Waterproof body, stabilisation and 4K60 video.' },
      fa: { name: 'دوربین ورزشی 4K', desc: 'بدنهٔ ضدآب، لرزش‌گیر تصویر و فیلم 4K60.' } },
    { id: 4, emoji: '⌚', price: 179.99, stock: 0, stars: 5, reviews: 411, category: 'Electronics',
      en: { name: 'Fitness watch', desc: 'Heart-rate, sleep and workout tracking, 10-day battery.' },
      fa: { name: 'ساعت هوشمند ورزشی', desc: 'پایش ضربان قلب، خواب و تمرین با ۱۰ روز شارژدهی.' } },
    { id: 5, emoji: '🪑', price: 289, stock: 6, stars: 4, reviews: 210, category: 'Home',
      en: { name: 'Ergonomic office chair', desc: 'Adjustable lumbar support and breathable mesh.' },
      fa: { name: 'صندلی ارگونومیک اداری', desc: 'پشتی کمر قابل‌تنظیم و توری تنفس‌پذیر.' } },
    { id: 6, emoji: '☕', price: 49.9, stock: 20, stars: 5, reviews: 76, category: 'Home',
      en: { name: 'Pour-over coffee set', desc: 'Ceramic dripper, carafe and reusable filter.' },
      fa: { name: 'ست دم‌آوری قهوه', desc: 'دریپر سرامیکی، پارچ و فیلتر قابل‌شست‌وشو.' } },
    { id: 7, emoji: '🕯️', price: 34, stock: 15, stars: 4, reviews: 58, category: 'Home',
      en: { name: 'Scented candle trio', desc: 'Soy wax in cedar, vanilla and sea salt.' },
      fa: { name: 'سه‌تایی شمع معطر', desc: 'موم سویا با رایحهٔ سدر، وانیل و نمک دریا.' } },
    { id: 8, emoji: '🎒', price: 139, stock: 9, stars: 4, reviews: 133, category: 'Fashion',
      en: { name: 'Leather backpack', desc: 'Full-grain leather with a padded 15-inch laptop sleeve.' },
      fa: { name: 'کوله‌پشتی چرمی', desc: 'چرم طبیعی با جای لپ‌تاپ ۱۵ اینچ.' } },
    { id: 9, emoji: '🕶️', price: 89, stock: 18, stars: 5, reviews: 205, category: 'Fashion',
      en: { name: 'Polarised sunglasses', desc: 'UV400 lenses in a light steel frame.' },
      fa: { name: 'عینک آفتابی پلاریزه', desc: 'عدسی UV400 با فریم سبک فلزی.' } },
    { id: 10, emoji: '👟', price: 79, stock: 0, stars: 4, reviews: 87, category: 'Fashion',
      en: { name: 'Organic cotton sneakers', desc: 'Breathable canvas upper, recycled cushioned sole.' },
      fa: { name: 'کتانی پنبهٔ ارگانیک', desc: 'رویهٔ کتان تنفس‌پذیر و زیرهٔ بازیافتی نرم.' } },
    { id: 11, emoji: '🧘', price: 59, stock: 14, stars: 5, reviews: 169, category: 'Sports',
      en: { name: 'Yoga starter kit', desc: 'Non-slip 6 mm mat, two cork blocks and a strap.' },
      fa: { name: 'ست شروع یوگا', desc: 'مت ضدلغزش ۶ میلی‌متری، دو بلوک چوب‌پنبه و بند.' } },
    { id: 12, emoji: '🏋️', price: 349, stock: 3, stars: 4, reviews: 141, category: 'Sports',
      en: { name: 'Adjustable dumbbells', desc: 'Dial system from 2 to 24 kg in seconds.' },
      fa: { name: 'دمبل قابل‌تنظیم', desc: 'تغییر وزن از ۲ تا ۲۴ کیلو در چند ثانیه.' } }
  ]);
