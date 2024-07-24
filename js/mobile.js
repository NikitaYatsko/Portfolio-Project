document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.header');
    const mobileMenu = document.querySelector('.mobile_menu');
    const mobileButton = document.querySelector('.burger_menu');
    mobileButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileButton.classList.toggle('active')
    });
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;
        if (scrollPosition >= 100) {
            header.style.backgroundColor = 'black';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });
});
