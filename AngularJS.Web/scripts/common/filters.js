angular.module('filters', []).filter('currency', function () {
    return function (input) {
        return input < 1 ? Math.round(input * 100) + "¢" : "$" + Math.round(input * 100) / 100;
    };
});