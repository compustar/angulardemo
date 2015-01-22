using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using ShoppingCart;
using WebApplication1.Contracts;

namespace WebApplication1
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "ICartService" in both code and config file together.
    [ServiceContract]
    public interface ICartService
    {
        [OperationContract]
        CartResult Checkout(IEnumerable<string> items);

        [OperationContract]
        IEnumerable<Item> GetItems();
    }
}
