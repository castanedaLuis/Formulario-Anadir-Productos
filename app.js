class product {
    constructor(name,price,year){
        this.name =name;
        this.price =price;
        this.year =year;
    }
}

class UI{
    addProduct(product){
        const productList =document.getElementById('product-list')
        const element = document.createElement('div');
        element.innerHTML=`
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product</strong>: ${product.name} 
                <strong>Price</strong>: ${product.price} 
                <strong>Year</strong>: ${product.year}
                <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        </div>
    `;
        productList.appendChild(element);
        //this.resetForm();//resetear los campos despues de un click
    }
    resetForm(){
        document.getElementById('product-form').reset();
    }
    deleteProduct(element){
        if(element.name === 'delate')
        {
            element.parentElement.parentElement.remove();
        }
    }

    showMessage(message, cssClass){
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-4`; 
        div.appendChild(document.createTextNode(message));
        //mostrando en el DOM
        const container = document.querySelector(".container");
        const app = document.querySelector(".App");

        conteiner.insertBefore(div, app);

         // Remove the Message after 3 seconds
        setTimeout(function () {
        document.querySelector(".alert").remove();
        }, 3000);
    }
}

//EVENTOS DEL DOM  (usuario le da un click a un boton)  EVENTOS
document.getElementById("product-form")
    .addEventListener('submit', function(e){
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;
        console.log(name,price,year)

        const producto = new product(name,price,year);
        const ui = new UI()
        ui.addProduct(producto);
        ui.resetForm();
        ui.showMessage("Product Added Successfully", "success");
        

        //para cancelar el evento de este evento   (muestre los datos en la consola)
        e.preventDefault()
})

document.getElementById('product-list')
    .addEventListener('click',function(e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
})