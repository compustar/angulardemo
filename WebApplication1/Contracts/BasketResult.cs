using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Contracts
{
    public class CartResult
    {
        public decimal Total { get; set; }
        public decimal SubTotal { get; set; }
        public IEnumerable<Offer> Offers { get; set; }
    }
}