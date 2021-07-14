class GroceryItem {
    constructor(item) {
        this.name = item.name;
        this.minimumStock = item.minimumStock;
        this.amountStock = item.amountStock;
    }

    precisaComprar(){
        return this.amountStock < this.minimumStock;
    }

    comprando() {
        return this.amountStock < this.minimumStock;
    }


    render(el){;
        this.item = el;
        const cssClass = this.comprando() ? "comprando" : "";

        el.innerHTML = document.querySelector("#templateId").innerHTML
        .replace(/{{cssClass}}/g, cssClass)
        .replace(/{{name}}/g, this.name)
        .replace(/{{minimumStock}}/g, this.minimumStock)
        .replace(/{{amountStock}}/g, this.amountStock);

        this.addEventos();
    }

    addEventos(){
        this.item.querySelector(".descricao")
        .addEventListener("click", this.onClickDescricao.bind(this));

        this.item.querySelector(".delete")
        .addEventListener("click", this.onClickDelete.bind(this))

        this.item.querySelector(".menor")
        .addEventListener("click", this.onClickMenor.bind(this))

        this.item.querySelector(".maior")
        .addEventListener("click", this.onClickMaior.bind(this))
    }

    onClickDelete(){
        this.item.remove();
    }

    onClickMenor(){
        const amount = this.item.querySelector(".amountStock");
        if(parseInt(amount.innerHTML) > 0) {
            amount.innerHTML = parseInt(amount.innerHTML) - 1;
        }
    }

    onClickMaior(){
        const amount = this.item.querySelector(".amountStock");
        amount.innerHTML = parseInt(amount.innerHTML) + 1;
    }

    onClickDescricao(event){
        const action = event.currentTarget.nextElementSibling;
        action.classList.toggle("hidden");
    }
}

const item1 = {
    name: "Tomates",
    minimumStock: 6,
    amountStock: 10
}

const item2 = {
    name: "Ovos",
    minimumStock: 6,
    amountStock: 8
}

const groceryItem1 = new GroceryItem(item1);
const elemento1 = document.querySelector("#GroceryList .li1");
groceryItem1.render(elemento1);

const groceryItem2 = new GroceryItem(item2);
const elemento2 = document.querySelector("#GroceryList .li2");
groceryItem2.render(elemento2);