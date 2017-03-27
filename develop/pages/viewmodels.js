'use strict';

var MainViewModel = function () {

    var self = this;

    self.nav = new NavViewModel();
    self.products = new ProductsViewModel(self.nav);

    self.goToHome = function () { // back to home-promoted view (by clicking logo)
        location.hash = 'home-promoted';
    };


    // Sammy(function(){
        // this.get('#:home-promoted', function(){
        //     self.products.categorizedProducts.removeAll(); // clear collection of product by category
        //     self.products.chosenProduct(null); // hide chosen product view
        //     self.products.isPromoVisible(true); // show promoted products from all categories
        // });

        // this.get('#:category', function(){
        //     self.products.categorizedProducts.removeAll(); // clean observable array from other
        //
        //     for (var i = 0; i < self.products.productsList().length; i++) {  // make collection of product from chosen category
        //         if (self.products.productsList()[i].category === this.params.category) {
        //             self.products.categorizedProducts.push(self.products.productsList()[i]);
        //         }
        //     }
        //     self.products.chosenProduct(null); // category is chosen so delete Details from UI
        //     self.products.isPromoVisible(false); // make home-promoted view invisible
        //
        //     return self.products.categorizedProducts;
        // });
        //
        // this.get('#:category/:title', function(){
        //     console.log("detail category: "+this.params.category);
        //     console.log("detail title: "+this.params.title);
        //     self.products.chosenProduct(this.params.title); // shows card with chosen product title
        //     self.products.isPromoVisible(false); // make home-promoted view invisible
        //     self.products.categorizedProducts.removeAll(); // removes categorized ProductCards from UI, Details of product stays in UI
        // });

    //     this.get('', function() {
    //         this.app.runRoute('get', '#home-promoted');
    //         // location.hash = '#home-promoted';
    //         var injectedURL = '#home-promoted';
    //         window.history.pushState({page: 'default'}, injectedURL, injectedURL);
    //     });
    // }).run();
};




