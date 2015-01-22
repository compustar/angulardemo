using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingCart {
    public interface IOffer {
        string Caption { get; }
        OfferResult Execute(IEnumerable<Item> cart);
    }
}
