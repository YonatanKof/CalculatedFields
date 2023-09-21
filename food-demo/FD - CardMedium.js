// Medium card
function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
font = 'html * {font-family: -apple-system, BlinkMacSystemFont, sans-serif;}';
style = '.myfd-card-m {margin: 0; padding: 0; text-align: center;}';
var html='<html><head><style>'+font+'</style><style>'+style+'</style></head><body>';
html+='<div class="myfd-card-m">';
html+='<h3 style="margin-bottom: 0.3em; color: #c95c0d; font-size: 1.6em; line-height: 1.2em; font-weight: bolder;" > ' + GetValueByApiName("ItemName") + '</h3>';
html+='<p class="body-sm" style="margin-bottom: 0.5em;" >' + GetValueByApiName("ItemExternalID") + '</p>';
html+='<p class="body-md" style="font-weight: bolder;" >' + currencyFormat(UnitPriceAfterDiscount) + '</p>';
return html+'</div></body></html>';