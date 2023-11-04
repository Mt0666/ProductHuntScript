// 02.11.23   indirimli fiyat olmayanarda çalışmıyor

var product = {};
((document.querySelector("#originalPrice") || {}).textContent || "").trim() || "";
product.name = ((document.querySelector(".product-name") || {}).textContent || "").trim();
product.price = ((document.querySelector(".price-new") || {}).textContent || "").replace(/\n/g, '').trim().replaceAll(" " , "") || ((document.querySelector("#originalPrice") || {}).textContent || "").trim() || "";
product.oldPrice = ((document.querySelector("#originalPrice") || {}).textContent || "").trim() || "";
product.brand = ((document.querySelector(".brand-name") || {}).textContent || "").trim();
product.image = (document.querySelector(".owl-stage img") || {}).getAttribute("src") || "";
product.categories = getCategories();


function getCategories() {
  var categoryNames = document.querySelectorAll(".breadcrumbs-wrapper ul li a");
  var categoryList = [];

  for (var i = 0; i < categoryNames.length; i++) {
    var link = categoryNames[i] || {};
    var id = link.getAttribute("id") || "";
    var categoryText = (link.textContent || "").trim()

    if (id) {
      categoryList.push(categoryText);
    }
  }

  return categoryList;
}