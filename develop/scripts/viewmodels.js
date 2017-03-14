var MainViewModel = function () {

    var NavViewModel = function () {

    };

    //requirejs(["navViewModel"], function (myapp) {

    //});


    var ProductsViewModel = function () {

        var ProductViewModel = function () {
            var productType = 'promo'; // z bazy danych
            var productCategory = 'cat1'; //$.map(json); //'cat1'; // z bazy danych
        };

    };

    var DetailProductViewModel = function () {

    };

    

    //this.tickets = [{ name: "Economy", price: 199.05 }, { name: "Business", price: 299.00 }, { name: "First Class", price: 399.50 }];
    //this.chosenTicket = ko.observable();
    //this.resetTicket = function () { this.chosenTicket(null) };


    
    this.getProductsCategory = function () {
        $.getJSON('https://project-5613440220430148247.firebaseio.com/api/v1/categories.json', function (json) {
            return $.map(json, function (elem) { return elem; });
        });
    };
    
    //this.categories = [{
    //    description: 'ala ma kota',
    //    title: 'moo'
    //}];

    this.categories = this.getProductsCategory();

};

ko.applyBindings(new MainViewModel());