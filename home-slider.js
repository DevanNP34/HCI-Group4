document.addEventListener("DOMContentLoaded", function() {
    const cartBtn = document.getElementById('cart-btn');
    const searchBtn = document.getElementById('search-btn');
    const profileBtn = document.getElementById('profile-btn');
    const cartDropdown = document.getElementById('cart-dropdown');
    const searchBar = document.getElementById('search-bar');
    const profilePopup = document.getElementById('profile-popup');
    const cancelBtn = document.getElementById('cancel-btn');
    const checkoutBtn = document.getElementById('checkout-btn');
    const emptyCartMessage = document.querySelector('.empty-cart-message');
    const cartItem = document.querySelector('.cart-item');
    
    cartBtn.addEventListener('click', () => {
        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
    });

    searchBtn.addEventListener('click', () => {
        searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
    });

    profileBtn.addEventListener('click', () => {
        profilePopup.style.display = profilePopup.style.display === 'block' ? 'none' : 'block';
    });

    cancelBtn.addEventListener('click', () => {
        cartItem.style.display = 'none';
        emptyCartMessage.style.display = 'block';
    });

    checkoutBtn.addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });

    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = carouselItems.length - 1;
        }
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < carouselItems.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});
