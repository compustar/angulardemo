<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Bundle.aspx.cs" Inherits="AngularJS.Bundle" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Shopping Cart</title>

    <%: System.Web.Optimization.Styles.Render("~/bundles/shoppingCart.css")%>
    <%: System.Web.Optimization.Scripts.Render("~/bundles/shoppingCart.js")%>
</head>
<body ng-app="cartApp" ng-controller="cartController" class="container">
    <form>

        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Shopping Cart</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div><!--/.nav-collapse -->
          </div>
        </nav>

        <div class="container" ng-hide="checkedOut">
            <div class="row">
                <div class="col-md-1">Item</div>
                <div class="col-md-11">
                    <select id="ddlItem" ng-model="selectedItem">
                        <option ng-repeat="item in items">{{ item }}</option>
                    </select>
                    <button type="button" class="btn btn-default btn-sm" id="btnAdd" ng-click="add()">
                        <span class="glyphicon glyphicon-plus" aria-hidden="true" aria-label="Add"></span>    
                     </button>
                    <button type="button" class="btn btn-default btn-sm" id="btnRemove" ng-click="remove()">
                        <span class="glyphicon glyphicon-minus" aria-hidden="true" aria-label="Remove"></span>
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col-md-1">Cart</div>
                <div class="col-md-11">
                    <cart items="cart" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <button type="button" class="btn btn-primary btn-sm" id="btnCheckout" ng-click="checkout()">
                        <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                        Checkout
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="panel panel-default" ng-show="checkedOut" >
                <div class="panel-heading">
                    Receipt
                </div>
                <div>
                    <receipt cart="cart" prices="prices" result="result" />
                </div>
            </div>
        </div>

    </form>
</body>
</html>
