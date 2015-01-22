///<reference path="../../AngularJS.Web/scripts/angular.js" />
///<reference path="../angular-mocks.js" />
///<reference path="../../AngularJS.Web/scripts/common/filters.js" />
///<reference path="../../AngularJS.Web/scripts/shoppingCart/directives_v7.js" />
///<reference path="../../AngularJS.Web/scripts/shoppingCart/serviceFactory.poc.js" />
///<reference path="../../AngularJS.Web/scripts/shoppingCart/controller_v4.js" />
///<reference path="../../AngularJS.Web/scripts/shoppingCart/main_v7.js" />
/// <reference path="templates.js" />

describe('app', function () {
    beforeEach(module('cartApp', 'templates'));

    var cartService;
    var controller;
    var scope = {};
    var compile;

    beforeEach(inject(function ($controller, _$rootScope_, $compile) {

        scope = _$rootScope_;
        compile = $compile;
        cartService = {
            getItems: function (callback) {
                callback([{ "Name": "Soup", "Price": 0.65 },
                      { "Name": "Bread", "Price": 0.80 },
                      { "Name": "Milk", "Price": 1.3 },
                      { "Name": "Apple", "Price": 1.0}]);
            },
            checkout: function (input, callback) {
                this.input = input;
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


    describe('Adding two apples in the cart, when checkout()', function () {

        it('should be Apple, Apple in the basket', function () {
            // Compile a piece of HTML containing the directive
            var element = compile("<cart items='cart'></cart>")(scope);

            scope.selectedItem = "Apple";
            scope.add();
            scope.add();

            // fire all the watches, so the scope expression, e.g. {{1 + 1}}, will be evaluated
            scope.$digest();

            // Check that the compiled element contains the templated content
            expect(element.html()).toEqual("Apple, Apple");
        });
    });

});
