var DataModel = function (getJSON, map) {   // used dependency injection DataModel($.getJSON, $.map)

    var getCategories = function (jsonFile, ourArray, filter, filterVal) {
        getJSON(jsonFile, function (json) {
            var firstJSON = json.categories;
            map(firstJSON, function (elem) {
                if (typeof filter !== 'undefined') {
                    if (elem[filter] == filterVal) {
                        ourArray.push(elem);
                    }
                } else {
                    ourArray.push(elem);
                }
            });

            console.log(ourArray());
        });
    };

    var getProducts = function (jsonFile, ourArray, filter, filterVal) {
        getJSON(jsonFile, function (json) {
            var firstJSON = json.products;
            map(firstJSON, function (elem) {
                if (typeof filter !== 'undefined') {
                    if (elem[filter] === filterVal) {
                        ourArray.push(elem);
                    }
                } else {
                    ourArray.push(elem);
                }
            });

            console.log(ourArray());
        });
    };

    return {
        getCategories: getCategories,
        getProducts: getProducts
    }
};