function cartServiceFactory(http){
    return {
        getItems: function (callback) {
            http.get('CartService.svc/items').success(callback);
        },
        checkout: function (input, callback) {
            http.post('CartService.svc/checkout', input).success(callback);
        }
    }
}