var MainViewModel = function () {

    var self = this;

    self.nav = new NavViewModel();
    self.products = new ProductsViewModel(self.nav);

    self.goToHome = function () {
        self.products.categorizedProducts.removeAll();
        self.products.chosenProduct(null);
        self.products.isPromoVisible(true);
    };
};




