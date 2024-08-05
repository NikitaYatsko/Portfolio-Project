export function modalDialog() {
    const modalTrigger = document.querySelectorAll('.modal_trigger');
    const modalOverlay = document.querySelector('.modal_overlay');

    modalTrigger.forEach(item => {
        item.addEventListener('click', openModal);
    });

    document.addEventListener('click', closeModal);

    const modalTimer = setTimeout(function () {
        openModal();
    }, 60000);

    function openModal() {
        modalOverlay.classList.remove('hide');
        setTimeout(() => {
            modalOverlay.classList.add('show');
        }, 10);
        document.body.style.overflowY = 'hidden';
        modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.80)';
        clearTimeout(modalTimer);
    }

    function closeModal(event) {
        if (event.target.classList.contains('modal_overlay')) {
            modalOverlay.classList.remove('show');
            document.body.style.overflowY = 'scroll';
            setTimeout(() => {
                modalOverlay.classList.add('hide');
                modalOverlay.style.backgroundColor = 'transparent';
            }, 300);
        }
    }
}