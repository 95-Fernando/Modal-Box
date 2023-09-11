// select modal-btn,modal-overlay,close-btn - DONE
// listen for click events on modal-btn and close-btn - DONE
// when user clicks modal-btn add .open-modal to modal-overlay - DONE
// when user clicks close-btn remove .open-modal from modal-overlay -DONE

// Conceptos clave cubiertos:
// document.querySelector() - DONE 
// addEventListener()- DONE
// classList.add() - DONE
// classList.remove() - DONE

const modalButton = document.querySelector(".btn__open")
const modalContainer = document.querySelector(".modal__container")
const closeModal = document.querySelector(".modal__button")

modalButton.addEventListener("click", () => {
    modalContainer.classList.add("open__modal")
})

closeModal. addEventListener("click", () =>{
    modalContainer.classList.remove("open__modal")
})