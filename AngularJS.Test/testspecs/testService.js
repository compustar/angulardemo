///<reference path="../../AngularJS.Web/scripts/angular.js" />
///<reference path="../angular-mocks.js" />
///<reference path="../../AngularJS.Web/scripts/common/filters.js" />
///<reference path="../../AngularJS.Web/scripts/shoppingCart/directives_v7.js" />
///<reference path="../../AngularJS.Web/scripts/shoppingCart/serviceFactory.poc.js" />
///<reference path="../../AngularJS.Web/scripts/shoppingCart/controller_v4.js" />
///<reference path="../../AngularJS.Web/scripts/shoppingCart/main_v7.js" />

describe('app', function () {
    beforeEach(module('cartApp'));

    var cartService;

    beforeEach(inject(function (_cartService_) {
        cartService = _cartService_;
    }));

    describe('cartService.getItems', function () {

        it('should be the same as ["Soup", "Bread", "Milk", "Apple"]', function () {
            var items = [];
            cartService.getItems(function (data) { items = data });
            expect(items).toEqual([{ "Name": "Soup", "Price": 0.65 }, { "Name": "Bread", "Price": 0.80 }, { "Name": "Milk", "Price": 1.3 }, { "Name": "Apple", "Price": 1.0}]);
        });
    });

});
