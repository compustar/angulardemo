function cartDirective() {
    return {
        restrict: 'E',        
        scope: {
            items: '='
        },
        templateUrl: 'scripts/shoppingCart/cart.html',
    };
}
