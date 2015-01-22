using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingCart {
    public class OfferResult {
        public OfferResult(IOffer offer) {
            this.Offer = offer;
        }
        public IOffer Offer { get; set; }
        public decimal Amount { get; set; }
        public bool Applied { get; set; }
    }
}
