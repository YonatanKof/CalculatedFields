//  By adding -> Available Fields

var html = '<p class="body-md" style="text-align : right;"><strong>{{Currency}}{{ItemPrice}}</strong></p>';

var currency = GetValueByApiName("Transaction.Currency");

var res = html;
res = res.replace("{{ItemPrice}}",ItemPrice);
res = res.replace("{{Currency}}",currency);

return res;