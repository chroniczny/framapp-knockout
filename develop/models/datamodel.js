var DataModel = function (getJSON, map, categoriesJson, categories) {   // used dependency injection (var dm = new DataModel($.getJSON, $.map, n.categoriesJson);)
    var getProductsCategory = function () {
        getJSON(categoriesJson, function (json) {
            var firstJSON = json.categories; // in json.categories we have collection
            $.map(firstJSON, function (elem) { // elem is a single category
                categories.push(elem.title); // we need a value of it's only param (title)
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