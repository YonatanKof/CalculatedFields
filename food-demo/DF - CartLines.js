//font='html * {font-family: -apple-system, BlinkMacSystemFont, sans-serif;}';
style='.fd-item-page-sm__top-title {margin: 0; padding: 0; color: #c95c0d; font-size: 1.4em; line-height: 1.2em; font-weight: bolder; position: absolute; bottom: 0;}';
var html='<html><head><style>'+style+'</style></head><body>';
html+='<h2 class="fd-item-page-sm__top-title" >' + GetValueByApiName("ItemName") + '</h2>';
return html+'</div></body></html>';