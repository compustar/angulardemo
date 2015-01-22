<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplication1.Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Shopping Cart</title>
    <style type="text/css">
        .style1
        {
            width: 100px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <h1>Shopping Cart</h1>
    <table style="width:100%;" runat="server" id="tblSubmissionForm">
        <tr>
            <td class="style1">
                Item</td>
            <td>
                <asp:DropDownList ID="ddlItem" runat="server">
                </asp:DropDownList>
            </td>
        </tr>
        <tr>
            <td class="style1">
                Cart</td>
            <td>
                <asp:Label ID="lblCart" runat="server"></asp:Label>
            </td>
        </tr>
        <tr>
            <td class="style1">&nbsp;</td>
            <td>
                <asp:Button ID="btnAdd" runat="server" Text="Add" onclick="btnAdd_Click" />
                <asp:Button ID="btnRemove" runat="server" Text="Remove" onclick="btnRemove_Click" />
                <asp:Button ID="btnCheckout" runat="server" Text="Checkout" onclick="btnCheckout_Click" />
            </td>
        </tr>
    </table>

    <table style="width:100%;" runat="server" id="tblSubmission" visible="false">
        <tr>
            <td class="style1">
                Receipt </td>
            <td>
                <asp:Label ID="lblReceipt" runat="server"></asp:Label>
            </td>
        </tr>
    </table>
    </form>
</body>
</html>
