// This one is discarded
var html = "<html><head></head><body>";
html +=
    '<h3 style=" font-size: 1.8em; line-height: 1.2em;" > ' +
    GetValueByApiName("PPIPackagePromotionStartStartupMessageConfiguration") +
    "</h3>";
return html + "</body></html>";
html +=
    '<h3 style=" font-size: 1.8em; line-height: 1.2em;" > ' +
    PPIPackagePromotionStartStartupMessageConfiguration +
    "</h3>";

// Copied for original

var result = "";

var jsondata = JSON.parse(TSAPPIPackagePromotionStartDetails);
var msg = jsondata.StartupMsg;
if (msg !== undefined && msg != "") {
    if (msg.indexOf("{0}") !== -1) {
        var minTotal = Number(jsondata.Breakpoints[0].MinTotal);
        result = msg.replace("{0}", minTotal.toString());
    } else {
        result = msg;
    }
}
result =
    '<div style="display: flex;align-items: center; height: 100%;"><h3 style="font-size: 1.8em; line-height: 1.2em; margin: 0;"> ' +
    result +
    '</h3></div>';
return result;

style = "display: flex; align-items: center;";

// My Package Promotion Image
// return GetValueByApiName("PSARefToLeadingPortfolioItem");

result =
    '<div>' + GetValueByApiName("PSARefToLeadingPortfolioItem.image") + '</div>';
return result;
