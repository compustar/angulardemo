function cartController(scope, cartService) {
    scope.selectedItem = "";
    scope.cart = [];
    scope.prices = {};
    scope.items = [];
    scope.checkedOut = false;

    cartService.getItems(function (data) {
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
        cartService.checkout(scope.cart, 
            function (data) {
                scope.result = data;
            });
    }
}