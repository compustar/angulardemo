///<reference path="../../AngularJS.Web/scripts/angular.js" />
///<reference path="../angular-mocks.js" />
///<reference path="../../AngularJS.Web/scripts/common/filters.js" />
///<reference path="../../AngularJS.Web/scripts/shoppingCart/directives_v7.js" />
///<reference path="../../AngularJS.Web/scripts/shoppingCart/serviceFactory.poc.js" />
///<reference path="../../AngularJS.Web/scripts/shoppingCart/controller_v4.js" />
///<reference path="../../AngularJS.Web/scripts/shoppingCart/main_v7.js" />

describe('app', function () {
    beforeEach(module('filters'));

    var $filter;

    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_;
    }));

    describe('currency', function () {

        it('should covert number < 1 to ##¢ format', function () {
            var currency = $filter("currency");
            expect(currency(0.99)).toEqual("99¢");
        });
    });

});
