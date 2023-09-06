var dataJSON = TSAASPParameters;
var parsedData = JSON.parse(dataJSON);

var asp_dd_combined = parsedData.CalcAvailable + AccountTSADermDoll;
var asp_dd_remaining = asp_dd_combined - TSADermDollarOrderRedeemableAmount;

var code =
	`<table style="font-size: 13.5px;line-height: 17px"><tr>` +
	`<td style="color: #696969;padding-right: 15px; text-align:right""> Calculated Available ASP </td><td style="color: #343434;padding-right: 15px">` +
	parsedData.CalcAvailable.toFixed(2) +
	`</td>` +
	`<td style="color: #696969;padding-right: 15px; text-align:right""> ASP + Derm Doll Combined</td><td style="color: #343434;padding-right: 15px">` +
	asp_dd_combined.toFixed(2) +
	`</td>` +
	`</tr><tr>` +
	`<td style="color: #696969;padding-right: 15px; text-align:right""> Derm Doll on Account </td><td style="color: #343434;padding-right: 15px">` +
	AccountTSADermDoll +
	`</td>` +
	`<td style="color: #696969;padding-right: 15px; text-align:right""> ASP + DD Remaining Available </td><td style="color: #343434;padding-right: 15px">` +
	asp_dd_remaining.toFixed(2) +
	`</td>` +
	`</tr><tr>` +
	`<td style="color: #696969;padding-right: 15px; text-align:right""> Derm Dollar Redeemable Items </td><td style="color: #343434;padding-right: 15px">` +
	TSADermDollarOrderRedeemableAmount +
	`</td>` +
	`<td style="color: #696969;padding-right: 15px; text-align:right"">  </td><td style="color: #343434;padding-right: 15px">` +
	' ' +
	`</td>` +
	`</tr></table>`;
SetValueByApiName('TSAASPDisplayOnCart', code);
return;
