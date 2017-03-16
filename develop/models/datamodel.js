var DataModel = function (getJSON, map, categoriesJson, categories) {   // used dependency injection (var dm = new DataModel($.getJSON, $.map, n.categoriesJson);)
    var getProductsCategory = function () {
        getJSON(categoriesJson, function (json) {
            var firstJSON = json['categories'];
            map(firstJSON, function (elem) {
                // console.log(elem);
                categories.push(Object.values(elem));
            }); // not pure function (two objects in collection - function: 2 times)
            console.log(categories());
        });
    };

    var getProducts = function () {

    };

    return {
        getProductsCategory: getProductsCategory,
        getProducts: getProducts
    }
};