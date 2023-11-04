// 04.11.23

var product = {};

product.name = ((document.querySelector(".nameHolder h1") || {}).textContent || "").trim();
product.price = (document.querySelector(".newPrice ins") || {}).textContent || "";
product.oldPrice = (document.querySelector(".oldPrice") || {}).textContent || (document.querySelector(".newPrice ins") || {}).textContent || "";
// product.brand = document.querySelector(".pr-new-br a").textContent;
product.image = document.querySelector(".imgObj img") && (document.querySelector(".imgObj img") || {}).getAttribute("src") || "";
product.categories = getCategories();

function getCategories() {
    const categoryList = [];
    const links = document.querySelectorAll("#breadCrumb ul li a");

    links.forEach(link => {
        const title = link.getAttribute("title");

        if (title) {
            categoryList.push(title);
        }
    });

    categoryList.splice(0, 1);

    return categoryList;
}
