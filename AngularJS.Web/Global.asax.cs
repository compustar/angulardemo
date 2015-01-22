using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;
using System.Web.Optimization;

namespace AngularJS.Web
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            BundleTable.Bundles.Add(new ScriptBundle("~/bundles/shoppingCart.js")
                .Include("~/scripts/angular.js")
                .Include("~/scripts/common/filters.js")
                .Include("~/scripts/shoppingCart/directives_v7.js")
                .Include("~/scripts/shoppingCart/serviceFactory.js")
                .Include("~/scripts/shoppingCart/controller_v4.js")
                .Include("~/scripts/shoppingCart/main_v7.js")
            );
            BundleTable.Bundles.Add(new StyleBundle("~/bundles/shoppingCart.css")
                .Include("~/css/bootstrap.css")
                .Include("~/css/style.css")
            );
        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}