const products = [
  {
    id: 1,
    title: 'شنطة يد جلدية فاخرة بتصميم أنيق',
    category: 'bags',
    categoryLabel: 'حقائب وشنط',
    price: 24.99,
    oldPrice: 39.99,
    badge: 'الأكثر مبيعاً',
    badgeClass: '',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'طقم عقد وسوار مطلي بالذهب عيار 18',
    category: 'jewelry',
    categoryLabel: 'إكسسوارات ومجوهرات',
    price: 12.5,
    oldPrice: 19.99,
    badge: 'جديد',
    badgeClass: 'new',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'شنطة كروس مودرن متعددة الألوان',
    category: 'bags',
    categoryLabel: 'حقائب وشنط',
    price: 18.2,
    oldPrice: 25,
    badge: 'عرض خاص',
    badgeClass: '',
    image:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'ساعة أنيقة بتصميم كلاسيكي ذهبي',
    category: 'watches',
    categoryLabel: 'ساعات أنيقة',
    price: 36.75,
    oldPrice: 49.9,
    badge: 'حصري',
    badgeClass: '',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'إكسسوار يدوي أنيق للملابس الرسمية',
    category: 'jewelry',
    categoryLabel: 'إكسسوارات ومجوهرات',
    price: 9.9,
    oldPrice: 15.5,
    badge: 'جديد',
    badgeClass: 'new',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'حقيبة نسائية صغيرة بجودة عالية',
    category: 'bags',
    categoryLabel: 'حقائب وشنط',
    price: 21.4,
    oldPrice: 31,
    badge: 'الأكثر طلباً',
    badgeClass: '',
    image:
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80'
  }
];

const state = {
  category: 'all',
  query: ''
};

const storageKey = 'lumiere-favorites';
const cartStorageKey = 'lumiere-cart';
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const resultCount = document.getElementById('resultCount');
const cartCountEl = document.getElementById('cartCount');
const toastEl = document.getElementById('toast');
const cartToggle = document.getElementById('cartToggle');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
let cartCount = 0;
let favorites = [];
let cart = [];

try {
  favorites = JSON.parse(localStorage.getItem(storageKey) || '[]');
  cart = JSON.parse(localStorage.getItem(cartStorageKey) || '[]');
} catch (error) {
  favorites = [];
  cart = [];
}

function formatPrice(value) {
  return `$${value.toFixed(2)}`;
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

function updateCartCount() {
  const total = cart.length;
  cartCount = total;

  if (cartCountEl) {
    cartCountEl.textContent = String(total);
  }
}

function updateCartDrawer() {
  if (!cartItems || !cartTotal) return;

  if (!cart.length) {
    cartItems.innerHTML = '<div class="empty-cart">سلة التسوق فارغة حاليًا.</div>';
    cartTotal.textContent = '$0.00';
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" />
          <div class="cart-item-info">
            <h4>${item.title}</h4>
            <span>${item.categoryLabel}</span>
            <div class="cart-item-price">
              <strong>${formatPrice(item.price)}</strong>
              <button type="button" class="remove-cart-item" data-id="${item.id}">حذف</button>
            </div>
          </div>
        </div>
      `
    )
    .join('');

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
  cartTotal.textContent = formatPrice(total);

  document.querySelectorAll('.remove-cart-item').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = Number(button.dataset.id);
      cart = cart.filter((item) => item.id !== productId);
      localStorage.setItem(cartStorageKey, JSON.stringify(cart));
      updateCartCount();
      updateCartDrawer();
      showToast('تم حذف المنتج من السلة');
    });
  });
}

function toggleCart(open) {
  if (!cartDrawer || !cartOverlay) return;

  cartDrawer.classList.toggle('open', open);
  cartOverlay.classList.toggle('visible', open);
  cartDrawer.setAttribute('aria-hidden', String(!open));
  cartOverlay.setAttribute('aria-hidden', String(!open));
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
              <span class="old-price">${formatPrice(product.oldPrice)}</span>
            </div>
            <div class="product-actions">
              <button class="favorite-btn ${favorites.includes(product.id) ? 'active' : ''}" data-id="${product.id}" aria-label="إضافة إلى المفضلة">
                ${favorites.includes(product.id) ? '♥' : '♡'}
              </button>
              <a href="https://www.aliexpress.com" target="_blank" rel="noreferrer" class="btn-buy">شراء الآن عبر AliExpress</a>
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

  document.querySelectorAll('.btn-buy').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      const card = button.closest('.product-card');
      const product = products.find((item) => item.title === card.querySelector('.product-title').textContent.trim());

      if (!product) return;

      const existingProduct = cart.find((item) => item.id === product.id);
      if (!existingProduct) {
        cart.push({
          id: product.id,
          title: product.title,
          categoryLabel: product.categoryLabel,
          price: product.price,
          image: product.image
        });
      }

      localStorage.setItem(cartStorageKey, JSON.stringify(cart));
      updateCartCount();
      updateCartDrawer();
      toggleCart(true);
      showToast('تمت إضافة المنتج إلى السلة');
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

if (cartToggle) {
  cartToggle.addEventListener('click', () => {
    const isOpen = cartDrawer.classList.contains('open');
    toggleCart(!isOpen);
  });
}

if (closeCart) {
  closeCart.addEventListener('click', () => toggleCart(false));
}

if (cartOverlay) {
  cartOverlay.addEventListener('click', () => toggleCart(false));
}

updateCartCount();
updateCartDrawer();
renderProducts();

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

