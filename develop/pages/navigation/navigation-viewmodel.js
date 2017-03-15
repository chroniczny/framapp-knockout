var NavViewModel = function () {
    var self = this;

    self.categories = [];
    self.categoriesList = ko.observableArray(self.categories);

    self.getProductsCategory = function () {
        $.getJSON('https://project-5613440220430148247.firebaseio.com/api/v1/categories.json', function (json) {
            $.map(json, function (elem) { self.categoriesList.push(elem); });
        });
    };

    self.getProductsCategory();
};