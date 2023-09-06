var dataJSON = TSAASPParameters;
var parsedData = JSON.parse(dataJSON);

var asp_dd_combined = parsedData.CalcAvailable + AccountTSADermDoll;
var asp_dd_remaining = asp_dd_combined - TSADermDollarOrderRedeemableAmount;

var code =
`<div>
	<style>
		.flex-it-box {
			display: flex;
			flex-direction: column;
		}
	</style>
	<div class="flex-it-box">
		<div class="pep-card-input card-flex-container text-align-left one-row ng-star-inserted">
			<span class="body-xs title ng-star-inserted">Calculated Available ASP</span>
			<span class="body-sm value">value</span>
		</div>
		<div class="pep-card-input card-flex-container text-align-left one-row ng-star-inserted">
			<span class="body-xs title ng-star-inserted">Derm Doll on Account</span>
			<span class="body-sm value">value</span>
		</div>
		<div class="pep-card-input card-flex-container text-align-left one-row ng-star-inserted">
			<span class="body-xs title ng-star-inserted">Derm Dollar Redeemable Items</span>
			<span class="body-sm value">value</span>
		</div>
		<div class="pep-card-input card-flex-container text-align-left one-row ng-star-inserted">
			<span class="body-xs title ng-star-inserted">ASP + Derm Doll Combined</span>
			<span class="body-sm value">value</span>
		</div>
		<div class="pep-card-input card-flex-container text-align-left one-row ng-star-inserted">
			<span class="body-xs title ng-star-inserted">ASP + DD Remaining Available</span>
			<span class="body-sm value">value</span>
		</div>
	</div>
</div>`;
SetValueByApiName('TSAASPDisplayOnCart', code);
return;
