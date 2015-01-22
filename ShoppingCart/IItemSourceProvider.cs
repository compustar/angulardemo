using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingCart {
    public interface IItemSourceProvider {
        Item this[string itemName] { get; }
        bool Contains(string itemName);
        IEnumerable<Item> Items { get; }
    }
}
