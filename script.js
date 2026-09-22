const products = [
  {
    id: 1,
    title: 'طوق شعر نسائي أنيق مرصع بالكريستال',
    category: 'jewelry',
    categoryLabel: 'إكسسوارات ومجوهرات',
    price: 375,
    oldPrice: 442,
    badge: 'خصم 12%',
    badgeClass: '',
    image:
      '%D9%85%D9%86%D8%AA%D8%AC%201/http___img.ltwebstatic.com_images3_spmp_2025_03_03_07_1740982941d5685d8a908ba15fed47d6f1d17bc7bc.jpg',
    link: 'https://onelink.shein.com/53/62rufs3gak4p?ismg_ol=DLOdrdVxh7S_01_KOC-C'
  },
  {
    id: 2,
    title: 'أظافر صناعية قصيرة مربعة بلمعة فرنسية',
    category: 'jewelry',
    categoryLabel: 'إكسسوارات ومجوهرات',
    price: 50.98,
    oldPrice: 78.04,
    badge: 'خصم 35%',
    badgeClass: '',
    image:
      '%D9%85%D9%86%D8%AA%D8%AC%202/http___img.ltwebstatic.com_v4_j_spmp_2026_08_06_b5_1785994068032c5ca440374625f3456861d593b354.jpg',
    link: 'https://onelink.shein.com/53/62ruaasd36dh?ismg_ol=4Ta3AzQgtLW_01_KOC-C'
  },
  {
    id: 3,
    title: 'رموش صناعية ذاتية اللصق بأطوال متنوعة 11-13 مم',
    category: 'jewelry',
    categoryLabel: 'إكسسوارات ومجوهرات',
    price: 192.49,
    oldPrice: 223.7,
    badge: 'خصم 14%',
    badgeClass: '',
    image:
      '%D9%85%D9%86%D8%AA%D8%AC%203/http___img.ltwebstatic.com_v4_j_spmp_2025_11_27_1c_1764235200c7718e7fb4518cca1fc827e18005676e.jpg',
    link: 'https://onelink.shein.com/53/62rulr5tju35?ismg_ol=LXk2K5Dqh0u_01_KOC-C'
  },
  {
    id: 4,
    title: 'كرمة أوراق أوكالبتوس صناعية للديكور',
    category: 'home',
    categoryLabel: 'ديكور منزلي',
    price: 66.97,
    oldPrice: 77.87,
    badge: 'خصم 14%',
    badgeClass: '',
    image:
      '%D9%85%D9%86%D8%AA%D8%AC%204/http___img.ltwebstatic.com_v4_j_spmp_2026_07_22_0c_17847084408d9c16c6aa27248824fee3556f9a4dab.jpg',
    link: 'https://onelink.shein.com/53/62rv024vy5o7?ismg_ol=DHuHpC3RvPp_01_KOC-C'
  },
  {
    id: 5,
    title: 'طقم كاجوال للفتيات هودي وبنطلون بنقشة الفهد',
    category: 'clothing',
    categoryLabel: 'ملابس وأزياء',
    price: 606.32,
    oldPrice: 713.32,
    badge: 'خصم 15%',
    badgeClass: '',
    image:
      '%D9%85%D9%86%D8%AA%D8%AC%205/http___img.ltwebstatic.com_v4_j_dps_PS2026082117430_13e0f60567b085148d1ce615638efb6b2d4c44b90ff827921d192991382270f4.jpg',
    link: 'https://onelink.shein.com/53/62rv024vy5o7?ismg_ol=DHuHpC3RvPp_01_KOC-C'
  },
  {
    id: 6,
    title: 'طقم أدوات عناية بالوجه من 4 قطع',
    category: 'beauty',
    categoryLabel: 'عناية وجمال',
    price: 60.22,
    oldPrice: 88.56,
    badge: 'خصم 32%',
    badgeClass: '',
    image:
      '%D9%85%D9%86%D8%AA%D8%AC%206/http___img.ltwebstatic.com_v4_j_spmp_2026_03_20_0f_1773995402f11e43644d15e88d9be87d72c24d40ea.jpg',
    link: 'https://onelink.shein.com/53/62rvzipvud07?ismg_ol=0pTotaMW592_01_KOC-C',
    source: 'SHEIN'
  },
  {
    id: 7,
    title: 'سماعات KZ EDX Pro سلكية داخل الأذن',
    category: 'electronics',
    categoryLabel: 'إلكترونيات',
    price: 490.5,
    oldPrice: null,
    badge: 'الأكثر مبيعًا',
    badgeClass: 'new',
    image: '%D9%85%D9%86%D8%AA%D8%AC%207/H3dfd17fdf6ff4cc48a96ed28c172b388Y.jpg',
    link: 'https://s.click.aliexpress.com/e/_c3zFsL7x',
    source: 'AliExpress'
  },
  {
    id: 8,
    title: 'محطة إرساء USB وType-C متعددة المنافذ',
    category: 'electronics',
    categoryLabel: 'إلكترونيات',
    price: 136.42,
    oldPrice: null,
    badge: 'الأكثر مبيعًا',
    badgeClass: 'new',
    image: '%D9%85%D9%86%D8%AA%D8%AC%208/S050317d1e1cc4059abcb3aa10479f1fcC.jpg',
    link: 'https://s.click.aliexpress.com/e/_c4pPbisp',
    source: 'AliExpress'
  },
  {
    id: 9,
    title: 'ساعة رجالية ميكانيكية أوتوماتيكية بحزام ذهبي',
    category: 'watches',
    categoryLabel: 'ساعات أنيقة',
    price: 1243.88,
    oldPrice: null,
    badge: 'الأكثر مبيعًا',
    badgeClass: 'new',
    image: '%D9%85%D9%86%D8%AA%D8%AC%209/S303e545191a54b68a0b4fa27b0e275456.jpg',
    link: 'https://s.click.aliexpress.com/e/_c439HVFL',
    source: 'AliExpress'
  }
];

const state = {
  category: 'all',
  query: ''
};

const storageKey = 'lumiere-favorites';
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const resultCount = document.getElementById('resultCount');
const toastEl = document.getElementById('toast');
const themeToggle = document.getElementById('themeToggle');
let favorites = [];

try {
  favorites = JSON.parse(localStorage.getItem(storageKey) || '[]');
} catch (error) {
  favorites = [];
}

function formatPrice(value) {
  return `${value.toFixed(2)} جنيه`;
}

function showToast(message) {
  if (!toastEl) return;

  toastEl.textContent = message;
  toastEl.classList.add('show');

  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 1800);
}

function setTheme(theme) {
  const isDark = theme === 'dark';
  document.body.classList.toggle('dark-mode', isDark);

  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع المعتم');
    themeToggle.classList.toggle('is-dark', isDark);
    themeToggle.querySelector('i').className = `fa-solid ${isDark ? 'fa-sun' : 'fa-moon'}`;
    themeToggle.querySelector('span').textContent = isDark ? 'الوضع الفاتح' : 'الوضع المعتم';
  }

  localStorage.setItem('lumiere-theme', theme);
}

function toggleFavorite(productId, button) {
  if (!button) return;

  const index = favorites.indexOf(productId);

  if (index >= 0) {
    favorites.splice(index, 1);
    button.classList.remove('active');
    button.textContent = '♡';
    showToast('تمت إزالة المنتج من المفضلة');
  } else {
    favorites.push(productId);
    button.classList.add('active');
    button.textContent = '♥';
    showToast('تمت إضافة المنتج إلى المفضلة');
  }

  localStorage.setItem(storageKey, JSON.stringify(favorites));
}

function renderProducts() {
  const filteredProducts = products.filter((product) => {
    const matchesCategory = state.category === 'all' || product.category === state.category;
    const query = state.query.trim().toLowerCase();
    const matchesQuery =
      !query ||
      product.title.toLowerCase().includes(query) ||
      product.categoryLabel.toLowerCase().includes(query) ||
      product.badge.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });

  if (resultCount) {
    resultCount.textContent = `عرض ${filteredProducts.length} منتج${filteredProducts.length === 1 ? '' : 'ات'}`;
  }

  if (!filteredProducts.length) {
    productsGrid.innerHTML = `
      <div class="empty-state">
        <h3>لا توجد منتجات مطابقة للبحث الحالي.</h3>
        <p>جرّب كلمة مختلفة أو اختر فئة أخرى.</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card" data-category="${product.category}">
          <div class="badge ${product.badgeClass}">${product.badge}</div>
          <img src="${product.image}" alt="${product.title}" class="product-img" />
          <div class="product-info">
            <span class="product-category">${product.categoryLabel}</span>
            <h3 class="product-title">${product.title}</h3>
            <div class="price-container">
              <span class="product-price">${formatPrice(product.price)}</span>
              ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
            </div>
            <div class="product-actions">
              <button class="favorite-btn ${favorites.includes(product.id) ? 'active' : ''}" data-id="${product.id}" aria-label="إضافة إلى المفضلة">
                ${favorites.includes(product.id) ? '♥' : '♡'}
              </button>
              <a href="${product.link}" target="_blank" rel="noreferrer" class="btn-buy">شراء الآن عبر ${product.source || 'SHEIN'}</a>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.favorite-btn').forEach((button) => {
    button.addEventListener('click', () => {
      toggleFavorite(Number(button.dataset.id), button);
    });
  });

}

function setActiveFilter(button) {
  filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
}

if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    state.query = event.target.value;
    renderProducts();
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.category = button.dataset.category;
    setActiveFilter(button);
    renderProducts();
  });
});

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    setTheme(nextTheme);
  });
}

renderProducts();

setTheme(localStorage.getItem('lumiere-theme') || 'light');

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = newsletterForm.querySelector('button');
    button.textContent = 'تم التسجيل بنجاح';
    button.disabled = true;
    button.style.opacity = '0.8';
    showToast('تم الاشتراك في العروض الحصرية');
  });
}

