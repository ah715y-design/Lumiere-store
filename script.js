// 1. خاصية البحث الفوري
function filterProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const title = card.querySelector('.product-title').innerText.toLowerCase();
        const category = card.querySelector('.product-category').innerText.toLowerCase();

        if (title.includes(searchInput) || category.includes(searchInput)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// 2. خاصية التصفية بالأقسام
function filterCategory(category) {
    const productCards = document.querySelectorAll('.product-card');
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

