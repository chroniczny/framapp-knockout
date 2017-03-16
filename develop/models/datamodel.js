var DataModel = function (getJSON, map, categoriesJson, categories) {   // used dependency injection (var dm = new DataModel($.getJSON, $.map, n.categoriesJson);)
    var getProductsCategory = function () {
        getJSON(categoriesJson, function (json) {
            map(json, function (elem) { categories.push(elem); console.log('aa'); console.log(categories) }); // not pure function
        });
    };

    var getProducts = function () {

    };

    return {
        getProductsCategory: getProductsCategory,
        getProducts: getProducts
    }
}