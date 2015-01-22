function cartServiceFactory(http){
    return {
        getItems: function (callback) {
            callback([{ "Name": "Soup", "Price": 0.65 },
                      { "Name": "Bread", "Price": 0.80 },
                      { "Name": "Milk", "Price": 1.3 },
                      { "Name": "Apple", "Price": 1.0}]);
        },
        checkout: function (input, callback) {
            this.input = input;
            callback({ "Offers": [{ "Amount": 0.20, "Name": "Apples 10% off" },
                                  { "Amount": 0.400, "Name": "Bread for half price for 2 soups"}],
                "SubTotal": 4.75,
                "Total": 4.150
            });
        }
    }
}