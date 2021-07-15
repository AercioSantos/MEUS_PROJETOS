class GroceryUpdateList {
    constructor() {
        this.el = document.querySelector(".updateLis");
        this.addEventos();
    }

    addEventos(){
        this.el.querySelector(".save")
        .addEventListener("click", this.onClickSave.bind(this));

        this.el.querySelector(".cancel")
        .addEventListener("click", this.onClickCancel.bind(this));
    }

    show() {
        this.el.classList.remove("hidden");
        document.querySelector(".inputItem").classList.add("hidden");
    }

    hide() {
        this.el.classList.add("hidden");
        document.querySelector(".inputItem").classList.remove("hidden");
    }

    onClickSave() {
        console.log("Item salvado");
        this.hide();
    }

    onClickCancel() {
        this.hide();
    }
}

const gUpdateList = new GroceryUpdateList();