//! TITLE
font='html * {font-family: -apple-system, BlinkMacSystemFont, sans-serif;}';
style='.fd-item-page-sm__top-title {margin: 0; padding: 0; color: #c95c0d; font-size: 2.2em; line-height: 1.2em; font-weight: bolder;}';
var html='<html><head><style>'+font+'</style><style>'+style+'</style></head><body>';
html+='<h2 class="fd-item-page-sm__top-title" >' + GetValueByApiName("ItemName") + '</h2>';
return html+'</div></body></html>';


//! CONTENT
function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

// font='html * {font-family: -apple-system, BlinkMacSystemFont, sans-serif;}';
var style='strong {font-size: 110%;}';
style+='.fd-item-page-sm {margin: 0; padding: 0;}';
style+='.fd-item-page-sm__title {color: #c95c0d; margin-bottom: 0.5em;}';
var html='<html><head><style>'+style+'</style></head><body>';
html+='<div class="fd-item-page-sm">';
html+='<p class="body-md">ID: <strong>' + GetValueByApiName("ItemExternalID") + '</strong></p>';
html+='<p class="body-md">Main Category: <strong>' + GetValueByApiName("ItemMainCategory") + '</strong></p>';
html+='<p class="body-md">Product Group: <strong>' + GetValueByApiName("ItemProp1") + '</strong></p>';
html+='<p class="body-md">Secondary Group: <strong>' + GetValueByApiName("ItemProp2") + '</strong></p>';
html+='<p class="body-md">Quality Level: <strong>' + GetValueByApiName("ItemProp5") + '</strong></p>';
html+='<p class="body-md">Case Quantity: <strong>' + GetValueByApiName("ItemCaseQuantity") + '</strong></p>';
html+='<p class="body-md">Packaging: <strong>' + GetValueByApiName("ItemProp3") + '</strong></p>';
html+='<p class="body-md">Quantity Per Package: <strong>' + GetValueByApiName("ItemProp4") + '</strong></p>';
html+='<hr style="border: solid 1px #e0e0e0; margin: 1em 0;}">';
html+='<p class="body-md">Price After Discount: <strong>' + currencyFormat(UnitPriceAfterDiscount) +  '</strong></p>';
html+='<h3 class="fd-item-page-sm__title" style=" font-size: 1.8em; line-height: 1.2em;" > ' + GetValueByApiName("ItemTSAPromotionDetails") + '</h3>';
return html+'</div></body></html>';