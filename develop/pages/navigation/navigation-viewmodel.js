var NavViewModel = function () {
    var self = this;
    self.categories = [];
    self.categoriesList = ko.observableArray(self.categories);
    self.categoriesJson = 'https://frammapp-knockout.firebaseio.com/generated-data.json'; //'https://project-5613440220430148247.firebaseio.com/api/v1/categories.json';
    //https://frammapp-knockout.firebaseio.com/generated-data.json
    var dm = new DataModel($.getJSON, $.map, self.categoriesJson, self.categoriesList);
    dm.getProductsCategory();
    console.log(self.categories);
};