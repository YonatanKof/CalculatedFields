var html = `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<style>
			.account-info {
				font-family: sans-serif;
				overflow-x: hidden;
				container-type: inline-size;
				container-name: account-info-block;
			}
			.account-info-block {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 2rem;
			}
			.account-info h3 {
				margin: 0 0 1rem 0;
			}
			.account-info-list {
				display: flex;
				flex-direction: column;
				gap: 0.75rem;
			}
			.account-info-list div {
				display: grid;
				grid-template-columns: auto max-content;
				align-items: end;
			}
			.account-info-list span:first-child:after {
				position: absolute;
				padding-inline-start: 0.25ch;
				padding-inline-end: 0.75ch;
				text-align: right;
				opacity: 0.5;
				content: '. . . . . . . . . . . . . . . . . . . . ' '. . . . . . . . . . . . . . . . . . . . '
					'. . . . . . . . . . . . . . . . . . . . ' '. . . . . . . . . . . . . . . . . . . . '
					'. . . . . . . . . . . . . . . . . . . . ' '. . . . . . . . . . . . . . . . . . . . '
					'. . . . . . . . . . . . . . . . . . . . ' '. . . . . . . . . . . . . . . . . . . . '
					'. . . . . . . . . . . . . . . . . . . . ' '. . . . . . . . . . . . . . . . . . . . '
					'. . . . . . . . . . . . . . . . . . . . ' '. . . . . . . . . . . . . . . . . . . . ';
			}
			.account-info-list span:first-child {
				text-align: left;
				position: relative;
				overflow: hidden;
			}
			.account-info-list span:last-child {
				min-width: 2ch;
				font-variant-numeric: tabular-nums;
				text-align: right;
			}
			@container account-info-block (width < 800px) {
				.account-info-block {
					grid-template-columns: 1fr;
					gap: 0.75rem;
				}
			}
		</style>
		<section class="account-info">
			<div class="account-info-block">
				<div class="account-info-list">
					<div>
						<span id="acc-info-label" class="color-dimmed body-sm">Bill to Name</span>
						<span class="body-sm">BillToName</span>
					</div>
					<div>
						<span id="acc-info-label" class="color-dimmed body-sm">Billing Address 1</span>
						<span class="body-sm">AccountTSABillingAddress1</span>
					</div>
					<div>
						<span id="acc-info-label" class="color-dimmed body-sm">Billing Address 2</span>
						<span class="body-sm">AccountTSABillingAddress2</span>
					</div>
					<div>
						<span id="acc-info-label" class="color-dimmed body-sm">Billing Address 3</span>
						<span class="body-sm">AccountTSABillingAddress3</span>
					</div>
					<div>
						<span id="acc-info-label" class="color-dimmed body-sm">Billing City</span>
						<span class="body-sm">AccountTSABillingCity</span>
					</div>
					<div>
						<span id="acc-info-label" class="color-dimmed body-sm">Billing State</span>
						<span class="body-sm">AccountTSABillingState</span>
					</div>
					<div>
						<span id="acc-info-label" class="color-dimmed body-sm">Billing Zip Code</span>
						<span class="body-sm">AccountTSABillingZipCode</span>
					</div>
					<div>
						<span id="acc-info-label" class="color-dimmed body-sm">Mobile</span>
						<span class="body-sm">AccountMobile</span>
					</div>
					<div>
						<span id="acc-info-label" class="color-dimmed body-sm">Account Email</span>
						<span class="body-sm">AccountEmail</span>
					</div>
				</div>
				<div class="account-info-list">
					<div>
						<span id="acc-info-label" class="color-dimmed body-sm">Bill to Name</span>
						<span class="body-sm">BillToName</span>
					</div>
					<div>
						<span id="acc-info-label" class="color-dimmed body-sm">Shipping Address 1</span>
						<span class="body-sm">AccountStreet</span>
					</div>
					<div>
						<span id="acc-info-label" class="color-dimmed body-sm">Shipping Address 2</span>
						<span class="body-sm">AccountTSAShippingAddress2</span>
					</div>
					<div>
						<span id="acc-info-label" class="color-dimmed body-sm">Shipping Address 3</span>
						<span class="body-sm">AccountTSAShippingAddress3</span>
					</div>
					<div>
						<span id="acc-info-label" class="color-dimmed body-sm">Shipping City</span>
						<span class="body-sm">AccountStreet</span>
					</div>
					<div>
						<span id="acc-info-label" class="color-dimmed body-sm">Shipping State</span>
						<span class="body-sm">AccountState</span>
					</div>
					<div>
						<span id="acc-info-label" class="color-dimmed body-sm">Shipping Zip Code</span>
						<span class="body-sm">AccountZipCode</span>
					</div>
					<div>
						<span id="acc-info-label" class="color-dimmed body-sm">Phone</span>
						<span class="body-sm">AccountPhone</span>
					</div>
				</div>
			</div>
		</section>
	</body>
</html>
`;
return html;