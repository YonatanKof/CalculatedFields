// First section
// ---
// Name – TSAconcatinateditemname
// Item Code – ItemExternalID
// Inventory – ItemInStockQuantity
// Season – ItemProp1
// Case Quantity – ItemCaseQuantity
// Collection – ItemProp3
// Minimum Quantity – ItemMinimumQuantity
// Gender – ItemProp2
// Allow for Backorder – TSABackorderenable
// Price – UnitPrice

function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

font='html * {font-family: -apple-system, BlinkMacSystemFont, sans-serif;}';

var style='.ew-item-page-lg {margin: 0; padding: 0; }';
style+='.ew-item-page-lg__body {line-height: 1.75; }';
style+='.ew-item-page-lg__title {color: #C10; margin-bottom: 0.5em; font-weight: bolder;}';
var html='<html><head><style>'+font+'</style><style>'+style+'</style></head><body>';
html+='<div class="ew-item-page-lg">';
html+='<h2 class="ew-item-page-lg__title" style="margin-top: 0.25em; font-size: 2.2em; line-height: 1.2em;" > ' + GetValueByApiName("TSAconcatinateditemname") + '</h2>';
html+='<hr style="border: solid 1px #e0e0e0; margin: 1em 0;}">';
html+='<p class="ew-item-page-lg__body">Item Code: <strong>' + GetValueByApiName("ItemExternalID") + '</strong></p>';
html+='<p class="ew-item-page-lg__body">Inventory: <strong>' + GetValueByApiName("ItemInStockQuantity") + '</strong></p>';
html+='<p class="ew-item-page-lg__body">Season: <strong>' + GetValueByApiName("ItemProp1") + '</strong></p>';
html+='<p class="ew-item-page-lg__body">Case Quantity: <strong>' + GetValueByApiName("ItemCaseQuantity") + '</strong></p>';
html+='<p class="ew-item-page-lg__body">Collection: <strong>' + GetValueByApiName("ItemProp3") + '</strong></p>';
html+='<p class="ew-item-page-lg__body">Minimum Quantity: <strong>' + GetValueByApiName("ItemMinimumQuantity") + '</strong></p>';
html+='<p class="ew-item-page-lg__body">Gender: <strong>' + GetValueByApiName("ItemProp2") + '</strong></p>';
html+='<p class="ew-item-page-lg__body">Allow for Backorder: <strong>' + GetValueByApiName("TSABackorderenable") + '</strong></p>';
html+='<hr style="border: solid 1px #e0e0e0; margin: 1em 0;}">';
html+='<p class="ew-item-page-lg__body">Price: <strong>' + currencyFormat(UnitPriceAfterDiscount) +  '</strong></p>';
html+='<p class="ew-item-page-lg__body">Price After Discount:</p>';
html+='<h3 class="ew-item-page-lg__title" style=" font-size: 1.8em; line-height: 1.2em;" >' + currencyFormat(GetValueByApiName("UnitPrice")) + '</h3>';
return html+'</div></body></html>';

// Second section
// --
// Last Order Date – LastOrderItemDate
// Last Order Quantity – LastOrderItemQuantity
// Last Order Price – LastOrderItemPrice
// Future Availability QTY – TSAFutureAvailabilityQTY
// Item History – TSAEyewearItemHistory