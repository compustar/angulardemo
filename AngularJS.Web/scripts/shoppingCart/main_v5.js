Array.prototype.remove = function (v) { this.splice(this.indexOf(v) == -1 ? this.length : this.indexOf(v), 1); }

var cartApp = angular.module('cartApp', ["filters"]);

cartApp.factory("cartService", ["$http", cartServiceFactory]);
cartApp.controller('cartController', ["$scope", "cartService", cartController]);
