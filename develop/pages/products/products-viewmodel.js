'use strict';

var ProductsViewModel = function () {
    var self = this;
    self.products = [];
    self.productsList = ko.observableArray(self.products);
    self.productsJson = 'https://frammapp-knockout.firebaseio.com/.json'; //'https://project-5613440220430148247.firebaseio.com/api/v1/categories.json';
    var dm = new DataModel($.getJSON, $.map);
    dm.getProducts(self.productsJson, self.productsList);


    self.categorizedProducts = ko.observableArray();
    self.chosenCategory = ko.observable(); // this variable will be able to get message from other through 'shouter' post-box

    shouter.subscribe(function (newValue) { // with global defined 'shouter' we can receive message from other view model
        self.chosenCategory(newValue); // passing message into value observable here...
    }, self, "clickedCategory"); // using 'topic' named when defining message to passing - in other viewModel -> nav

    self.productByCategory = function () { //
        location.hash = self.chosenCategory(); // PASTE

        // self.categorizedProducts.removeAll(); // clean observable array from other

        // for (var i = 0; i < self.productsList().length; i++) {  // make collection of product from chosen category
        //     if (self.productsList()[i].category === self.chosenCategory()) {
        //         self.categorizedProducts.push(self.productsList()[i]);
        //     }
        // }
        // self.chosenProduct(null); // category is chosen so delete Details from UI
        // self.isPromoVisible(false); // make home-promoted view invisible

        // return self.categorizedProducts;
    };

    self.isPromoVisible = ko.observable(true); // to show or hide promoted-home view

    self.chosenProduct = ko.observable();
    self.getProduct = function () {
        location.hash = this.category +'/'+this.title; //

        // self.chosenProduct(this.title); // shows card with chosen product title
        // self.isPromoVisible(false); // make home-promoted view invisible
        // self.categorizedProducts.removeAll(); // removes categorized ProductCards from UI, Details of product stays in UI
    };


    // Sammy(function(){
        // this.get('#:category', function(){
        //     self.categorizedProducts.removeAll(); // clean observable array from other
        //
        //     for (var i = 0; i < self.productsList().length; i++) {  // make collection of product from chosen category
        //         if (self.productsList()[i].category === this.params.category) {
        //             self.categorizedProducts.push(self.productsList()[i]);
        //         }
        //     }
        //     self.chosenProduct(null); // category is chosen so delete Details from UI
        //     self.isPromoVisible(false); // make home-promoted view invisible
        //
        //     console.log("list all: "+self.productsList().length);
        //     console.log("categorized: "+this.params.category+" "+self.categorizedProducts().length);
        //
        //     return self.categorizedProducts;
        // });
        // this.get('', function() { this.app.runRoute('get', '#home-promoted') });

    // }).run();




};
