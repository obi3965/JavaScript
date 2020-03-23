document.addEventListener('DOMContentLoaded', (event)=>{

    // *****************************************************
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

// 2. Price analytics
const productsPricesArr = availableProducts.map(product => product.price);
console.log(productsPricesArr); //array of prices

function messageFromServer(message) {
    console.log(message);
}

sendPricesToServer(productsPricesArr, messageFromServer); //console log server responce 

// 3.Filter using countries
let country = document.querySelector(".country select");
let getCountryValue = function () {
    return country.value;
}

const productSection = document.querySelector(".products");
const lis = productSection.getElementsByTagName("li");
const lisArr = Array.from(lis);

country.addEventListener("change", () => {
    const choosenCountry = getCountryValue();
    lisArr.forEach((li) => {
        let cntry = li.lastElementChild.textContent; //!!!
        if (cntry.includes(choosenCountry)) {
            li.style.display = "";
        } else {
            li.style.display = "none";
        }
    });
});

//4. Filter using search
const searchField = document.querySelector(".search input");
let searchFieldValue = function () {
    let searchValue = searchField.value.toLowerCase();
    return searchValue;
}

searchField.addEventListener("keyup", () => {
        let searchFilter = searchFieldValue();
        lisArr.forEach((li) => {
            let nowProduct = li.children[1].textContent.toLowerCase();
                if (nowProduct.indexOf(searchFilter) != -1) {
                    li.style.display = "";
                } else {
                    li.style.display = "none";
                }
            });
    });
})