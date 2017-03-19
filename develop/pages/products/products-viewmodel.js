var ProductsViewModel = function (navObj) {
    var self = this;
    self.products = [];
    self.productsList = ko.observableArray(self.products);
    self.productsJson = 'https://frammapp-knockout.firebaseio.com/.json'; //'https://project-5613440220430148247.firebaseio.com/api/v1/categories.json';
    var dm = new DataModel($.getJSON, $.map);


    self.filterVal = ko.observable('');

    self.setSelectedCategory = function(data) {
        alert('category'+data.title.toLowerCase() + ' is clicked');
        var lowerNameFilterVal = data.title.toLowerCase();
        self.filterVal = ko.observable(lowerNameFilterVal);
        console.log(self.filterVal()); // gives me 'notebook'
    };
    dm.getProducts(self.productsJson, self.productsList, 'category', self.filterVal());
    //dm.getProducts(self.productsJson, self.productsList, 'category', 'phones');
};