var DetailProductViewModel = function () {
    var self = this;
    self.detail = ko.observable();
    self.productsList = ko.observableArray(self.products);
    self.productsJson = 'https://frammapp-knockout.firebaseio.com/.json'; //'https://project-5613440220430148247.firebaseio.com/api/v1/categories.json';
    var dm = new DataModel($.getJSON, $.map);

    dm.getDetails(self.productsJson, self.productsList);
};