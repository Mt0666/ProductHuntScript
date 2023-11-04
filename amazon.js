// 01.11.23

var product = {}

product.name = document.querySelector("#productTitle").textContent.trim();
product.oldPrice = (document.querySelector(".basisPrice .a-offscreen") || {}).textContent || (document.querySelector(".a-price .a-offscreen") || {}) .textContent || "0"
product.price = (document.querySelector(".a-price .a-offscreen") || {}).textContent || "0";
product.brand = product.brand = (document.querySelector(".a-section #bylineInfo").textContent.split(":")[1] || "").trim();
product.image = document.querySelector("#imgTagWrapperId img") && (document.querySelector("#imgTagWrapperId img") || {}).getAttribute("src") || "";
product.categories = getCategories();

function getCategories() {
    var categories = [];

    const elements = document.querySelectorAll('#wayfinding-breadcrumbs_feature_div ul .a-list-item .a-link-normal');

    elements.forEach((element) => {
    categories.push(element.innerText);
});

    if (categories.length === 0) {
        const spans = document.querySelectorAll("#detailBullets_feature_div ul span");

        for (const span of spans) {
            if (span.textContent.includes("Kategori")) {
                categories.push(((span.textContent || []).split(":")[1] || "").trim().replaceAll(" ", "").replace(/\n/g, ''));

            break; 
            }
    }

    }

    return categories;
}
