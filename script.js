document.querySelectorAll(".product-list").forEach(function(e) {
    let add = e.querySelector(".add");
    let remove = e.querySelector(".remove");
    let name = e.querySelector("h2").textContent;
    let priceText = e.querySelector(".price").textContent; 
    let pricedolarisgareshe = priceText.replace("$", "");             
    let price = parseFloat(pricedolarisgareshe);              

    add.addEventListener("click", function() {
        addToCart(name, price);
    });
    remove.addEventListener("click", function() {
        removeFromCart(name, price);
    });
});
let total = 0;
let totalEl = document.getElementById("total");
let cartList = document.querySelector(".cart");

function addToCart(name, price) {
    total += price;
    totalEl.textContent = "$ " + total.toFixed(2);

    if (window.innerWidth > 768) {
        let item = document.createElement("div");
        item.classList.add("list");
        item.id = name;
        item.innerHTML = `
            <p>${name}</p>
            <span>$${price}</span>
            <button onclick="removeFromCart('${name}', ${price})">X</button>`;
        let totalDiv = document.querySelector(".total");
        cartList.insertBefore(item, totalDiv);
    }
}

function removeFromCart(name, price) {
    if (total <= 0) {
        total = 0;
        return;
    }
    total -= price;
    totalEl.textContent = "$ " + total.toFixed(2);

    if (window.innerWidth > 768) {
        document.getElementById(name).remove();
    }
}

