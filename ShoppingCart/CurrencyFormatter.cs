using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingCart {
    public class CurrencyFormatter :ICurrencyFormatter {
        public string Format(decimal data) {

            if (data >= 1) {
                return string.Format("${0:#.00}", data);
            }
            else {
                return string.Format("{0:##}¢", data * 100);
            }
        }
    }
}
