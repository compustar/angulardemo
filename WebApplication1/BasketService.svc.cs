using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using ShoppingCart;
using System.ServiceModel.Web;
using WebApplication1.Contracts;

namespace WebApplication1
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "CartService" in code, svc and config file together.
    public class CartService : ICartService
    {
        SampleDataProvider itemSource = new SampleDataProvider();

        [WebInvoke(ResponseFormat = WebMessageFormat.Json, UriTemplate = "checkout")]
        public CartResult Checkout(IEnumerable<string> items)
        {
            var cart = new Cart();
            cart.ItemSource = itemSource;
            cart.OfferSource = itemSource;

            foreach (var item in items)
            {
                cart.AddItem(item);
            }

            var result = new CartResult();
            result.SubTotal = cart.SubTotal;
            result.Total = cart.Total;

            var offers = new List<Offer>();
            foreach (var offer in cart.Offers)
            {
                offers.Add(new Offer { Name = offer.Offer.Caption, Amount = offer.Amount });
            }
            result.Offers = offers;

            return result;
        }

        [WebGet(ResponseFormat = WebMessageFormat.Json, UriTemplate = "items")]
        public IEnumerable<Item> GetItems()
        {
            return itemSource.Items;
        }
    }
}
