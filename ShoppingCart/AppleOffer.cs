using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingCart {
    public class AppleOffer : IOffer {
        public string Caption {
            get {
                return "Apples 10% off";
            }
        }

        public OfferResult Execute(IEnumerable<Item> cart) {
            var result = new OfferResult(this);
            var numOfApple = cart.Count(item => item.Name == "Apple");
            result.Applied = numOfApple > 0;
            if (result.Applied){
                var apple = cart.First(item => item.Name == "Apple");
                result.Amount = numOfApple * apple.Price * 0.1m;
            }
            return result;
        }
    }
}
