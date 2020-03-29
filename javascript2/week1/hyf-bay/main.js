document.addEventListener('DOMContentLoaded', (event)=>{

    
// 1. Add products to DOM
let availableProducts = getAvailableProducts();

function addProducts() {
    availableProducts.forEach(element => {
        console.log(availableProducts);
        let lis = document.createElement("li");
        let divs = document.createElement("div")
        document.querySelector(".products ul").appendChild(lis);
        lis.appendChild(divs);

        let productNames = document.createElement("div");
        productNames.className = "name";
        productNames.innerHTML = element.name;
        lis.appendChild(productNames);

        let productPrice = document.createElement("div");
        productPrice.className = "price";
        productPrice.innerHTML = element.price;
        lis.appendChild(productPrice);

        let productRating = document.createElement("div");
        productRating.className = "rating";
        productRating.innerHTML = element.rating;
        lis.appendChild(productRating);

        let shipsTo = document.createElement("div");
        shipsTo.className = "ships-to";
        shipsTo.innerHTML = element.shipsTo;
        lis.appendChild(shipsTo);

        let buttonAddtoCart = document.createElement("button");
        buttonAddtoCart.setAttribute("data-id", element.id);
        buttonAddtoCart.innerHTML = "Add to cart";
        divs.appendChild(buttonAddtoCart);
    });
}

addProducts();

