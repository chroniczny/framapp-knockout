var DataModel = function (getJSON, map, categoriesJson, categories) {   // used dependency injection (var dm = new DataModel($.getJSON, $.map, n.categoriesJson);)
    var getProductsCategory = function () {
        getJSON(categoriesJson, function (json) {
            map(json, function (elem) { categories.push(elem); }); // not pure function
            console.log(categories);
        });
    };

    var getProducts = function () {

    };

    return {
        getProductsCategory: getProductsCategory,
        getProducts: getProducts
    }
}