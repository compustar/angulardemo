function cartController(scope, http) {
    scope.selectedItem = "";
    scope.cart = [];
    scope.prices = {};
    scope.items = [];
    scope.checkedOut = false;

    http.get('CartService.svc/items').success(function (data) {
        for (var i = 0; i < data.length; i++) {
            scope.items.push(data[i].Name);
            scope.prices[data[i].Name] = data[i].Price;
        }
        scope.selectedItem = data[0].Name;
    });

    scope.add = function () {
        scope.cart.push(scope.selectedItem);
    }

    scope.remove = function () {
        scope.cart.remove(scope.selectedItem);
    }

    scope.checkout = function () {
        scope.checkedOut = true;
        http.post("CartService.svc/checkout", scope.cart).success(function (data) {
            scope.result = data;
        });
    }
}