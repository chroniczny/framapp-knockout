var NavViewModel = function () {
    var self = this;
    self.categories = [];
    self.categoriesList = ko.observableArray(self.categories);
    self.categoriesJson = 'https://frammapp-knockout.firebaseio.com/.json'; //'https://project-5613440220430148247.firebaseio.com/api/v1/categories.json';
    var dm = new DataModel($.getJSON, $.map);
    dm.getCategories(self.categoriesJson, self.categoriesList);


    self.ourCategory = ko.observable();
    self.getCategory = function () {
        self.ourCategory(this.toLowerCase());
        console.log(this.toLowerCase());
    };

//     var ViewModelOne = function() {
//         //automatically update the observable's value from ko.postbox messages on "myEditableTopic"
//         this.isEditable = ko.observable().subscribeTo("myEditableTopic");
//     };
//
//     var ViewModelTwo = function() {
//         //automatically publish changes through ko.postbox using "myEditableTopic" as the topic
//         this.editable = ko.observable(false).publishOn("myEditableTopic");
//     };
//
//     var ViewModelThree = function() {
//         //both subscribe to and publish changes on the topic "myEditableTopic"
//         this.canEdit = ko.observable().syncWith("myEditableTopic");
//     };
//
// //a non-KO component can also participate in this communication
//     var SomeOtherComponent = function() {
//         //subscribe directly to the topic
//         ko.postbox.subscribe("myEditableTopic", function(newValue) {
//             //do something with newValue
//         });
//
//         //publish on the topic
//         ko.postbox.publish("myEditableTopic", "some new value");
//     };

};