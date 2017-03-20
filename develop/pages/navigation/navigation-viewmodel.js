var NavViewModel = function () {
    var self = this;
    self.categories = [];
    self.categoriesList = ko.observableArray(self.categories);
    self.categoriesJson = 'https://frammapp-knockout.firebaseio.com/.json'; //'https://project-5613440220430148247.firebaseio.com/api/v1/categories.json';
    var dm = new DataModel($.getJSON, $.map);
    dm.getCategories(self.categoriesJson, self.categoriesList);

    self.ourCategory = ko.observable();
    self.getCategory = function(elem) {
        self.ourCategory(elem.toLowerCase());
    };

    console.log('aaa');
};