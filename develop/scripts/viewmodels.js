var DataModel = function (getJSON, map, categoriesJson, categories) {   // used dependency injection (var dm = new DataModel($.getJSON, $.map, n.categoriesJson);)
    var getProductsCategory = function () {
        getJSON(categoriesJson, function (json) {
            map(json, function (elem) { categories.push(elem); }); // not pure function
        });
    };

    var getProducts = function () {

    };

    return {
        getProductsCategory: getProductsCategory,
        getProducts: getProducts
    }
}

var NavViewModel = function () {
    var self = this;
    self.categories = [];
    self.categoriesList = ko.observableArray(self.categories);
    self.categoriesJson = '../data/generated-data.json'; //'https://project-5613440220430148247.firebaseio.com/api/v1/categories.json';
    var dm = new DataModel($.getJSON, $.map, self.categoriesJson, self.categoriesList);
    dm.getProductsCategory();
};

var ProductsViewModel = function () {

    var ProductViewModel = function () {
        var productType = 'promo'; // z bazy danych
        var productCategory = 'cat1'; //$.map(json); //'cat1'; // z bazy danych
    };

};

var DetailProductViewModel = function () {

};

var MainViewModel = function () {

    var self = this;

    self.nav = new NavViewModel();

};