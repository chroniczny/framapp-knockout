var MainViewModel = function () {

    var self = this;

    self.nav = new NavViewModel();
    self.products = new ProductsViewModel();










    // self.getValue = function(elem) {
    //     console.log(elem);
    // }

    // var getValue = function() {
    //     alert(this.data)
    // }

    // self.showProductDetails = function() {
    //     var bakeryToRemove = ko.dataFor(this);
    //     self.nav.categoriesList.remove(bakeryToRemove);
    // };

    // $(document).on('click', '.bakery-list__item', bakeryRemove);

};