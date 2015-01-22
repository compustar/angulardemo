using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingCart {
    public class Cart {
        public IItemSourceProvider ItemSource { get; set; }
        public IOfferSourceProvider OfferSource { get; set; }

        private List<Item> items = new List<Item>();

        public void AddItem(string item) {
            if (ItemSource.Contains(item)) {
                items.Add(ItemSource[item]);
            }
        }

        public bool IsEmpty {
            get {
                return !items.Any();
            }
        }

        public decimal SubTotal {
            get {
                return items.Sum(item => item.Price);
            }
        }

        public IEnumerable<Item> Items
        {
            get
            {
                return new List<Item>(items);
            }
        }

        public IEnumerable<OfferResult> Offers {
            get {
                var result = new List<OfferResult>();
                foreach (var offer in OfferSource.GetOffers()) {
                    var offerResult = offer.Execute(items);
                    if (offerResult.Applied) {
                        result.Add(offerResult);
                    }
                }
                return result;
            }

        }

        public decimal Total {
            get {
                return this.SubTotal - this.Offers.Sum(o => o.Amount);
            }
        }

        public void RemoveItem(string item)
        {
            if (ItemSource.Contains(item))
            {
                items.Remove(ItemSource[item]);
            }
        }
    }
}
