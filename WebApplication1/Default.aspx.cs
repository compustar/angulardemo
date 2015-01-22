using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ShoppingCart;
using System.Text;
using System.IO;

namespace WebApplication1 {
    public partial class Default : System.Web.UI.Page {
        protected void Page_Load(object sender, EventArgs e) {
            if (!IsPostBack) {
                var cart = new Cart();
                cart.ItemSource = new SampleDataProvider();
                cart.OfferSource = new SampleDataProvider();
                Session["cart"] = cart;

                var itemSource = cart.ItemSource;

                foreach (var item in itemSource.Items) {
                    ddlItem.Items.Add(new ListItem(item.Name));
                }
            }
        }

        protected void btnAdd_Click(object sender, EventArgs e) {
            var cart = (Cart)Session["cart"];
            cart.AddItem(ddlItem.SelectedValue);

            lblCart.Text = string.Join(", ", cart.Items.Select(o => o.Name));
        }

        protected void btnRemove_Click(object sender, EventArgs e) {
            var cart = (Cart)Session["cart"];
            cart.RemoveItem(ddlItem.SelectedValue);

            lblCart.Text = string.Join(", ", cart.Items.Select(o => o.Name));
        }

        protected void btnCheckout_Click(object sender, EventArgs e) {
            tblSubmission.Visible = true;
            tblSubmissionForm.Visible = false;

            ICurrencyFormatter formatter = new CurrencyFormatter();
            var cart = (Cart)Session["cart"];
            if (cart.IsEmpty) {
                lblReceipt.Text = "No items in the cart";
            }
            else {
                StringBuilder buffer = new StringBuilder();
                using (StringWriter writer = new StringWriter(buffer)) {
                    foreach (var item in cart.Items) {
                        writer.WriteLine(string.Format("{0} {1}", item.Name, formatter.Format(item.Price)));
                        writer.WriteLine("<br>");
                    }

                    writer.WriteLine(string.Format("Subtotal: {0}", formatter.Format(cart.SubTotal)));
                    writer.WriteLine("<br>");
                    var offers = cart.Offers;
                    if (offers.Any()) {
                        foreach (var offer in offers) {
                            writer.WriteLine(string.Format("{0}: -{1}", offer.Offer.Caption, formatter.Format(offer.Amount)));
                            writer.WriteLine("<br>");
                        }
                    }
                    else {
                        writer.WriteLine("(No offers available)");
                        writer.WriteLine("<br>");
                    }

                    writer.WriteLine(string.Format("Total: {0}", formatter.Format(cart.Total)));
                    writer.Flush();
                }
                lblReceipt.Text = buffer.ToString();
            }

        }

    }
}