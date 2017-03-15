var MainViewModel = function () {

    requirejs(["../pages/navigation/navigation-viewmodel"], function (myapp) {

    });


    var ProductsViewModel = function () {

        var ProductViewModel = function () {
            var productType = 'promo'; // z bazy danych
            var productCategory = 'cat1'; //$.map(json); //'cat1'; // z bazy danych
        };

    };

    var DetailProductViewModel = function () {

    };
};

ko.applyBindings(new MainViewModel());