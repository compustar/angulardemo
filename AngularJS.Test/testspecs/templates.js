/// <reference path="../utils.js" />

(function (module) {
    try {
        module = angular.module('templates');
    } catch (e) {
        module = angular.module('templates', []);
    }
    module.run(function ($templateCache) {
        var templateLoader = new AngularTemplateLoader();
        templateLoader.load("../../AngularJS.Web/scripts/shoppingCart/cart.html", "scripts/shoppingCart/cart.html", $templateCache);

    });
})();
