var NavViewModel = function () {
    var self = this;
    self.categories = [];
    self.categoriesList = ko.observableArray(self.categories);
    self.categoriesJson = 'https://frammapp-knockout.firebaseio.com/.json'; //'https://project-5613440220430148247.firebaseio.com/api/v1/categories.json';
    var dm = new DataModel($.getJSON, $.map);


    self.ourCategory = ko.observable();
<<<<<<< Updated upstream
    self.getCategory = function(elem) {
        self.ourCategory(elem.toLowerCase());
    };

    dm.getCategories(self.categoriesJson, self.categoriesList);
=======
    self.getCategory = function (elem) {
        //alert('category '+elem.toLowerCase() + ' is clicked');
        self.ourCategory(elem.toLowerCase());
    };

};

NavViewModel.prototype.clearFilter = function () {
    var filter = ProductsViewModel.prototype.filter('s');

    var p = new ProductsViewModel(filter);
>>>>>>> Stashed changes

    console.log('aaa');
};