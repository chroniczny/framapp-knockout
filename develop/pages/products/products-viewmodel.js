var ProductsViewModel = function () {
    var self = this;
    self.products = [];
    self.productsList = ko.observableArray(self.products);
    self.productsJson = 'https://frammapp-knockout.firebaseio.com/.json'; //'https://project-5613440220430148247.firebaseio.com/api/v1/categories.json';
    var dm = new DataModel($.getJSON, $.map);
    dm.getProducts(self.productsJson, self.productsList);


    self.categorizedProducts = ko.observableArray();
    self.productByCategory = function () {
        var chosenCategory = categories.ourCategory();
        // var chosenCategory = 'phones';

        for (var i=0; i< self.productsList().length; i++) {

                if (self.productsList()[i].category === chosenCategory) {
                    self.categorizedProducts.push(self.productsList()[i]);
                }
            }
        console.log('chosen category is '+chosenCategory);
        return self.categorizedProducts;
    };

    self.chosenProduct = ko.observable();
    self.getProduct = function () {
        self.chosenProduct(this.title);
    };


};
