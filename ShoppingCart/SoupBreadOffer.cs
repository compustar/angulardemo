using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingCart {
    public class SoupBreadOffer : IOffer {
        public string Caption {
            get { return "Bread for half price for 2 soups"; }
        }

        public OfferResult Execute(IEnumerable<Item> cart) {
            var numOfSoup = 0;
            var numOfBread = 0;
            Item bread = null;
            Item soup = null;
            foreach (var item in cart) {
                if (item.Name == "Soup") {
                    numOfSoup++;
                    soup = item;
                }
                if (item.Name == "Bread") {
                    numOfBread++;
                    bread = item;
                }
            }

            OfferResult result = new OfferResult(this);
            result.Applied = numOfSoup >= 2 && numOfBread >= 1;
            if (result.Applied) {
                result.Amount = Math.Min(numOfSoup / 2, numOfBread) * bread.Price * 0.5m;
            }

            return result;
        }
    }
}
