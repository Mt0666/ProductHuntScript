// 08.11.2023

var product = {};

product.name = ((document.querySelector("#productName") || {}).textContent || "").trim();
product.price = (document.querySelector(".priceLine .product-price") || {}).textContent || "";
product.oldPrice = (document.querySelector(".priceLine .product-price-not-discounted") || {}).textContent || (document.querySelector(".priceLine .product-price") || {}).textContent || "";
// product.brand = document.querySelector(".pr-new-br a").textContent;
product.image = document.querySelector(".imgInner img") && (document.querySelector(".imgInner img") || {}).getAttribute("src") || "";
product.categories = getCategories();



function getCategories() {
    const categoryList = [];
    const links = document.querySelectorAll("#navigasyon #nav-wrapper ul li span");

    links.forEach(link => {
        const title = link.textContent;

        if (title) {
            if (title.trim() !== ">")
                categoryList.push(title);
        }
    });

    categoryList.splice(0, 1);
    return categoryList;
}
