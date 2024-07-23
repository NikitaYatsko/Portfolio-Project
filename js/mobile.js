document.addEventListener("DOMContentLoaded", function () {

    const mobileMenu = document.querySelector('.mobile_menu');
    const mobileButton = document.querySelector('.burger_menu');
    mobileButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
});