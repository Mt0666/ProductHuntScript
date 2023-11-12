// 10.11.23

var product = {};

product.name = ((document.querySelector(".ProductName h1") || {}).textContent || "").replace(/\n/g, '')
product.oldPrice = (document.querySelector("#fiyat .spanFiyat") || {}).textContent || "" || (document.querySelector("#indirimliFiyat .spanFiyat") || {}).textContent || "";
product.price = (document.querySelector("#indirimliFiyat .spanFiyat") || {}).textContent || "";
 // product.brand = 
product.image = document.querySelector(".SmallImages img").getAttribute("src") && document.querySelector(".SmallImages img").getAttribute("src") || "";
product.categories = getCategories();

function getCategories(){
    var categoryNames = document.querySelectorAll(".proCategoryTitle .breadcrumbList li a span");
    var categoryList = [];

    for (var i = 0; i < categoryNames.length; i++) {
        var link = categoryNames[i] || {};
        var id = link.textContent || "";
        var categoryText = (link.textContent || "").trim()

        if (id) {
      categoryList.push(categoryText);
        }
    }
    return [...new Set(categoryList.slice(1))]
}