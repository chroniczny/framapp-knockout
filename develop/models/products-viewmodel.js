'use strict';

var ProductsViewModel = function () {
    var self = this;
    self.productsList = ko.observableArray();
    self.productsJson = 'https://frammapp-knockout.firebaseio.com/.json'; //'https://project-5613440220430148247.firebaseio.com/api/v1/categories.json';
    var dm = new DataModel($.getJSON, $.map);
    dm.items(self.productsJson, self.productsList);

    self.isPromoVisible = ko.observable(true); // to show or hide promoted-home view

    /* -- SHOW COLLECTION OF PRODUCTS BY CATEGORY -- */
    self.categorizedProducts = ko.observableArray();
    self.chosenCategory = ko.observable(); // this variable will be able to get message from other through 'shouter' post-box
    shouter.subscribe(function (newValue) { // with global defined 'shouter' we can receive message from other view model
        self.chosenCategory(newValue); // passing message into value observable here...
    }, self, "clickedCategory"); // using 'topic' named when defining message to passing - in other viewModel -> nav

    self.productByCategory = function () { //
        location.hash = self.chosenCategory(); // PASTE
    };

    /* -- SHOW DETAILS OF CHOSEN PRODUCT -- */
    self.chosenProduct = ko.observable();
    self.getProduct = function () {
        location.hash = this.category + '/' + this.title; //
        // console.log('product is: ' + this.title);
    };

    self.adminForm = ko.observable(false);
    self.adminTable = ko.observable(true);

    /* ADMIN BEHAVIOUR */
    self.setCategoryGrid = function () {
        location.hash = 'admin-categories/' + self.chosenCategory();
    };

    self.hideProductsGrid = function () {
        location.hash = 'admin-products/' + self.chosenProduct();
    };

    self.toCategoryGrid = function () {
        location.hash = 'admin-categories';
    };

    self.toProductGrid = function () {
        location.hash = 'admin-products';
    };

    Sammy(function () {

        this.get('#admin-categories', function () {
            console.log('whats in url?');
            self.adminForm(false);
            self.adminTable(true);
        });

        this.get('#admin-products', function () {
            self.adminForm(false);
            self.adminTable(true);
        });

        this.get('#admin-categories/:title', function () {
            console.log(this.params.title);
            self.chosenCategory(this.params.title);
            self.adminForm(true);
            self.adminTable(false);
        });

        this.get('#admin-products/:title', function () {
            console.log(this.params.title);
            self.chosenProduct(this.params.title);
            self.adminForm(true);
            self.adminTable(false);
        });

        this.get('#home-promoted', function () {
            self.categorizedProducts.removeAll(); // clear collection of product by category
            self.chosenProduct(null); // hide chosen product view
            self.isPromoVisible(true); // show promoted admin-product from all admin-category
        });

        this.get('#:category', function () {
            self.categorizedProducts.removeAll(); // clean observable array from other

            for (var i = 0; i < self.productsList().length; i++) {  // make collection of product from chosen category
                if (self.productsList()[i].category === this.params.category) { // params.category!!!
                    self.categorizedProducts.push(self.productsList()[i]);
                }
            }
            self.chosenProduct(null); // category is chosen so delete Details from UI
            self.isPromoVisible(false); // make home-promoted view invisible

            return self.categorizedProducts;
        });

        this.get('#:category/:title', function () {
            self.chosenProduct(this.params.title); // shows card with chosen product title
            self.isPromoVisible(false); // make home-promoted view invisible
            self.categorizedProducts.removeAll(); // removes categorized ProductCards from UI, Details of product stays in UI
        });



        this.get('', function () {

            this.app.runRoute('get', '#home-promoted');
            var injectedURL = '#home-promoted';
            window.history.pushState({page: 'default'}, injectedURL, injectedURL);
        });
    }).run();
};
