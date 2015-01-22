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
    var controller;
    var scope = {};

    beforeEach(inject(function ($controller, _$rootScope_) {
        scope = _$rootScope_;
        cartService = {
            getItems: function (callback) {
                callback([{ "Name": "Soup", "Price": 0.65 },
                      { "Name": "Bread", "Price": 0.80 },
                      { "Name": "Milk", "Price": 1.3 },
                      { "Name": "Apple", "Price": 1.0}]);
            },
            checkout: function (input, callback) {
                callback({ "Offers": [{ "Amount": 0.20, "Name": "Apples 10% off" },
                                  { "Amount": 0.400, "Name": "Bread for half price for 2 soups"}],
                    "SubTotal": 4.75,
                    "Total": 4.150
                });
            }
        };

        controller = $controller('cartController', {
            $scope: scope,
            cartService: cartService
        });
    }));

    describe('scope.items', function () {

        it('should be the same as ["Soup", "Bread", "Milk", "Apple"]', function () {
            expect(scope.items).toEqual(["Soup", "Bread", "Milk", "Apple"]);
        });
    });

    describe('Adding two apples in the cart, when checkout()', function () {

        it('should has input = ["Apple", "Apple"] while returning 2 offers with total = 4.150', function () {

            spyOn(cartService, "checkout").and.callThrough();

            scope.selectedItem = "Apple";
            scope.add();
            scope.add();

            scope.checkout();

            var input = cartService.checkout.calls.argsFor(0)[0];
            expect(input).toEqual(["Apple", "Apple"]);
            expect(scope.result.Offers.length).toEqual(2);
            expect(scope.result.Total).toEqual(4.150);
        });
    });

});
