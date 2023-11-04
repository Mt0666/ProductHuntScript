// 04.11.23

var product = {};

product.name = document.querySelector(".nameHolder h1").textContent.trim();

product.oldPrice = (document.querySelector(".oldPrice") || {}).textContent || document.querySelector(".newPrice ins").textContent;

product.Price = document.querySelector(".newPrice ins").textContent;

// product.brand = document.querySelector(".pr-new-br a").textContent;

product.image = document.querySelector(".imgObj img").getAttribute("src");

product.categories = getCategories();



function getCategories() {
    const categoryTitleList = [] 
    const links = document.querySelectorAll("#breadCrumb ul li a");

    links.forEach(link => {
        const title = link.getAttribute("title");
        if (title) {
            categoryTitleList.push(title)
        }
    });
    categoryTitleList.splice(0,1)
    var categoryList = categoryTitleList

    return categoryList;
}
