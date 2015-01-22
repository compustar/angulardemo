function cartDirective() {
    return {
        restrict: 'E',        
        scope: {
            items: '='
        },
        templateUrl: 'scripts/shoppingCart/cart.html',
    };
}

function receiptDirective() {
    return {
        restrict: 'E',        
        scope: {
            prices: '=',
            cart: '=',
            result: '=',
        },
        templateUrl: 'scripts/shoppingCart/receipt_v7.html',
    };
}