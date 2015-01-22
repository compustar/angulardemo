using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingCart {

    // A single place to deal with the data sources. Should be implemented with two classes in production
    public class SampleDataProvider : IItemSourceProvider, IOfferSourceProvider {

        private Dictionary<string, Item> items = new Dictionary<string, Item>();
        private List<IOffer> offers = new List<IOffer>();

        public SampleDataProvider() {
            items.Add("Apple", new Item { Name = "Apple", Price = 1.0m });
            items.Add("Bread", new Item { Name = "Bread", Price = 0.80m });
            items.Add("Milk", new Item { Name = "Milk", Price = 1.3m });
            items.Add("Soup", new Item { Name = "Soup", Price = 0.65m });

            // Can be done by MEF in another implementation
            offers.Add(new AppleOffer());
            offers.Add(new SoupBreadOffer());
        }

        public Item this[string itemName] {
            get {
                return items[itemName];
            }
        }

        public bool Contains(string itemName) {
            return items.ContainsKey(itemName);
        }


        public IEnumerable<IOffer> GetOffers() {
            return offers;
        }


        public IEnumerable<Item> Items
        {
            get { return items.Values; }
        }
    }
}
