var ProductsViewModel = function (navObj) {
    var self = this;
    self.products = [];
    self.productsList = ko.observableArray(self.products);
    self.productsJson = 'https://frammapp-knockout.firebaseio.com/.json'; //'https://project-5613440220430148247.firebaseio.com/api/v1/categories.json';
    var dm = new DataModel($.getJSON, $.map);
    dm.getProducts(self.productsJson, self.productsList, 'promoted', true);

    //

    // self.showProducts = ko.computed(function() {
    //     if (navObj.ourCategory() === 'Phones') {
    //         return true;
    //         console.log(navObj.ourCategory);
    //     } else {
    //         return false;
    //     }
    // });
};