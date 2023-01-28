const openModal = document.querySelector(".open-btn");
const closeButton = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const modalTransition = [
    {transform: 'scale(0)'},
    {transform: 'scale(1)'}
];

const modalTiming = {
    duration: 200,
    iterations: 1,
};

openModal.addEventListener('click', () => {
    modal.showModal();
    modal.animate(modalTransition, modalTiming);
});

closeButton.addEventListener('click', () => {
    modal.close()
});