const openModal = document.querySelector(".open-btn");
const closeModal = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
})