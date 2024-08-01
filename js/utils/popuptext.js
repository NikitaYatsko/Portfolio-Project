export function popupText() {
    const imagesText = document.querySelectorAll('.hide_text')
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 1000) {
            imagesText.forEach(text => {
                text.classList.add('text_active')
            });
        }
    });
}