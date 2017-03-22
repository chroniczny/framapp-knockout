var DataModel = function (getJSON, map) {   // used dependency injection DataModel($.getJSON, $.map)

    var getCategories = function (jsonFile, ourArray) {
        getJSON(jsonFile, function (json) {
            var firstJSON = json.categories;
            map(firstJSON, function (elem) {
                ourArray.push(elem.title);
            });
            // console.log(ourArray());
        });
    };

    var getProducts = function (jsonFile, ourArray) {
        getJSON(jsonFile, function (json) {
            var firstJSON = json.products;
            map(firstJSON, function (elem) {
                ourArray.push(elem);
            });
            // console.log(ourArray());
        });
    };

    var getDetails = function (jsonFile, ourArray) {
        getJSON(jsonFile, function (json) {
            var firstJSON = json.products.title;
            map(firstJSON, function (elem) {
                ourArray.push(elem);
            });
            // console.log(ourArray());
        });
    };


    return {
        getCategories: getCategories,
        getProducts: getProducts,
        getDetails: getDetails
    }
};