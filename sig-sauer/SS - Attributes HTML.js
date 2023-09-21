// Sig Sauer
var debug= '';
var html='<html><head><style>table, th, td {border: 0px solid black;border-collapse: collapse;}th, td {padding: 3px}</style></head><body><h4>Specs:</h4><table>';
var attr_object = JSON.parse(GetValueByApiName("TSAAttributeObject"));
var mapping = pepperi.api.userDefinedTables.getList(
{ table:"AttributeMapping",mainKey: GetValueByApiName("TSAAttributeSet"), currentAccountScope: true });

if (mapping.success){
  	var list = mapping.objects;
  	for (var i = 0 ; i < list.length ; i++){
      	for (var j = 0 ; j < list.length ; j++){
          	var color = (i % 2 == 0) ? '#fff' : '#1A1A1A0A';
          	var temp = JSON.parse(list[j].value);
          	var attr = list[j]["secondaryKey"];	
          	if (temp["Order"] == (i+1).toString()){
              	html += '<tr><td style="background-color:black; font-size:80%; color:white;min-width:60px;max-width:100px">'+ 
                  		temp["Attribute_Display_Label"] +' '+ 
                  		'  </td> <td style="background-color:'+color+';font-size:80%;min-width:50px">' + 
                  		attr_object[attr] +'</td></tr>';
				debug += attr+' ';
              	break;
            }
        }
    }
}
//SetValueByApiName("TSATESTHTMLFIELD", debug);
return html+'</table></body></html>';