// 04.11.23

var product = {};

product.name = (document.querySelector(".pr-new-br") || {}).textContent || "";
product.oldPrice = (document.querySelector(".product-price-container .prc-org") || {}).textContent || "" || (document.querySelector(".product-price-container .prc-dsc") || {}).textContent || "";
product.price = (document.querySelector(".product-price-container .prc-dsc") || {}).textContent || "";
product.brand = (document.querySelector(".pr-new-br a") || {}).textContent || "";
product.image = document.querySelector(".base-product-image img") && document.querySelector(".base-product-image img").getAttribute("src") || "";
product.categories = getCategories();

function getCategories() {
    const categoryList = [];
    const links = document.querySelectorAll("#marketing-product-detail-breadcrumb a");

    links.forEach(link => {
        const title = link.getAttribute("title");

        if (title) {
            categoryList.push(title)
        }
    });

    return categoryList;
}
