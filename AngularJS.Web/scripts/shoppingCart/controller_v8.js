function cartController(scope, cartService, fancybox) {
    scope.selectedItem = "";
    scope.cart = [];
    scope.prices = {};
    scope.items = [];

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
        cartService.checkout(scope.cart,
            function (data) {
                scope.result = data;
                fancybox.open("#receipt");
            });
    }
}