Array.prototype.remove = function (v) { this.splice(this.indexOf(v) == -1 ? this.length : this.indexOf(v), 1); }

var cartApp = angular.module('cartApp', []);

cartApp.controller('cartController', ["$scope", "$http", cartController]);
