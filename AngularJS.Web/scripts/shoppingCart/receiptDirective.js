function receiptDirective() {
    return {
        restrict: 'E',        
        scope: {
            prices: '=',
            cart: '=',
            result: '=',
        },
        templateUrl: 'scripts/shoppingCart/receipt.html',
    };
}

