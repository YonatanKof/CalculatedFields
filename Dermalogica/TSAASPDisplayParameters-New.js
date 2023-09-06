var dataJSON =  TSAASPParameters;
var parsedData = JSON.parse(dataJSON);
var code = `
<div>
	<style>
		.flex-it-box {
			display: flex;
			flex-direction: column;
		}
	</style>
	<div class="flex-it-box">
		<div>
			<span class="body-xs title ng-star-inserted">Max Percentage</span>
			<span class="body-sm value">value</span>
		</div>
		<div>
			<span class="body-xs title ng-star-inserted">Min Earnable</span>
			<span class="body-sm value">value</span>
		</div>
		<div>
			<span class="body-xs title ng-star-inserted">Redeemable Amount</span>
			<span class="body-sm value">value</span>
		</div>
		<div>
			<span class="body-xs title ng-star-inserted">Max Amount</span>
			<span class="body-sm value">value</span>
		</div>
		<div>
			<span class="body-xs title ng-star-inserted">Earnable Amount</span>
			<span class="body-sm value">value</span>
		</div>
		<div>
			<span class="body-xs title ng-star-inserted">Available</span>
			<span class="body-sm value">value</span>
		</div>
	</div>
</div>
`
SetValueByApiName("TSAASPDisplayParameters", code);
return;