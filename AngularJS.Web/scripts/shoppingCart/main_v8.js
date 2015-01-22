Array.prototype.remove = function (v) { this.splice(this.indexOf(v) == -1 ? this.length : this.indexOf(v), 1); }

var cartApp = angular.module('cartApp', ["filters"]);

cartApp.factory("cartService", ["$http", cartServiceFactory]);
cartApp.factory("fancyBox", ["$http", "$compile", fancyboxFactory]);
cartApp.controller('cartController', ["$scope", "cartService", "fancyBox", cartController]);
cartApp.directive("cart", cartDirective);
cartApp.directive("receipt", receiptDirective);
