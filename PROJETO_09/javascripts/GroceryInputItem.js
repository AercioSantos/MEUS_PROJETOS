class GroceryInputItem {

    constructor() {
        this.el = document.querySelector(".inputItem");
        this.addEvento();
    }

    addEvento() {
        this.el.querySelector("input").addEventListener("focus", this.onFocusInput.bind(this));
        this.el.querySelector(".mais").addEventListener("click", this.onClickMais.bind(this));
        this.el.querySelector(".menos").addEventListener("click", this.onClickMenos.bind(this));
        this.el.querySelector(".save").addEventListener("click", this.onClickSave.bind(this));
    }

    onClickSave(){
        if(this.getData().nome.length == 0){
            alert("Preencha um nome")
        } else {
            console.dir(this.getData());
        }
    }

    onFocusInput(){
        this.mostrarMinimumStock();
    }

    esconderMinimumStock() {
        this.el.querySelector(".minimumStock").classList.add("hidden");
    }

    mostrarMinimumStock() {
        this.el.querySelector(".minimumStock").classList.remove("hidden");
    }

    getData(){
        return {
            nome: this.el.querySelector("input").value,
            minimumStock: parseInt(this.el.querySelector(".qtMin").innerHTML),
            amountStock: 0
        };
    }

    onClickMenos(){
        if(this.getData().minimumStock > 0){
            this.el.querySelector(".qtMin").innerHTML = this.getData().minimumStock - 1;
        }
    }

    onClickMais(){
        this.el.querySelector(".qtMin").innerHTML = this.getData().minimumStock + 1;
    }
}


const g = new GroceryInputItem();