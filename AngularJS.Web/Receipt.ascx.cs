using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AngularJS.Web
{
    public partial class Receipt : System.Web.UI.UserControl
    {
        public string Cart { get; set; }
        public string Prices { get; set; }
        public string Result { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.ClientScript.IsClientScriptIncludeRegistered("receipt-directive-js")) {
                Page.ClientScript.RegisterClientScriptInclude("receipt-directive-js", "scripts/shoppingCart/receiptDirective.js");
            }
            if (!Page.ClientScript.IsClientScriptBlockRegistered("receipt-directive-init"))
            {
                var script = "cartApp.directive('receipt', receiptDirective);";
                Page.ClientScript.RegisterClientScriptBlock(this.GetType(), "receipt-directive-init", script, true);
            }
        }
    }
}