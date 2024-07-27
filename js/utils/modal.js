export function modalDialog(){
    const modalTrigger = document.querySelectorAll('.modal_trigger');
    const modalOverlay = document.querySelector('.modal_overlay')
    modalTrigger.forEach(item =>{
        item.addEventListener('click', openModal)
    })

    document.addEventListener('click', closeModal)


    const modalTimer = setTimeout(function () {
        openModal();
    }, 60000);

    function openModal() {
        modalOverlay.classList.remove('hide');
        document.body.style.overflowY = 'hidden';
        modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.80)';
        clearInterval(modalTimer);
    }

    function closeModal(event) {
        if (event.target.classList.contains('modal_overlay')) {
            modalOverlay.classList.add('hide');
            document.body.style.overflowY = 'scroll';
        }
    }
}
