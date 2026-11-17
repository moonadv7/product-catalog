// Restore the original decorative SVG markup before attaching page interactions.
{const icons=["<svg aria-hidden=\"true\"><use href=\"#icon-offer\"></use></svg>","<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z\" /></svg>","<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 3v18m0 0-4-4m4 4 4-4M17 21V3m0 0-4 4m4-4 4 4\" /></svg>","<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5\"/></svg>","<svg aria-hidden=\"true\"><use href=\"#icon-phone\"></use></svg>","<svg aria-hidden=\"true\"><use href=\"#icon-whatsapp\"></use></svg>","<svg aria-hidden=\"true\"><use href=\"#icon-email\"></use></svg>","<svg aria-hidden=\"true\"><use href=\"#icon-location\"></use></svg>","<svg aria-hidden=\"true\"><use href=\"#icon-clock\"></use></svg>","<svg><use href=\"#icon-phone\"></use></svg>"];document.querySelectorAll('i[data-svg]').forEach(el=>{const svg=icons[Number(el.dataset.svg)];if(svg){const template=document.createElement('template');template.innerHTML=svg;el.replaceWith(template.content.firstElementChild);}});}
// Shared decorative symbols are loaded once, preserving the same inline SVG DOM.
if (!document.querySelector('.icon-sprite')) document.body.insertAdjacentHTML('afterbegin', "<svg class=\"icon-sprite\" aria-hidden=\"true\" focusable=\"false\">\r\n      <symbol id=\"icon-phone\" viewBox=\"0 0 24 24\">\r\n        <path d=\"M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z\" />\r\n      </symbol>\r\n      <symbol id=\"icon-whatsapp\" viewBox=\"0 0 24 24\">\r\n        <path d=\"M19.11 4.93A9.72 9.72 0 0 0 3.82 16.65L2.5 21.5l4.96-1.3a9.69 9.69 0 0 0 4.64 1.18h.01a9.72 9.72 0 0 0 7-16.45Zm-7 14.81a8.08 8.08 0 0 1-4.12-1.13l-.3-.18-2.94.77.79-2.87-.19-.3a8.08 8.08 0 1 1 6.76 3.71Zm4.43-6.05c-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2a7.29 7.29 0 0 1-1.34-1.66c-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46a.88.88 0 0 0-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.43-.59 1.63-1.15.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z\" />\r\n      </symbol>\r\n      <symbol id=\"icon-location\" viewBox=\"0 0 24 24\">\r\n        <path d=\"M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z\" />\r\n      </symbol>\r\n      <symbol id=\"icon-clock\" viewBox=\"0 0 24 24\">\r\n        <path d=\"M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm4.2 14.2-5.2-3V6h2v6.05l4.2 2.43Z\" />\r\n      </symbol>\r\n      <symbol id=\"icon-email\" viewBox=\"0 0 24 24\">\r\n        <path d=\"M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5Z\" />\r\n      </symbol>\r\n      <symbol id=\"icon-offer\" viewBox=\"0 0 24 24\">\r\n        <path d=\"M21.41 11.58 12.42 2.59A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7c0 .53.21 1.04.59 1.41l9 9a2 2 0 0 0 2.83 0l7-7a2 2 0 0 0-.01-2.83ZM6.5 8A1.5 1.5 0 1 1 6.5 5a1.5 1.5 0 0 1 0 3Z\" />\r\n      </symbol>\r\n    </svg>");
const categories = [
  { id: 1, nameAr: "زمزميات ومجات", nameEn: "Bottles & Mugs", key: "zamzamiyat", productCount: 161 },
  { id: 2, nameAr: "كاسات", nameEn: "Cups & Glassware", key: "kasat", productCount: 13 },
  { id: 3, nameAr: "نوت", nameEn: "Notebooks", key: "note", productCount: 108 },
  { id: 4, nameAr: "أطقم هدايا", nameEn: "Gift Sets", key: "giftSets", productCount: 69 },
  { id: 5, nameAr: "علب", nameEn: "Boxes", key: "boxes", productCount: 45 },
  { id: 6, nameAr: "أكياس", nameEn: "Bags", key: "bags", productCount: 146 },
  { id: 7, nameAr: "محفظة ID", nameEn: "ID Holders", key: "idWallets", productCount: 6 },
  { id: 8, nameAr: "وسائل عرض", nameEn: "Display Solutions", key: "display", productCount: 134 },
  { id: 9, nameAr: "كاب", nameEn: "Caps", key: "caps", productCount: 28 },
  { id: 10, nameAr: "سترس بول", nameEn: "Stress Balls", key: "stress", productCount: 9 },
  { id: 11, nameAr: "كيوب بول", nameEn: "Cube Balls", key: "cubes", productCount: 9 },
  { id: 12, nameAr: "أقلام", nameEn: "Pens", key: "pens", productCount: 90 },
  { id: 13, nameAr: "بروش", nameEn: "Badges & Pins", key: "pins", productCount: 16 },
  { id: 14, nameAr: "شنط", nameEn: "Bags & Totes", key: "totes", productCount: 22 },
  { id: 15, nameAr: "سترة السلامة", nameEn: "Safety Vests", key: "vests", productCount: 9 },
  { id: 16, nameAr: "لينيارد", nameEn: "Lanyards", key: "lanyards", productCount: 65 },
  { id: 17, nameAr: "يويو", nameEn: "Yo-Yos", key: "reels", productCount: 25 },
  { id: 18, nameAr: "بطاقات", nameEn: "Cards", key: "cards", productCount: 46 },
  { id: 19, nameAr: "ميداليات", nameEn: "Keychains", key: "keychains", productCount: 21 },
  { id: 20, nameAr: "شمسية", nameEn: "Umbrellas", key: "umbrellas", productCount: 5 },
  { id: 21, nameAr: "أعلام", nameEn: "Flags", key: "flags", productCount: 83 },
  { id: 22, nameAr: "هدب", nameEn: "Tassels & Fringe", key: "fringe", productCount: 8 },
  { id: 23, nameAr: "صندوق إسعافات - اقتراحات", nameEn: "First Aid Kits", key: "aidboxes", productCount: 4 },
  { id: 24, nameAr: "كمبيوتر وملحقاتها", nameEn: "Computers & Accessories", key: "computer", productCount: 7 },
  { id: 25, nameAr: "ألوان", nameEn: "Colors", key: "colors", productCount: 3 },
  { id: 26, nameAr: "ميزان حقائب", nameEn: "Luggage Scales", key: "scales", productCount: 1 },
  { id: 27, nameAr: "بالون", nameEn: "Balloons", key: "balloons", productCount: 18 },
  { id: 28, nameAr: "أساور مطاط", nameEn: "Silicone Wristbands", key: "wristbands", productCount: 5 },
  { id: 29, nameAr: "تيشيرت", nameEn: "T-Shirts", key: "shirts", productCount: 70 },
  { id: 30, nameAr: "لفحات", nameEn: "Neck Scarves", key: "scarves", productCount: 5 },
  { id: 31, nameAr: "وشاح", nameEn: "Sashes", key: "sashes", productCount: 3 },
  { id: 32, nameAr: "وجه وسادة - مخدة", nameEn: "Cushion Covers & Pillows", key: "pillows", productCount: 2 },
  { id: 33, nameAr: "مواد", nameEn: "Materials", key: "materials", productCount: 5 },
  { id: 34, nameAr: "عصا", nameEn: "Sticks", key: "sticks", productCount: 20 },
  { id: 35, nameAr: "إكسسوارات", nameEn: "Accessories", key: "accessories", productCount: 23 },
  { id: 36, nameAr: "بازل", nameEn: "Puzzles", key: "puzzles", productCount: 2 },
  { id: 37, nameAr: "براويز", nameEn: "Frames", key: "frames", productCount: 52 },
  { id: 38, nameAr: "ملف فاتورة", nameEn: "Invoice Folders", key: "invoiceFolders", productCount: 7 },
];

const categorySearchTerms = {
  1: {
    ar: "زمزمية زمزميات مج مجات كوب أكواب مطارة مطارات قارورة قنينة ترمس حراري ستانلس ستيل زجاج بلاستيك سفر رياضي",
    en: "bottle bottles mug mugs cup tumbler flask thermos thermal stainless steel glass plastic travel sport",
  },
  2: {
    ar: "كاس كاسات كوب أكواب زجاج كريستال",
    en: "cup cups glass glasses glassware crystal",
  },
  3: {
    ar: "نوت دفتر دفاتر مفكرة مفكرات مذكرات أجندة قلم",
    en: "note notebook notebooks journal planner agenda memo pen",
  },
  4: {
    ar: "طقم أطقم هدية هدايا شركات قلم نوت محفظة صندوق",
    en: "gift gifts set sets corporate notebook pen wallet box",
  },
  5: {
    ar: "علبة علب صندوق صناديق بوكس تغليف هدايا",
    en: "box boxes case packaging gift package",
  },
  6: {
    ar: "كيس أكياس حقيبة حقائب شنطة شنط ورقي قماش تسوق هدايا",
    en: "bag bags tote paper fabric shopping gift",
  },
  7: {
    ar: "محفظة حامل بطاقة بطاقات هوية تعريف آي دي",
    en: "id holder badge card wallet identity",
  },
  38: {
    ar: "ملف فاتورة ملفات فواتير ملف توقيع خياطة جهتين مبطن",
    en: "invoice folder folders signature stitched padded",
  },
};

const productNameOverrides = {
  "19029-051": { ar: "مطارة رياضية", en: "Sports bottle" },
  "19030-356": { ar: "مج سادة مطفي", en: "Plain matte mug" },
  "19005-002": { ar: "كاسة ميلامين سادة يد قلب", en: "Plain melamine cup with heart handle" },
  "19050-051": { ar: "طقم نوت وقلم", en: "Notebook and pen gift set" },
  "19015-001": { ar: "كيس هدايا ورقي", en: "Paper gift bag" },
  "19018-009": { ar: "كيس توتي باج — 42×32 سم", en: "Tote bag — 42×32 cm" },
  "19018-121": { ar: "كيس توتي باج — 37×39 سم", en: "Tote bag — 37×39 cm" },
};

const translations = {
  ar: {
    pageTitle: "",
    pageDescription: "",
    skipContent: "انتقل إلى المحتوى",
    brandIntroLabel: "",
    wholesaleBadge: "حلول دعائية بالجملة",
    introStatement: "",
    branchCitiesLabel: "",
    brandHome: "",
    brandAlt: "",
    companyName: "",
    mainNavLabel: "التنقل الرئيسي",
    mobileNavLabel: "التنقل على الهاتف",
    navHome: "الرئيسية",
    navWhy: "لماذا نحن",
    navContact: "تواصل معنا",
    offers: "العروض",
    offersDownload: "تحميل ملف العروض PDF",
    newArrivals: "وصل حديثًا",
    sortDescending: "Z → A",
    sortAscending: "A → Z",
    sortToAscending: "اعرض الأكواد من الأصغر إلى الأكبر",
    sortToDescending: "اعرض الأكواد من الأكبر إلى الأصغر",
    newArrivalsTitle: "منتجات وصلت حديثًا",
    noNewArrivalsMatchTitle: "لا توجد منتجات جديدة مطابقة",
    offersOpen: "الانتقال إلى قسم العروض",
    quickActionsLabel: "خيارات سريعة",
    offersFilterKicker: "العروض الحالية",
    offersFilterTitle: "المنتجات المشمولة بالعرض",
    noOffersMatchTitle: "لا توجد عروض مطابقة",
    noOffersMatchText: "جرّب اسمًا أو باركودًا مختلفًا.",
    includedInOffers: "هذا المنتج ضمن العروض الحالية",
    contactShort: "التواصل",
    exploreProducts: "استكشف المنتجات",
    navCategories: "الأقسام",
    pauseSlides: "إيقاف الصور",
    playSlides: "تشغيل الصور",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    heroKicker: "جملة هدايا ومواد الدعاية والإعلان",
    heroTitle: "",
    homeHeroTitle: "",
    heroText: "",
    browseCatalog: "تصفّح الكتالوج",
    currentStatsLabel: "إحصاءات الكتالوج الحالي",
    citiesLabel: "مدن نخدمكم منها",
    productsNowLabel: "صنفًا متاحًا الآن",
    samplesLabel: "نماذج من منتجاتنا",
    heroProductMugAlt: "",
    heroProductGiftAlt: "",
    heroProductFlagAlt: "",
    chooseProduct: "اختر الصنف",
    copyBarcode: "وانسخ الباركود",
    discoverMore: "اكتشف أكثر",
    businessAreasLabel: "",
    marqueeGifts: "هدايا دعائية",
    marqueeCustomization: "طباعة وتخصيص",
    marqueeWholesale: "توريد جملة",
    marqueePackaging: "تغليف وعرض",
    marqueeCorporate: "حلول للشركات",
    headquarters: "المقر الرئيسي",
    riyadh: "",
    whyKicker: "",
    whyTitle: "ما يهمك في التوريد، نوفره لك",
    valuePrice: "أسعار تنافسية",
    valuePriceText: "خيارات مناسبة لميزانيات ومتطلبات الشركات.",
    valueQuality: "جودة موثوقة",
    valueQualityText: "منتجات مختارة لتقديم نتيجة تليق بهوية علامتك.",
    valueVariety: "تنوع الأصناف",
    valueVarietyText: "مجموعة واسعة من الهدايا والمواد الدعائية.",
    valueStock: "توفر الكميات",
    valueStockText: "حرص مستمر على توفر الكميات المطلوبة.",
    valueSpeed: "سرعة التوصيل",
    valueSpeedText: "تجهيز وتوصيل الطلبات بسرعة وكفاءة.",
    showcaseKicker: "مختارات من الكتالوج",
    showcaseTitle: "منتجات تتكيّف<br />مع كل فكرة.",
    showcaseText: "من الهدايا اليومية إلى أطقم الشركات والتغليف، نعرض كل صنف مع معلوماته الأساسية ورقم باركود واضح.",
    viewAllCategories: "عرض جميع الأقسام",
    bottleAlt: "مطارة رياضية",
    giftSetAlt: "طقم نوت وقلم",
    bagAlt: "كيس هدايا ورقي",
    count148: "148 منتجًا",
    count63: "63 منتجًا",
    count109: "109 منتجات",
    catalogKicker: "كتالوج المنتجات",
    catalogTitle: "اختر قسمك",
    catalogIntro: "تصفّح جميع أقسام الكتالوج، أو انتقل مباشرة إلى المنتجات المشمولة بالعروض.",
    searchCategory: "ابحث عن قسم أو منتج أو باركود",
    searchCategoryPlaceholder: "اسم قسم، منتج أو باركود…",
    productMatchesKicker: "نتائج المنتجات",
    productMatchesTitle: "أصناف مطابقة لبحثك",
    categoryFilterLabel: "تصفية الأقسام",
    availableNow: "المتوفر الآن",
    allCategories: "كل الأقسام",
    noCategoryTitle: "لم نجد قسمًا بهذا الاسم",
    noCategoryText: "جرّب كتابة جزء أقصر من اسم القسم.",
    showCategories: "عرض الأقسام",
    allCategoriesBack: "جميع الأقسام",
    productIntro: "افتح أي بطاقة لمشاهدة الصورة كاملة ونسخ رقم الباركود.",
    searchBarcode: "ابحث برقم الباركود",
    searchBarcodePlaceholder: "ابحث بالباركود…",
    loadMore: "عرض المزيد",
    contactKicker: "تواصل معنا",
    contactTitle: "",
    contactText: "",
    chooseAProduct: "اختر منتجًا",
    riyadhSaudi: "",
    branchSummary: "",
    openMainMap: "فتح موقع المركز الرئيسي",
    branchBoardKicker: "",
    branchBoardTitle: "",
    activeBranches: "",
    directWhatsAppLines: "خيارات تواصل واتساب",
    directContactLines: "أرقام اتصال مباشرة",
    quickContactLabel: "طرق التواصل السريع",
    phone: "",
    email: "البريد الإلكتروني",
    emailCompany: "",
    location: "العنوان",
    branchHours: "",
    callHeadquarters: "",
    messageHeadquarters: "",
    openEveryDay: "نخدمكم يوميًا",
    hoursBelow: "",
    directContact: "تواصل مباشر",
    mainBranch: "المركز الرئيسي",
    companyBranch: "",
    jeddah: "",
    dammam: "",
    workingHours: "أوقات العمل",
    whatsapp: "",
    whatsappOne: "واتساب 1",
    whatsappTwo: "واتساب 2",
    numberOne: "الرقم الأول",
    numberTwo: "الرقم الثاني",
    directNumber: "رقم التواصل",
    callNumberOne: "اتصال بالرقم الأول",
    callNumberTwo: "اتصال بالرقم الثاني",
    whatsappNumberOne: "مراسلة الرقم الأول على واتساب",
    whatsappNumberTwo: "مراسلة الرقم الثاني على واتساب",
    callJeddah: "",
    whatsappJeddah: "",
    callDammamOne: "",
    callDammamTwo: "",
    whatsappDammamOne: "",
    whatsappDammamTwo: "",
    viewOnMaps: "عرض على Google Maps",
    branchWhatsApp: "",
    whatsappBranches: "",
    branchContact: "",
    close: "إغلاق",
    productDetails: "تفاصيل الصنف",
    dialogNote: "تتضمن الصورة مواصفات المنتج وخيارات الطباعة والتعبئة المتاحة.",
    barcodeNumber: "رقم الباركود",
    copyBarcodeButton: "نسخ الباركود",
    footerLine: "",
  },
  en: {
    pageTitle: "",
    pageDescription: "",
    skipContent: "Skip to content",
    brandIntroLabel: "",
    wholesaleBadge: "Wholesale promotional solutions",
    introStatement: "",
    branchCitiesLabel: "",
    brandHome: "",
    brandAlt: "",
    companyName: "",
    mainNavLabel: "Main navigation",
    mobileNavLabel: "Mobile navigation",
    navHome: "Home",
    navWhy: "Why us",
    navContact: "Contact",
    offers: "Offers",
    offersDownload: "Download offers PDF",
    newArrivals: "Just arrived",
    sortDescending: "Z → A",
    sortAscending: "A → Z",
    sortToAscending: "Show codes from lowest to highest",
    sortToDescending: "Show codes from highest to lowest",
    newArrivalsTitle: "New arrivals",
    noNewArrivalsMatchTitle: "No matching new arrivals",
    offersOpen: "Go to the offers section",
    quickActionsLabel: "Quick actions",
    offersFilterKicker: "Current offers",
    offersFilterTitle: "Products included in the offer",
    noOffersMatchTitle: "No matching offers",
    noOffersMatchText: "Try a different name or barcode.",
    includedInOffers: "This product is included in the current offers",
    contactShort: "Contact",
    exploreProducts: "Explore products",
    navCategories: "Categories",
    pauseSlides: "Pause slideshow",
    playSlides: "Play slideshow",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    heroKicker: "Wholesale promotional gifts and advertising materials",
    heroTitle: "",
    homeHeroTitle: "",
    heroText: "",
    browseCatalog: "Browse catalogue",
    currentStatsLabel: "Current catalogue facts",
    citiesLabel: "Cities we operate from",
    productsNowLabel: "Products available now",
    samplesLabel: "A selection of our products",
    heroProductMugAlt: "",
    heroProductGiftAlt: "",
    heroProductFlagAlt: "",
    chooseProduct: "Choose a product",
    copyBarcode: "and copy its barcode",
    discoverMore: "Discover more",
    businessAreasLabel: "Company business areas",
    marqueeGifts: "Promotional gifts",
    marqueeCustomization: "Printing & customisation",
    marqueeWholesale: "Wholesale supply",
    marqueePackaging: "Packaging & display",
    marqueeCorporate: "Corporate solutions",
    headquarters: "Headquarters",
    riyadh: "",
    whyKicker: "",
    whyTitle: "What matters in supply, delivered",
    valuePrice: "Competitive prices",
    valuePriceText: "Options suited to corporate budgets and requirements.",
    valueQuality: "Reliable quality",
    valueQualityText: "Selected products that represent your brand with confidence.",
    valueVariety: "Wide product range",
    valueVarietyText: "A broad selection of gifts and promotional materials.",
    valueStock: "Consistent availability",
    valueStockText: "A continued focus on keeping the quantities you need available.",
    valueSpeed: "Fast delivery",
    valueSpeedText: "Orders prepared and delivered quickly and efficiently.",
    showcaseKicker: "Catalogue highlights",
    showcaseTitle: "Products for<br />every idea.",
    showcaseText: "From everyday gifts to corporate sets and packaging, every item is shown with its essential details and a clear barcode.",
    viewAllCategories: "View all categories",
    bottleAlt: "Sports bottle",
    giftSetAlt: "Notebook and pen gift set",
    bagAlt: "Paper gift bag",
    count148: "148 products",
    count63: "63 products",
    count109: "109 products",
    catalogKicker: "Product catalogue",
    catalogTitle: "Choose a category",
    catalogIntro: "Browse every catalogue category, or jump directly to products included in current offers.",
    searchCategory: "Search categories, products, or barcodes",
    searchCategoryPlaceholder: "Category, product, or barcode…",
    productMatchesKicker: "Product results",
    productMatchesTitle: "Products matching your search",
    categoryFilterLabel: "Filter categories",
    availableNow: "Available now",
    allCategories: "All categories",
    noCategoryTitle: "No category found",
    noCategoryText: "Try a shorter part of the category name.",
    showCategories: "Show categories",
    allCategoriesBack: "All categories",
    productIntro: "Open any card to view the full image and copy its barcode.",
    searchBarcode: "Search by barcode",
    searchBarcodePlaceholder: "Search by barcode…",
    loadMore: "Show more",
    contactKicker: "Contact us",
    contactTitle: "",
    contactText: "",
    chooseAProduct: "Choose a product",
    riyadhSaudi: "",
    branchSummary: "",
    openMainMap: "Open headquarters location",
    branchBoardKicker: "",
    branchBoardTitle: "",
    activeBranches: "Branches",
    directWhatsAppLines: "WhatsApp contact options",
    directContactLines: "Direct phone lines",
    quickContactLabel: "Quick contact options",
    phone: "",
    email: "Email",
    emailCompany: "Email the company",
    location: "Location",
    branchHours: "",
    callHeadquarters: "",
    messageHeadquarters: "",
    openEveryDay: "Here for you every day",
    hoursBelow: "",
    directContact: "Direct contact",
    mainBranch: "Headquarters",
    companyBranch: "",
    jeddah: "",
    dammam: "",
    workingHours: "Business hours",
    whatsapp: "",
    whatsappOne: "WhatsApp 1",
    whatsappTwo: "WhatsApp 2",
    numberOne: "First number",
    numberTwo: "Second number",
    directNumber: "Contact number",
    callNumberOne: "Call the first number",
    callNumberTwo: "Call the second number",
    whatsappNumberOne: "Message the first number on WhatsApp",
    whatsappNumberTwo: "Message the second number on WhatsApp",
    callJeddah: "",
    whatsappJeddah: "",
    callDammamOne: "",
    callDammamTwo: "",
    whatsappDammamOne: "",
    whatsappDammamTwo: "",
    viewOnMaps: "View on Google Maps",
    branchWhatsApp: "",
    whatsappBranches: "Branch WhatsApp",
    branchContact: "",
    close: "Close",
    productDetails: "Product details",
    dialogNote: "The image includes product specifications and available printing and packaging options.",
    barcodeNumber: "Barcode number",
    copyBarcodeButton: "Copy barcode",
    footerLine: "",
  },
};

const catalogProducts = window.CATALOG_PRODUCTS ?? {};
const pageSize = 24;
const codeCollator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });
const offerCodes = ["19000-022","19000-023","19000-025","19000-028","19000-061","19000-062","19000-063","19000-064","19004-003","19004-004","19004-005","19004-009","19004-010","19004-011","19004-012","19004-013","19004-014","19004-017","19005-002","19008-001","19008-002","19008-003","19008-004","19008-005","19008-006","19008-007","19008-008","19008-009","19008-010","19008-011","19012-004","19012-005","19012-006","19012-007","19012-008","19012-041","19012-044","19014-021","19014-022","19014-023","19014-024","19014-025","19021-061","19021-062","19021-063","19021-064","19021-071","19021-072","19021-073","19021-074","19030-011","19030-013","19030-031","19030-033","19030-080","19030-081","19030-082","19030-090","19030-100","19030-101","19030-102","19030-110","19030-111","19030-112","19030-120","19030-130","19030-131","19030-132","19030-140","19030-141","19030-142","19030-150","19030-151","19030-161","19030-170","19030-171","19030-172","19030-181","19030-182","19030-211","19030-212","19030-213","19030-231","19030-232","19030-233","19030-241","19030-242","19030-243","19030-251","19030-252","19030-253","19031-021","19031-032","19031-033","19031-034","19031-035","19031-036","19031-037","19031-038","19050-095","19050-097","19050-105","19050-107","19050-108","19050-111","19050-112","19050-113","19050-114","19050-115","19050-116","19050-117","19050-118","19050-131","19050-132","19050-133","19050-134","19050-191","19050-211","19050-212","19051-052","19071-003","19071-004","19072-037","19072-038"];
// Enter confirmed percentages by barcode when available; an empty map shows no percentage.
const offerDiscounts = {};
const offers = offerCodes.map((code) => ({ code, discount: offerDiscounts[code] ?? null }));
const offersByCode = new Map(offers.map((offer) => [offer.code, offer]));
Object.assign(translations.ar, {octoberNav:"أكتوبر الوردي", octoberProductsTitle:"أصناف حملات التوعية", octoberEmpty:"لا توجد أصناف مطابقة ضمن مجموعة أكتوبر"});
Object.assign(translations.en, {octoberNav:"Pink October", octoberProductsTitle:"Awareness campaign products", octoberEmpty:"No matching products in the October collection"});
const newArrivalCodes = ["3411-071","3411-072","3411-073","3411-074","3411-075","3411-076","3411-077","3411-081","3411-082","3411-083","3411-084","3411-085","3411-086","3411-087","19000-047","19002-022","19005-051","19005-052","19005-053","19005-054","19011-037","19011-038","19011-071","19011-072","19011-073","19011-074","19011-075","19011-076","19011-077","19012-061","19014-111","19018-142","19021-191","19021-192","19021-193","19021-194","19021-195","19021-196","19021-197","19030-257","19030-276","19030-277","19030-312","19030-313","19030-314","19030-315","19030-316","19030-391","19030-392","19030-393","19030-394","19030-395","19030-396","19030-397","19033-001","19033-002","19033-003","19033-004","19033-005","19033-006","19033-007","19033-008","19033-009","19041-001","19042-001","19042-002","19042-003","19050-058","19050-185","19050-283","19050-329","19050-427","19050-461","19050-491","19050-492","19050-493","19050-494","19050-495","19050-496","19050-497","19050-498","19051-144","19051-145","19051-264","19051-321","19051-322","19051-323","19051-324","19051-325","19051-326","19051-327","19052-051","19052-052","19054-021","19054-022","19072-067","19072-068","19072-095","19072-096","19072-097","19092-021","19101-001","19101-002"];

const categoriesView = document.querySelector("#categories-view");
const grid = document.querySelector("#category-grid");
const search = document.querySelector("#category-search");
const resultCount = document.querySelector("#results-count");
const emptyState = document.querySelector("#empty-state");
const clearSearch = document.querySelector("#clear-search");
const globalSearchResults = document.querySelector("#global-search-results");
const globalSearchCount = document.querySelector("#global-search-count");
const globalProductGrid = document.querySelector("#global-product-grid");
const globalLoadMore = document.querySelector("#global-load-more");
const catalogOffersResults = document.querySelector("#catalog-offers-results");
const catalogOffersCount = document.querySelector("#catalog-offers-count");
const catalogOffersGrid = document.querySelector("#catalog-offers-grid");
const offersFilterEmpty = document.querySelector("#offers-filter-empty");
const productsView = document.querySelector("#products-view");
const backToCategories = document.querySelector("#back-to-categories");
const categoryTitle = document.querySelector("#category-title");
const productCount = document.querySelector("#product-count");
const productSearch = document.querySelector("#product-search");
const productResultsCount = document.querySelector("#product-results-count");
const productGrid = document.querySelector("#product-grid");
const productsEmptyState = document.querySelector("#products-empty-state");
const productsEmptyTitle = document.querySelector("#products-empty-title");
const productsEmptyText = document.querySelector("#products-empty-text");
const loadMore = document.querySelector("#load-more");
const productDialog = document.querySelector("#product-dialog");
const dialogClose = document.querySelector("#dialog-close");
const dialogImage = document.querySelector("#dialog-image");
const dialogThumbnails = document.querySelector("#dialog-thumbnails");
const dialogTitle = document.querySelector("#dialog-title");
const dialogCode = document.querySelector("#dialog-code");
const copyCode = document.querySelector("#copy-code");
const copyStatus = document.querySelector("#copy-status");
const dialogOfferNote = document.querySelector("#dialog-offer-note");
const dialogOfferValue = document.querySelector("#dialog-offer-value");
const categoryModeButtons = document.querySelectorAll("[data-category-mode]");
const sortButtons = document.querySelectorAll("[data-code-sort]");
const catalogSort = document.querySelector("#catalog-sort");
const showcaseCards = document.querySelectorAll("[data-open-category]");
const siteHeader = document.querySelector("#site-header");
const menuToggle = document.querySelector("#menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");
const currentYear = document.querySelector("#current-year");
const languageToggle = document.querySelector("#language-toggle");
const descriptionMeta = document.querySelector('meta[name="description"]');
const branchBoard = document.querySelector("#branches");
const branchLinks = document.querySelectorAll('a[href="#branch-cards"]');
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let activeCategory = null;
let visibleProductCount = pageSize;
let visibleGlobalProductCount = pageSize;
let autoLoadPending = false;
let activeProduct = null;
let activeProductCategory = null;
let categoryMode = "all";
let sortAscending = true;
let currentLanguage = "ar";

try {
  const savedLanguage = localStorage.getItem("catalog-language");
  if (savedLanguage === "ar" || savedLanguage === "en") currentLanguage = savedLanguage;
} catch {
  currentLanguage = "ar";
}

const tr = (key) => translations[currentLanguage][key] ?? translations.ar[key] ?? key;
const categoryName = (category) => currentLanguage === "ar" ? category.nameAr : category.nameEn;
function sortByCode(items) {
  return [...items].sort((a, b) => {
    const first = a.product?.code ?? a.code;
    const second = b.product?.code ?? b.code;
    return sortAscending ? codeCollator.compare(first, second) : codeCollator.compare(second, first);
  });
}
function updateSortButtons() {
  sortButtons.forEach((button) => {
    button.querySelector("[data-sort-label]").textContent = tr(sortAscending ? "sortAscending" : "sortDescending");
    button.setAttribute("aria-label", tr(sortAscending ? "sortToDescending" : "sortToAscending"));
    button.setAttribute("aria-pressed", String(sortAscending));
    button.title = button.getAttribute("aria-label");
  });
}
const normalize = (value) =>
  String(value)
    .trim()
    .toLocaleLowerCase(currentLanguage === "ar" ? "ar" : "en")
    .replace(/[أإآ]/g, "ا")
    .replace(/[٠-٩]/g, c => String(c.charCodeAt(0)-1632))
    .replace(/[۰-۹]/g, c => String(c.charCodeAt(0)-1776))
    .replace(/[\u064b-\u065f\u0640]/g, "")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي");

const compact = (value) => normalize(value).replace(/[\s\-_./]+/g, "");

function matchesSearch(haystack, query) {
  const normalizedHaystack = normalize(haystack);
  const compactHaystack = compact(haystack);
  return normalize(query)
    .split(/\s+/)
    .filter(Boolean)
    .every((token) => {
      const compactToken = compact(token);
      return normalizedHaystack.includes(token) || Boolean(compactToken && compactHaystack.includes(compactToken));
    });
}

function productsFor(category) {
  return category?.key ? catalogProducts[category.key] ?? [] : [];
}

function coverFor(category) {
  return productsFor(category)[0]?.images?.[0] ?? null;
}

function productSearchText(product, category) {
  const terms = categorySearchTerms[category.id] ?? {};
  const names = productNameOverrides[product.code] ?? window.DIC_DETAILS?.[product.code]?.name ?? {};
  return [
    product.code,
    compact(product.code),
    product.nameAr,
    product.nameEn,
    ...(window.DIC_DETAILS?.[product.code]?.specs ?? []).flat(),
    names.ar,
    names.en,
    category.nameAr,
    category.nameEn,
    terms.ar,
    terms.en,
  ].filter(Boolean).join(" ");
}

function productDisplayName(product, category) {
  const names = productNameOverrides[product.code] ?? window.DIC_DETAILS?.[product.code]?.name ?? {};
  const name = currentLanguage === "ar"
    ? product.nameAr ?? names.ar ?? category.nameAr
    : product.nameEn ?? names.en ?? category.nameEn;
  return String(name).split(product.code).join('').replace(/[\s—–|:-]+$/u, '').trim() || categoryName(category);
}

function allSearchableProducts() {
  return [...new Map(categories.flatMap((category) =>
    productsFor(category).map((product) => ({ product, category })),
  ).map(item => [item.product.code, item])).values()];
}

function offerFor(code) {
  return offersByCode.get(code) ?? null;
}

function productWithOfferImages(product) {
  if (!product.offerImage || !offerFor(product.code)) return product;
  return {
    ...product,
    images: [...new Set([product.offerImage, ...product.images])],
    imageLayout: "contain",
    imageTopInset: 0,
  };
}

function allOfferProducts() {
  return offers.flatMap((offer) => {
    for (const category of categories) {
      const product = productsFor(category).find((item) => item.code === offer.code);
      if (product) return [{ offer, product, category }];
    }
    return [];
  });
}

function allOctoberProducts() {
  const codes = new Set(window.DIC_OCTOBER_CODES || []);
  return allSearchableProducts().filter(({product}) => codes.has(product.code));
}

function allNewArrivals() {
  return newArrivalCodes.flatMap((code) => {
    for (const category of categories) {
      const product = productsFor(category).find((item) => item.code === code);
      if (product) return [{ product, category }];
    }
    return [];
  });
}

function offerDiscountText(offer) {
  if (offer.discount == null) return tr("offers");
  return currentLanguage === "ar" ? `خصم ${offer.discount}%` : `${offer.discount}% off`;
}

function renderCatalogOffers(query = "") {
  const isNew = categoryMode === "new";
  const isOctober = categoryMode === "october";


  const offerProducts = isOctober ? allOctoberProducts() : isNew ? allNewArrivals() : allOfferProducts();
  const matches = sortByCode(query
    ? offerProducts.filter(({ product, category }) => matchesSearch(productSearchText(product, category), query))
    : offerProducts);

  catalogOffersGrid.replaceChildren(
    ...matches.map(({ product, category }, index) => createProductCard(isNew || isOctober ? product : productWithOfferImages(product), category, index, true)),
  );
  catalogOffersResults.hidden = false;
  grid.hidden = true;
  globalSearchResults.hidden = true;
  globalProductGrid.replaceChildren();
  globalLoadMore.hidden = true;
  emptyState.hidden = true;
  offersFilterEmpty.hidden = matches.length !== 0;
  document.querySelector('[data-i18n="offersFilterKicker"]').textContent = isOctober ? tr("octoberNav") : isNew ? tr("newArrivals") : tr("offersFilterKicker");
  document.querySelector('#catalog-offers-title').textContent = isOctober ? tr("octoberProductsTitle") : isNew ? tr("newArrivalsTitle") : tr("offersFilterTitle");
  offersFilterEmpty.querySelector('strong').textContent = isOctober ? tr("octoberEmpty") : isNew ? tr("noNewArrivalsMatchTitle") : tr("noOffersMatchTitle");
  catalogOffersCount.textContent = currentLanguage === "ar"
    ? `${matches.length} من أصل ${offerProducts.length} ${isNew || isOctober ? "منتجات" : "عروض"}`
    : `${matches.length} of ${offerProducts.length} ${isOctober ? "October products" : isNew ? "new products" : "offers"}`;
  resultCount.textContent = isNew || isOctober
    ? productLabel(matches.length)
    : currentLanguage === "ar"
      ? `${matches.length} ${matches.length === 1 ? "عرض متاح" : "عروض متاحة"}`
      : `${matches.length} ${matches.length === 1 ? "offer" : "offers"} available`;
}

function productLabel(count) {
  return currentLanguage === "ar" ? `${count} منتج` : `${count} ${count === 1 ? "product" : "products"}`;
}

function updateDocumentTitle() {
  document.title = activeCategory
    ? `${categoryName(activeCategory)} | ${currentLanguage === "ar" ? "كتالوج المنتجات" : "Product Catalog"}`
    : tr("pageTitle");
  descriptionMeta.content = tr("pageDescription");
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = tr(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = tr(element.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = tr(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", tr(element.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = tr(element.dataset.i18nAlt);
  });
  document.querySelectorAll("[data-direction-arrow]").forEach((element) => {
    if (element.textContent !== "↗") element.textContent = currentLanguage === "ar" ? "←" : "→";
  });
  document.querySelectorAll("[data-back-arrow]").forEach((element) => {
    element.textContent = currentLanguage === "ar" ? "→" : "←";
  });
  document.querySelectorAll("[data-category-name]").forEach((element) => {
    const category = categories.find((item) => item.id === Number(element.dataset.categoryName));
    if (category) element.textContent = categoryName(category);
  });
  document.querySelectorAll("[data-category-aria]").forEach((element) => {
    const category = categories.find((item) => item.id === Number(element.dataset.categoryAria));
    if (category) {
      element.setAttribute("aria-label", currentLanguage === "ar" ? `فتح قسم ${categoryName(category)}` : `Open ${categoryName(category)} category`);
    }
  });

  const switchLabel = currentLanguage === "ar" ? "Switch to English" : "التبديل إلى العربية";
  languageToggle.textContent = currentLanguage === "ar" ? "EN" : "العربية";
  languageToggle.title = currentLanguage === "ar" ? "English" : "العربية";
  languageToggle.setAttribute("aria-label", switchLabel);
  menuToggle.setAttribute("aria-label", tr(menuToggle.getAttribute("aria-expanded") === "true" ? "closeMenu" : "openMenu"));
  updateSortButtons();
  updateDocumentTitle();
}

function renderCategories(items) {
  grid.replaceChildren(
    ...items.map((category, index) => {
      const products = productsFor(category);
      const cover = coverFor(category);
      const card = document.createElement("button");
      card.className = `category-card${category.id === 1 ? " category-card--featured" : ""}`;
      card.type = "button";
      card.dataset.categoryId = String(category.id);
      card.setAttribute("aria-label", currentLanguage === "ar" ? `فتح قسم ${categoryName(category)}` : `Open ${categoryName(category)} category`);

      const visual = document.createElement("span");
      visual.className = "category-visual";
      if (cover) {
        const image = document.createElement("img");
        image.src = cover;
        image.alt = "";
        image.loading = index < 4 ? "eager" : "lazy";
        image.decoding = "async";
        image.width = 600;
        image.height = 988;
        visual.append(image);
      } else {
        const placeholder = document.createElement("span");
        placeholder.className = "category-placeholder";
        placeholder.textContent = String(category.id).padStart(2, "0");
        visual.append(placeholder);
      }

      const shade = document.createElement("span");
      shade.className = "category-shade";
      const body = document.createElement("span");
      body.className = "category-card-body";
      const info = document.createElement("span");
      const number = document.createElement("span");
      number.className = "category-number";
      number.textContent = currentLanguage === "ar"
        ? `القسم ${String(category.id).padStart(2, "0")}`
        : `Category ${String(category.id).padStart(2, "0")}`;
      const title = document.createElement("span");
      title.className = "category-name";
      title.textContent = categoryName(category);
      const meta = document.createElement("small");
      meta.className = "category-meta";
      meta.textContent = products.length
        ? productLabel(products.length)
        : currentLanguage === "ar" ? "بانتظار إضافة المنتجات" : "Products coming soon";
      info.append(number, title, meta);

      const arrow = document.createElement("span");
      arrow.className = "category-arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = currentLanguage === "ar" ? "←" : "→";
      body.append(info, arrow);
      card.append(visual, shade, body);
      card.addEventListener("click", () => openCategory(category, true));
      return card;
    }),
  );

  const poolSize = categoryMode === "available"
    ? categories.filter((category) => productsFor(category).length).length
    : categories.length;

  if (items.length === poolSize) {
    resultCount.textContent = currentLanguage === "ar"
      ? categoryMode === "available" ? `${poolSize} أقسام متوفرة الآن` : `${poolSize} قسمًا في الكتالوج`
      : categoryMode === "available" ? `${poolSize} categories available now` : `${poolSize} categories in the catalogue`;
  } else {
    resultCount.textContent = currentLanguage === "ar"
      ? `${items.length} نتيجة من أصل ${poolSize}`
      : `${items.length} results out of ${poolSize}`;
  }
  emptyState.hidden = items.length !== 0;
}

function filterCategories() {
  const query = search.value.trim();
  catalogSort.hidden = categoryMode === "all" && !query;
  if (categoryMode === "offers" || categoryMode === "new" || categoryMode === "october") {
    renderCatalogOffers(query);
    return;
  }

  catalogOffersResults.hidden = true;
  catalogOffersGrid.replaceChildren();
  offersFilterEmpty.hidden = true;
  grid.hidden = false;
  const pool = query
    ? categories
    : categoryMode === "available"
      ? categories.filter((category) => productsFor(category).length)
      : categories;
  const filtered = query
    ? pool.filter((category) => {
        const terms = categorySearchTerms[category.id] ?? {};
        return matchesSearch(`${category.nameAr} ${category.nameEn} ${terms.ar ?? ""} ${terms.en ?? ""}`, query);
      })
    : pool;
  renderCategories(filtered);

  if (!query) {
    visibleGlobalProductCount = pageSize;
    globalSearchResults.hidden = true;
    globalProductGrid.replaceChildren();
    globalLoadMore.hidden = true;
    emptyState.hidden = filtered.length !== 0;
    return;
  }

  const productMatches = allSearchableProducts().filter(({ product, category }) =>
    matchesSearch(productSearchText(product, category), query),
  );
  renderGlobalSearchProducts(productMatches);
  resultCount.textContent = currentLanguage === "ar"
    ? `${filtered.length} أقسام • ${productMatches.length} أصناف`
    : `${filtered.length} categories • ${productMatches.length} products`;
  emptyState.hidden = filtered.length + productMatches.length !== 0;
}

function productImageCropFraction(product) {
  // Older supplier sheets include the company banner; newer full sheets do not.
  const fallback = product?.imageLayout === "full" || product?.imageLayout === "contain" ? 0 : 310 / 1976;
  const inset = Number(product?.imageTopInset ?? fallback);
  return inset > 0 && inset < 1 ? inset : 0;
}

// Fit the visible portion of a supplier card inside the usual fixed frame.
function fitContainedProductCrop(image, product, frameRatio) {
  const inset = productImageCropFraction(product);
  for (const key of ["top", "left", "width", "height", "objectFit", "clipPath"]) image.style[key] = "";
  if (!image.naturalWidth || !image.naturalHeight) return;
  const ratio = image.naturalWidth / image.naturalHeight;
  const height = Math.min(1 / (1 - inset), frameRatio / ratio);
  const width = height * ratio / frameRatio;
  image.style.width = `${width * 100}%`;
  image.style.height = `${height * 100}%`;
  image.style.left = `${(1 - width) * 50}%`;
  image.style.top = `${((1 - height * (1 - inset)) / 2 - height * inset) * 100}%`;
  image.style.objectFit = "fill";
  // Hide the banner even when fitting a wide sheet leaves space above the body.
  image.style.clipPath = inset ? `inset(${inset * 100}% 0 0 0)` : "none";
}

function createProductCard(product, category, index, showCategory = false) {
  const offer = offerFor(product.code);
  const card = document.createElement("button");
  card.className = `product-card dic-card-compact${showCategory ? " product-card--search" : ""}${offer ? " product-card--offer" : ""}`;
  card.type = "button";
  card.classList.add("dic-contained");
  card.setAttribute("aria-label", currentLanguage === "ar" ? `عرض تفاصيل المنتج ${product.code}` : `View product ${product.code} details`);

  const imageWrap = document.createElement("span");
  imageWrap.className = "product-image-wrap";
  const image = document.createElement("img");
  image.src = product.images[0];
  const topInset = productImageCropFraction(product);
  image.style.top = topInset ? `${-100 * topInset / (1 - topInset)}%` : "";
  image.alt = currentLanguage === "ar"
    ? `بطاقة مواصفات من قسم ${categoryName(category)}، الباركود ${product.code}`
    : `Specification card from ${categoryName(category)}, barcode ${product.code}`;
  image.loading = index < 6 ? "eager" : "lazy";
  image.decoding = "async";
  image.width = 600;
  image.height = 988;
  image.addEventListener("load", () => {
    if (image.naturalWidth && image.naturalHeight) {
      imageWrap.style.aspectRatio = "1200 / 1521";
      fitContainedProductCrop(image, product, 1200 / 1521);
    }
  }, { once: true });
  imageWrap.append(image);
  let offerBadge = null;
  if (offer) {
    const badge = document.createElement("span");
    badge.className = "product-offer-badge";
    if (offer.discount == null) {
      badge.textContent = tr("offers");
    } else {
      badge.innerHTML = `<small>${currentLanguage === "ar" ? "خصم" : "OFF"}</small><strong>${offer.discount}%</strong>`;
    }
    offerBadge = badge;
  }

  const body = document.createElement("span");
  body.className = "product-card-body";
  const codeWrap = document.createElement("span");
  codeWrap.className = "product-code-wrap";
  if (showCategory) {
    const productName = document.createElement("span");
    productName.className = "product-result-name";
    productName.textContent = productDisplayName(product, category);
    productName.title = productName.textContent;
    codeWrap.append(productName);
  }
  const label = document.createElement("span");
  label.className = "product-code-label";
  label.textContent = currentLanguage === "ar" ? "الباركود" : "Barcode";
  const code = document.createElement("strong");
  code.className = "product-code";
  code.dir = "ltr";
  code.textContent = product.code;
  codeWrap.append(label, code);

  const action = document.createElement("span");
  action.className = "product-action";
  action.setAttribute("aria-hidden", "true");
  action.textContent = currentLanguage === "ar" ? "←" : "→";
  body.append(codeWrap, ...(offerBadge ? [offerBadge] : []), action);
  card.append(imageWrap, body);
  card.addEventListener("click", () => openProduct(product, category));
  return card;
}

function renderGlobalSearchProducts(matches) {
  const visible = sortByCode(matches).slice(0, visibleGlobalProductCount);
  globalProductGrid.replaceChildren(
    ...visible.map(({ product, category }, index) => createProductCard(product, category, index, true)),
  );
  globalSearchResults.hidden = matches.length === 0;
  globalSearchCount.textContent = currentLanguage === "ar"
    ? `عرض ${Math.min(visible.length, matches.length)} من أصل ${matches.length} صنف`
    : `Showing ${Math.min(visible.length, matches.length)} of ${matches.length} products`;
  globalLoadMore.hidden = visible.length >= matches.length;
}

function renderProducts() {
  const allProducts = productsFor(activeCategory);
  const query = productSearch.value.trim();
  const filtered = sortByCode(query
    ? allProducts.filter((product) => matchesSearch(productSearchText(product, activeCategory), query))
    : allProducts);
  const visible = filtered.slice(0, visibleProductCount);

  productGrid.replaceChildren(
    ...visible.map((product, index) => createProductCard(product, activeCategory, index)),
  );

  const hasProducts = allProducts.length > 0;
  const hasResults = filtered.length > 0;
  productsEmptyState.hidden = hasResults;
  productGrid.hidden = !hasResults;

  if (!hasProducts) {
    productsEmptyTitle.textContent = currentLanguage === "ar" ? "لم تُضف منتجات هذا القسم بعد" : "No products have been added yet";
    productsEmptyText.textContent = currentLanguage === "ar" ? "ستظهر المنتجات هنا فور إضافتها إلى الكتالوج." : "Products will appear here as soon as they are added to the catalogue.";
  } else {
    productsEmptyTitle.textContent = currentLanguage === "ar" ? "لم نجد هذا الباركود" : "Barcode not found";
    productsEmptyText.textContent = currentLanguage === "ar" ? "تأكد من الرقم وحاول مرة أخرى." : "Check the number and try again.";
  }

  productResultsCount.textContent = hasProducts
    ? query
      ? currentLanguage === "ar" ? `${filtered.length} نتيجة مطابقة` : `${filtered.length} matching results`
      : currentLanguage === "ar"
        ? `عرض ${Math.min(visible.length, filtered.length)} من أصل ${filtered.length} منتج`
        : `Showing ${Math.min(visible.length, filtered.length)} of ${filtered.length} products`
    : "";
  loadMore.hidden = !hasResults || visible.length >= filtered.length;
}

function loadNextProductPage() {
  if (autoLoadPending || !activeCategory || loadMore.hidden) return;
  autoLoadPending = true;
  window.requestAnimationFrame(() => {
    visibleProductCount += pageSize;
    renderProducts();
    autoLoadPending = false;
    if (!loadMore.hidden && loadMore.getBoundingClientRect().top < window.innerHeight + 600) loadNextProductPage();
  });
}

loadMore.setAttribute("aria-hidden", "true");
loadMore.tabIndex = -1;

if ("IntersectionObserver" in window) {
  const autoLoadObserver = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) loadNextProductPage();
  }, { rootMargin: "600px 0px", threshold: 0 });
  autoLoadObserver.observe(loadMore);
} else {
  window.addEventListener("scroll", () => {
    if (!loadMore.hidden && loadMore.getBoundingClientRect().top < window.innerHeight + 600) {
      loadNextProductPage();
    }
  }, { passive: true });
}

function openCategory(category, updateHistory = false) {
  activeCategory = category;
  visibleProductCount = pageSize;
  productSearch.value = "";
  categoryTitle.textContent = categoryName(category);
  const count = productsFor(category).length;
  productCount.textContent = count ? productLabel(count) : currentLanguage === "ar" ? "قسم المنتجات" : "Product category";
  categoriesView.hidden = true;
  productsView.hidden = false;
  updateDocumentTitle();
  renderProducts();

  if (updateHistory) history.pushState({ categoryId: category.id }, "", `#category-${category.id}`);
  document.querySelector("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
}

function showCategories(updateHistory = false) {
  activeCategory = null;
  categoriesView.hidden = false;
  productsView.hidden = true;
  updateDocumentTitle();
  if (updateHistory) history.pushState({}, "", "#catalog");
  document.querySelector("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
}

function refreshActiveDialog() {
  if (!activeProduct || !activeProductCategory) return;
  const offer = offerFor(activeProduct.code);
  const topInset = productImageCropFraction(activeProduct);
  dialogImage.style.top = topInset ? `${-100 * topInset / (1 - topInset)}%` : "";
  fitContainedProductCrop(dialogImage, activeProduct, 1200 / 1666);
  dialogImage.parentElement.style.aspectRatio = "1200 / 1666";
  productDialog.classList.remove("dic-uncropped");
  productDialog.classList.add("dic-contained");
  dialogImage.alt = currentLanguage === "ar"
    ? `بطاقة المواصفات الكاملة للمنتج ${activeProduct.code}`
    : `Full specification card for product ${activeProduct.code}`;
  dialogTitle.replaceChildren(document.createTextNode(productDisplayName(activeProduct, activeProductCategory) + ' — '));
  const titleCode = document.createElement('bdi');titleCode.dir = 'ltr';titleCode.style.whiteSpace = 'nowrap';titleCode.textContent = activeProduct.code;dialogTitle.append(titleCode);
  dialogOfferNote.hidden = !offer;
  dialogOfferValue.textContent = offer ? offerDiscountText(offer) : "";
  copyStatus.textContent = "";
}

function openProduct(product, category = activeCategory) {
  product = productWithOfferImages(product);
  activeProduct = product;
  activeProductCategory = category;
  dialogImage.src = product.images[0];
  dialogCode.textContent = product.code;
  refreshActiveDialog();

  dialogThumbnails.replaceChildren(
    ...product.images.map((imagePath, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `dialog-thumbnail${index === 0 ? " is-active" : ""}`;
      button.setAttribute("aria-label", currentLanguage === "ar"
        ? `عرض الصورة ${index + 1} للمنتج ${product.code}`
        : `View image ${index + 1} for product ${product.code}`);
      const image = document.createElement("img");
      image.src = imagePath;
      image.alt = "";
      image.loading = "lazy";
      button.append(image);
      button.addEventListener("click", () => {
        dialogImage.src = imagePath;
        dialogThumbnails.querySelectorAll("button").forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
      });
      return button;
    }),
  );
  dialogThumbnails.hidden = product.images.length < 2;
  if (!productDialog.open) productDialog.showModal();
}

async function copyActiveCode() {
  if (!activeProduct) return;
  try {
    await navigator.clipboard.writeText(activeProduct.code);
    copyStatus.textContent = currentLanguage === "ar" ? "تم نسخ الباركود." : "Barcode copied.";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(dialogCode);
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = currentLanguage === "ar" ? "الباركود محدد وجاهز للنسخ." : "Barcode selected and ready to copy.";
  }
}

function setLanguage(language) {
  currentLanguage = language;
  try {
    localStorage.setItem("catalog-language", language);
  } catch {
    // Language still applies for the current visit when storage is unavailable.
  }
  applyTranslations();
  filterCategories();
  if (activeCategory) {
    categoryTitle.textContent = categoryName(activeCategory);
    const count = productsFor(activeCategory).length;
    productCount.textContent = count ? productLabel(count) : currentLanguage === "ar" ? "قسم المنتجات" : "Product category";
    renderProducts();
  }
  if (productDialog.open) refreshActiveDialog();
}

search.addEventListener("input", () => {
  visibleGlobalProductCount = pageSize;
  filterCategories();
});
categoryModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryMode = button.dataset.categoryMode;
    categoryModeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    filterCategories();
  });
});
sortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sortAscending = !sortAscending;
    updateSortButtons();
    filterCategories();
    if (activeCategory) renderProducts();
  });
});
function showOffers(updateHistory = false) {
  activeCategory = null;
  categoriesView.hidden = false;
  productsView.hidden = true;
  categoryMode = "offers";
  search.value = "";
  categoryModeButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.categoryMode === "offers"));
  updateDocumentTitle();
  filterCategories();
  if (updateHistory) history.pushState({}, "", "#offers");
  catalogOffersResults.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll('a[href="#offers"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showOffers(true);
  });
});
document.querySelectorAll('[data-open-categories]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (productDialog.open) productDialog.close();
    activeCategory = null;
    categoryMode = "all";
    search.value = "";
    categoryModeButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.categoryMode === "all"));
    filterCategories();
    showCategories(true);
    closeMobileMenu();
  });
});
clearSearch.addEventListener("click", () => {
  search.value = "";
  filterCategories();
  search.focus();
});
productSearch.addEventListener("input", () => {
  visibleProductCount = pageSize;
  renderProducts();
});
globalLoadMore.addEventListener("click", () => {
  visibleGlobalProductCount += pageSize;
  const query = search.value.trim();
  const matches = allSearchableProducts().filter(({ product, category }) =>
    matchesSearch(productSearchText(product, category), query),
  );
  renderGlobalSearchProducts(matches);
});
backToCategories.addEventListener("click", () => showCategories(true));
dialogClose.addEventListener("click", () => productDialog.close());
copyCode.addEventListener("click", copyActiveCode);
languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "ar" ? "en" : "ar"));
productDialog.addEventListener("click", (event) => {
  if (event.target === productDialog) productDialog.close();
});
showcaseCards.forEach((card) => {
  card.addEventListener("click", () => {
    const category = categories.find((item) => item.id === Number(card.dataset.openCategory));
    if (category) openCategory(category, true);
  });
});

function closeMobileMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", tr("openMenu"));
  mobileNav.hidden = true;
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", tr(isOpen ? "openMenu" : "closeMenu"));
  mobileNav.hidden = isOpen;
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

let contactArrivalTimer;
function animateContactArrival() {
  if (!branchBoard || reducedMotion.matches) return;
  branchBoard.classList.remove("is-contact-arrival");
  void branchBoard.offsetWidth;
  branchBoard.classList.add("is-contact-arrival");
  window.clearTimeout(contactArrivalTimer);
  contactArrivalTimer = window.setTimeout(() => {
    branchBoard.classList.remove("is-contact-arrival");
  }, 1450);
}

branchLinks.forEach((link) => {
  link.addEventListener("click", () => {
    window.setTimeout(animateContactArrival, 260);
  });
});

function updateHeader() {
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 16);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (!reducedMotion.matches) {
  document.body.classList.add("motion-ready");
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
}

window.addEventListener("popstate", () => {
  const match = location.hash.match(/^#category-(\d+)$/);
  const category = match ? categories.find((item) => item.id === Number(match[1])) : null;
  if (category) openCategory(category, false);
  else if (location.hash === "#offers") showOffers(false);
  else if (location.hash === "#catalog" || !location.hash) showCategories(false);
});


Object.assign(translations.ar,{pageTitle:'كتالوج المنتجات | هدايا ومواد دعائية',pageDescription:'صور ومواصفات وباركود الهدايا والمواد الدعائية.',catalogIntro:'تصفّح جميع أقسام الكتالوج، أو انتقل مباشرة إلى المنتجات المشمولة بالعروض.',productIntro:'افتح المنتج لمشاهدة الصورة والمواصفات ونسخ الباركود.',searchBarcode:'ابحث باسم المنتج أو الباركود',searchBarcodePlaceholder:'اسم المنتج أو الباركود…'});
Object.assign(translations.en,{pageTitle:'Product Catalog | Gifts & Promotional Products',pageDescription:'Product photos, specifications and barcodes.',catalogIntro:'Browse all catalog categories, new arrivals and offers.',productIntro:'Open a product to view photos and specifications or copy its barcode.',searchBarcode:'Search by product name or barcode',searchBarcodePlaceholder:'Product name or barcode…'});
currentYear.textContent = new Date().getFullYear();
applyTranslations();
filterCategories();
const initialMatch = location.hash.match(/^#category-(\d+)$/);
const initialCategory = initialMatch
  ? categories.find((item) => item.id === Number(initialMatch[1]))
  : null;
if (initialCategory) openCategory(initialCategory, false);
else if (location.hash === "#offers") showOffers(false);
