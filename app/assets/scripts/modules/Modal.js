import $ from "jquery";

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.closeModalButton = $(".modal__close");
    this.modal = $(".modal");
    this.openModal();
    this.closeModal();
    this.escKey();
  }

  openModal() {
    this.openModalButton.click(() => {
      this.modal.addClass("modal--is-visible");
      return false;
    });
  }
  closeModal() {
    this.closeModalButton.click(() =>
      this.modal.removeClass("modal--is-visible")
    );
  }
  escKey() {
    $(document).keyup(e => {
      if (e.keyCode == 27) {
        this.modal.removeClass("modal--is-visible");
      }
    });
  }
}

export default Modal;
