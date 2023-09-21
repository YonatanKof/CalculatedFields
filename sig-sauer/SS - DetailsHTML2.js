// Sig Sauer
function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  var debug= '';
  
  style = 'table {border-collapse: collapse; width: 100%; border: 0px solid black;} th, td {text-align: left;padding: 5px;font-size:80%;} tr:nth-child(even){background-color: #f2f2f2} th {background-color: #4CAF50;color: white;}';
  var html='<html><head><style>'+style+'</style></head><body><h4>Item: '+ GetValueByApiName("Item.ExternalID")+'</h4><table>';
  html+='<tr><td><b>Model:</b></td><td>'+GetValueByApiName("Item.TSAModel")+'</td></tr>';
  html+='<tr><td><b>Description:</b></td><td>'+GetValueByApiName("Item.LongDescription")+'</td></tr>';
  html+='<tr><td><b>UPC:</b></td><td>'+GetValueByApiName("Item.UPC")+'</td></tr>';
  html+='<tr><td><b>Base Price:</b></td><td>'+currencyFormat(GetValueByApiName("Item.SecondaryPrice"))+'</td></tr>';
  html+='<tr><td><b>MAP:</b></td><td>'+currencyFormat(GetValueByApiName("Item.TSAMAP"))+'</td></tr>';
  html+='<tr><td><b>MSRP:</b></td><td>'+currencyFormat(GetValueByApiName("Item.Price"))+'</td></tr>';
  
  return html+'</table></body></html>';