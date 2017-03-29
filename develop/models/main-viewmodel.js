'use strict';

var MainViewModel = function () {

    var self = this;

    self.nav = new NavViewModel();
    self.products = new ProductsViewModel(self.nav);

    self.goToHome = function () { // back to home-promoted view (by clicking logo)
        location.hash = 'home-promoted';
    };
};
