var dataJSON =  TSAASPParameters;
var parsedData = JSON.parse(dataJSON);
var code = `<table style="font-size: 13.5px;line-height: 17px"><tr>` 
  + `<td style="color: #696969;padding-right: 15px; text-align:right"> Max Percentage </td><td style="color: #343434;padding-right: 15px">` + parsedData.MaxPercentage + `% </td>`
  + `<td style="color: #696969;padding-rights: 15px; text-align:right"> Max Amount</td><td style="color: #343434;padding-right: 15px"> $` + parsedData.MaxRedeem.toFixed(2).toLocaleString("en-US") + `</td>`
+`</tr><tr>`
  + `<td style="color: #696969;padding-right: 15px; text-align:right""> Min Earnable </td><td style="color: #343434;padding-right: 15px"> $` + parsedData.MinEarnable.toFixed(2).toLocaleString("en-US") + `</td>`
  + `<td style="color: #696969;padding-right: 15px; text-align:right""> Earnable Amount </td><td style="color: #343434;padding-right: 15px"> $` + parsedData.Earned.toFixed(2).toLocaleString("en-US") + `</td>`
+`</tr><tr>`
  + `<td style="color: #696969;padding-right: 15px; text-align:right""> Redeemable Amount </td><td style="color: #343434;padding-right: 15px"> $` + parsedData.Redeemable.toFixed(2).toLocaleString("en-US")+ `</td>`
  + `<td style="color: #696969;padding-right: 15px; text-align:right""> Available </td><td style="color: #343434;padding-right: 15px"> $` + parsedData.Available.toFixed(2).toLocaleString("en-US") + `</td>`
+`</tr></table>`
SetValueByApiName("TSAASPDisplayParameters", code);
return;