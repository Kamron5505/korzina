let apiUrl = "https://fakestoreapi.com/products?limit=10";
let productsContainer = document.querySelector('#products');
let totalPrice = document.querySelector('#total');
let summ = 0

async function getData() {
    await fetch(apiUrl)
        .then(res => res.json())
        .then(products => {

            console.log(products);

            products.map((item, index) => {
                let div = document.createElement('div');
                div.className = 'card';

                div.innerHTML = `
                <img src="${item.image}" alt="${item.title}" width="100">
                <p class="card-title">${item.title}</p>
                <p class="card-description">${item.description.slice(0, 100)}...</p>
                <p class="card-price">$${item.price}</p>
                <button onclick="selectProduct(${item.price})" class="buy-btn">Sotib olish</button>
            `;
                productsContainer.append(div)
            });
        });
}

getData()

function selectProduct(price) {
    console.log(price);
    let cartItemsDiv = document.querySelector('#cart-items');
    summ += price
    totalPrice.innerHTML = summ
    alert("Mahsulot savatga qoshildi")
}

