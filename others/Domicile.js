// Item Description -> ItemName
// ID -> ItemExternalID
// Don't add Price -> UnitPriceAfterDiscount

// Medium card
style = '.domi-card-m {margin: 0.5em 0; padding: 0;} .domi-card-m__t {margin-bottom: 0.5em; font-size: 1.2em; line-height: 1.2em; font-weight: bolder;}';
var html='<html><head><style>'+style+'</style></head><body><div class="domi-card-m">';
html+='<h3 class="domi-card-m__t" style="">' + GetValueByApiName("ItemName") + '</h3>';
html+='<p class="body-sm" style=" color: #78765f;">' + GetValueByApiName("ItemExternalID") + '</p>';
return html+'</div></body></html>';
//
style = '.domi-card-m {margin: 0.5em 0; padding: 0;} .domi-card-m__t {margin-bottom: 0.5em;  font-size: 1.2em; line-height: 1.2em; font-weight: bolder;}';
var html='<html><head><style>'+style+'</style></head><body><div class="domi-card-m">';
html+='<h3 class="domi-card-m__t body-2xl" style="">' + GetValueByApiName("ItemName") + '</h3>';
html+='<p class="body-sm" style=" color: #78765f;">' + GetValueByApiName("ItemExternalID") + '</p>';
return html+'</div></body></html>';

// Lines
style = '.domi-line-m {margin: 0.5em 0; padding: 0;} .domi-line-m__t {margin-bottom: 0.4em; font-size: 1.6em; line-height: 1.4em; font-weight: bolder;}';
var html='<html><head><style>'+style+'</style></head><body><div class="domi-line-m">';
html+='<h3 class="domi-line-m__t" style="">' + GetValueByApiName("ItemName") + '</h3>';
html+='<p class="body-md" style=" color: #78765f;">' + GetValueByApiName("ItemExternalID") + '</p>';
return html+'</div></body></html>';

// Item Description -> ItemName
// ID -> ItemExternalID
// דף מידע להורדה - ItemTSAttachmentFile0

// Item Page
style = '.domi-page-m {margin: 0.5em 0; padding: 0; text-align: right;} .domi-page-m__t {margin-bottom: 0.4em; font-size: 1.6em; page-height: 1.4em; font-weight: bolder;}';
var html='<html><head><style>'+style+'</style></head><body><div class="domi-page-m">';
html+='<h3 class="domi-page-m__t" style="">' + GetValueByApiName("ItemName") + '</h3>';
html+='<p class="body-md" style=" color: #78765f;">' + GetValueByApiName("ItemExternalID") + '</p>';
return html+'</div></body></html>';



var html='<html><head></head><body><div>';
html+='<iframe width="560" height="315" src="https://www.youtube.com/embed/7BrECW-E9cg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
return html+'</div></body></html>';
