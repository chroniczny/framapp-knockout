var ProductsViewModel = function () {
    var self = this;
    self.products = [];
    self.productsList = ko.observableArray(self.products);
    self.productsJson = 'https://frammapp-knockout.firebaseio.com/.json'; //'https://project-5613440220430148247.firebaseio.com/api/v1/categories.json';
    var dm = new DataModel($.getJSON, $.map);

    dm.getProducts(self.productsJson, self.productsList);




    self.chosenProduct = ko.observable();
    self.getProduct = function(elem) {
        alert('product '+elem.title + ' is clicked');
        self.chosenProduct(elem.title);
    };









    // self.filter = ko.observable('promoted'); // starting homepage
    //
    // self.promotedFilter = function () { // when returning homepage
    //     alert('filter got promoted');
    //     self.filter = ko.observable('promoted');
    // };
    // self.resetPromoted = function () { // when category is chosen
    //     alert('clicked reset filter');
    //     self.filter = ko.observable();
    // };


    // dm.getProducts(self.productsJson, self.productsList, self.filter(), true);
};