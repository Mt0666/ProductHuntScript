// 04.11.23

var product = {};

product.name = document.querySelector(".pr-new-br").textContent;

product.oldPrice = document.querySelector(".featured-prices .prc-org").textContent;

product.Price = document.querySelector(".featured-prices .prc-dsc").textContent;

product.brand = document.querySelector(".pr-new-br .product-brand-name-without-link").textContent;

product.image = document.querySelector(".base-product-image img").getAttribute("src");

//product.categories =
