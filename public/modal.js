modal = {
    openModalBtn : "",
    modalOverlay:"",
    modal:"",
    init() {
        modal.populateVariable()
        //modal.openModal()
        //modal.closeModal()

    },
    async  getAsyncDomElement(selector) {
        return new Promise(resolve => {
          const interval = setInterval(() => {
            const element = document.querySelectorAll(selector);
            if (element) {
              clearInterval(interval);
              resolve(element);
            }
          }, 50);
        });
      },
    async populateVariable () {
        modal.modalOverlay = document.getElementById("modal-overlay");
            modal.openModalBtn = await modal.getAsyncDomElement("[img-gr-btn]");
                modal.modal = document.querySelectorAll(`[img-gr]`)

        for(let i=0;i<8;i++) {
            modal.openModal(i)
            modal.closeModal(i)

        }
            
    
            
    },
    openModal(i) {
         modal.openModalBtn[i].addEventListener("click", function () {
          modal.modalOverlay.style.display = "block";
          modal.modal[i].style.display = "block";
        });
    },
    closeModal(i) {
        modal.modalOverlay.addEventListener("click", function () {
            modal.modalOverlay.style.display = "none";
            modal.modal[i].style.display = "none";
          });
    }
}
const img2 = document.createElementNS("http://www.w3.org/2000/svg", "image");

modal.init()









