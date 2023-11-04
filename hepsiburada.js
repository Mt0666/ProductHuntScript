// 02.11.23   indirimli fiyat olmayanarda çalışmıyor

var product = {};

product.name = document.querySelector(".product-name").textContent.trim();

product.price = (document.querySelector("#originalPrice") || " ").textContent.trim() || " ";

// product.oldPrice = document.querySelector(".price-new").textContent.replace(/\n/g, '').trim().replaceAll(" " , "") || " ";

product.brand = document.querySelector(".brand-name").textContent.trim();

product.image = document.querySelector(".owl-stage img").getAttribute("src");

product.categories = getCategories();


function getCategories() {
    var categoryNames = document.querySelectorAll(".breadcrumbs-wrapper ul li a");
    var categoryList = [];

for (var i = 0; i < categoryNames.length; i++) {
  var link = categoryNames[i];
  var id = link.getAttribute("id");
    var categoryText = link.textContent.trim()

  if (id) {
    var text = 
    categoryList.push(categoryText);
  }
}

console.log(categoryList);

return categoryList;
}