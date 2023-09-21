// Name -> ItemName
// ID -> ItemWrntyID
// Price -> ItemPrice

style = '.kofbox {margin-top: 0.5em; padding: 0} .kofffi {margin: 0;}';
var html='<html><head><style>'+style+'</style></head><body><div class="kofbox">';
html+='<h1 class="kofffi" style="font-size: 1.5em;">' + GetValueByApiName("ItemName") + '</h1>';
html+='<h2 class="kofffi" style="font-size: 1.25em;">' + GetValueByApiName("ItemWrntyID") + '</h2>';
html+='<h3 class="kofffi" style="font-size: 1em;">' + GetValueByApiName("ItemPrice") + '</h3>';
return html+'</div></body></html>';