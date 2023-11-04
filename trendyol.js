// 04.11.23

var product = {};

product.name = document.querySelector(".pr-new-br").textContent;
product.oldPrice = (document.querySelector(".featured-prices .prc-org") || {}).textContent || document.querySelector(".featured-prices .prc-dsc").textContent || "";
product.Price = document.querySelector(".featured-prices .prc-dsc").textContent;
// product.brand = document.querySelector(".pr-new-br a").textContent;
product.image = document.querySelector(".base-product-image img").getAttribute("src");
product.categories = getCategories();

function getCategories() {
    const categoryTitleList = [] 
    const links = document.querySelectorAll("#breadCrumb ul li");

    links.forEach(link => {
        const title = link.getAttribute("title");
        if (title) {
            categoryTitleList.push(title)
        }
    });

    var categoryList = [...new Set(categoryTitleList)]

    return categoryList;
}
