'use strict';

var DataModel = function (getJSON, map) {   // used dependency injection DataModel($.getJSON, $.map)


    var categories = function (jsonFileUrl, categoriesArray) {
        getJSON(jsonFileUrl, function (json) {
            var firstJSON = json.categories;
            map(firstJSON, function (elem) {
                categoriesArray.push(elem);
                DataModel.isCategoriesReady(true);
            });

            // console.log(ourArray());
        })
            .done(function () {
                console.log("first 'category' success");
            })
            .fail(function (jqxhr, textStatus, error) {
                console.log("Request Failed: " + error);
            });
    };

    var items = function (jsonFileUrl, itemsArray) {
        getJSON(jsonFileUrl, function (json) {
            var firstJSON = json.products;
            map(firstJSON, function (elem) {
                itemsArray.push(elem);
                DataModel.isProductReady(true);
            });
            // console.log(ourArray());
        })
            .done(function () {
                console.log("second 'products' success");
            })
            .fail(function (jqxhr, textStatus, error) {
                console.log("Request Failed: " + error);
            });

    };




    // self.UpdateCountry = function (model, event) {
    //     $.ajax({
    //         url: "api/Country/" + model.id(),
    //         type: "PUT",
    //         dataType: "json",
    //         contentType: "application/json",
    //         data: ko.toJSON(model),
    //         success: function (data) {
    //             model.isEdit(false);
    //         },
    //         error: function (err) {
    //             alert('Error');
    //         }
    //     });
    // };



    return {
        categories: categories,
        items: items,
        // updateCategory: updateCategory
    }
};

DataModel.isCategoriesReady = ko.observable(false);
DataModel.isProductReady = ko.observable(false);
DataModel.isDetReady = ko.observable(false);

