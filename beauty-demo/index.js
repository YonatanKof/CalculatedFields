function currencyFormat(num) {
	return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
var html = `
<html lang="en">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<style>
			.this-hr {
				margin: 1em 0;
			}
			.icon-list {
				display: flex;
				align-items: start;
				gap: 1.5rem;
				padding-top: 1.5rem;
			}
			.icon-bullet {
				max-width: 6rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				text-align: center;
				transition: transform ease-in-out 0.25s;
			}
			.icon {
				width: 4rem;
				height: 4rem;
				margin-bottom: 0.5rem;
				fill: hsl(
					var(--pep-color-system-primary-h),
					var(--pep-color-system-primary-s),
					var(--pep-color-system-primary-l)
				);
			}
			.icon-bullet:hover {
				transform: scale(1.05);
			}
		</style>
	</head>
	<body>
		<h2 class="color-user-secondary title-4xl">${GetValueByApiName("ItemName")}</h2>
		<p class="body-md color-dimmed">${GetValueByApiName("ItemMainCategory")}, ${GetValueByApiName("ItemProp3")}</p>
		<hr class="this-hr" />
		<p class="body-lg">
			${GetValueByApiName("ItemExternalID")} •
			<span class="color-success">Price After Discount: <strong> ${currencyFormat(ItemPrice)}</strong></span>
		</p>
		<div class="icon-list">
			<span class="icon-bullet">
				<svg class="icon" width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M50,0 C22.383,0 0,22.383 0,50 C0,77.617 22.383,100 50,100 C77.617,100 100,77.617 100,50 C100,22.383 77.617,0 50,0 Z M43.2617,77.191 C38.7578,81.6988 31.1287,81.3707 22.8667,73.1129 C14.6089,64.8551 16.0698,49.9999 16.0698,49.9999 C16.0698,49.9999 30.9248,48.539 39.1868,56.8007 C47.4407,65.0585 47.7688,72.6877 43.261,77.1917 L43.2617,77.191 Z M38.4609,36.539 C38.4609,24.859 49.9999,15.383 49.9999,15.383 C49.9999,15.383 61.5389,24.8557 61.5389,36.535 C61.5389,48.219 56.3709,53.847 49.9999,53.847 C43.6289,53.847 38.4609,48.2181 38.4609,36.538 L38.4609,36.539 Z M77.1329,73.117 C68.8712,81.3748 61.2419,81.7029 56.7379,77.1951 C52.2301,72.6912 52.5582,65.0621 60.816,56.8001 C69.0777,48.5384 83.929,49.9993 83.929,49.9993 C83.929,49.9993 85.3899,64.8543 77.1321,73.1163 L77.1329,73.117 Z"
					></path>
				</svg>
				<p class="body-xs color-dimmed">Organic colors & fragrances</p>
			</span>
			<span class="icon-bullet">
				<svg class="icon" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M87.8554,22.5396 C88.2456,21.8632 88.9558,21.4346 89.7362,21.4046 C90.5164,21.3746 91.2576,21.7472 91.6986,22.3916 C96.9396,30.3108 100,39.8008 100,50 C100,77.5958 77.5958,100 50,100 C22.4042,100 0,77.5958 0,50 C0,22.4042 22.4042,0 50,0 C61.2866,0 71.7048,3.7478 80.0768,10.0656 C80.977,10.7584 81.2252,12.0106 80.6572,12.9944 C79.0048,15.8694 75.8274,21.3728 75.8274,21.3728 C75.8274,21.3728 68.313,21.3728 65.1428,21.3728 C64.2862,21.3728 63.4946,20.9158 63.0662,20.1738 C62.1236,18.5412 60.5524,15.8198 60.5524,15.8198 C59.0346,13.1908 55.668,12.2888 53.0392,13.8066 C50.4104,15.3244 49.5082,18.6908 51.026,21.3198 C51.026,21.3198 52.5974,24.0412 53.54,25.6738 C53.9682,26.4158 53.9682,27.3298 53.54,28.0718 C52.8704,29.2312 51.8618,30.9784 51.1924,32.1378 C50.764,32.8798 49.9724,33.3368 49.1156,33.3368 C45.3594,33.3368 35.2558,33.3368 35.2558,33.3368 C33.2908,33.3368 31.475,34.3852 30.4926,36.0868 L21.2826,52.039 C20.3002,53.7406 20.3002,55.8372 21.2826,57.539 C21.2826,57.539 26.3344,66.289 28.2126,69.542 C28.641,70.284 28.641,71.198 28.2126,71.94 C27.0284,73.9912 24.7396,77.9552 24.7396,77.9552 C23.222,80.584 24.124,83.9506 26.7528,85.4684 C29.3816,86.9862 32.7482,86.084 34.266,83.4552 C34.266,83.4552 36.5546,79.4912 37.739,77.44 C38.1672,76.698 38.9588,76.241 39.8156,76.241 C43.572,76.241 53.6756,76.241 53.6756,76.241 C55.6406,76.241 57.4562,75.1926 58.4386,73.491 C58.4386,73.491 63.6032,64.5458 65.4318,61.3784 C65.8232,60.7006 66.5464,60.2832 67.329,60.2832 C70.9852,60.2832 81.3086,60.2832 81.3086,60.2832 C84.3442,60.2832 86.8086,57.8186 86.8086,54.7832 C86.8086,51.7476 84.3442,49.2832 81.3086,49.2832 L67.3224,49.2832 C66.5396,49.2832 65.8166,48.8656 65.4252,48.1878 C64.2864,46.2154 61.8996,42.0814 60.7186,40.0358 C60.2902,39.294 60.2902,38.3798 60.7186,37.6378 C61.388,36.4784 62.3968,34.7312 63.0662,33.5718 C63.4946,32.8298 64.2862,32.3728 65.1428,32.3728 C68.8992,32.3728 79.0028,32.3728 79.0028,32.3728 C80.9678,32.3728 82.7834,31.3246 83.766,29.6228 C83.766,29.6228 86.134,25.5214 87.8554,22.5396 Z M49.1156,44.3368 C49.9724,44.3368 50.764,44.794 51.1924,45.5358 C52.3536,47.5474 54.681,51.5784 55.8424,53.59 C56.2708,54.3318 56.2708,55.246 55.8424,55.9878 C54.681,57.9994 52.3536,62.0304 51.1924,64.042 C50.764,64.784 49.9724,65.241 49.1156,65.241 C46.793,65.241 42.1382,65.241 39.8156,65.241 C38.9588,65.241 38.1672,64.784 37.7388,64.042 C36.5776,62.0304 34.2502,57.9994 33.0888,55.9878 C32.6606,55.246 32.6606,54.3318 33.0888,53.59 C34.2502,51.5784 36.5776,47.5474 37.7388,45.5358 C38.1672,44.794 38.9588,44.3368 39.8156,44.3368 C42.1382,44.3368 46.793,44.3368 49.1156,44.3368 Z"
					/>
				</svg>
				<p class="body-xs color-dimmed">Paraben free</p>
			</span>
			<span class="icon-bullet">
				<svg class="icon" width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M50,0 C77.6142375,0 100,22.3857625 100,50 C100,77.6142375 77.6142375,100 50,100 C22.3857625,100 0,77.6142375 0,50 C0,22.3857625 22.3857625,0 50,0 Z M50.9105962,43.5959028 C44.9463915,41.9141163 38.8835319,44.7026044 37.3924807,49.8615641 C36.4661345,53.18153 33.8567598,55.7800637 30.5128758,56.7185589 C27.300485,57.477932 24.8172708,59.9896405 24.1155997,63.1794797 C23.3865213,65.7020205 22.7670719,68.8810274 24.5212498,71.0672109 C26.3740826,73.3890067 29.5974195,73.2425343 33.3249773,73.0852158 C36.3070796,72.8085612 39.3166875,73.0038484 42.2384461,73.6711052 C45.0724959,74.6312927 47.7367412,76.0362996 50.1213004,77.8319643 C52.0729285,79.519028 54.4684338,80.6148417 57.0284108,81 C57.5875866,81 58.1467343,80.9077864 58.6729876,80.7179154 C61.3206735,79.7685462 62.4938256,76.7523018 63.222904,74.229761 C64.3300568,71.1594245 63.5625689,67.7255804 61.2438265,65.4037152 C58.8921055,62.8432613 58.0643581,59.2573481 59.0675233,55.9427984 C60.5421553,50.8217517 56.874801,45.2775503 50.9105962,43.5959028 Z M79.525826,47.7078915 C76.7959043,44.3716077 71.1880082,44.3932723 66.9998734,47.745874 C62.8117387,51.0930596 61.6386849,56.5342151 64.3686067,59.8650133 C65.782895,61.5195939 67.8824354,62.4418129 70.0696847,62.3767218 L70.4095602,62.3767218 C72.7941194,62.2411789 75.0690775,61.3514014 76.9000182,59.8379325 L77.138298,59.6421564 C81.1316325,56.2767646 82.2032493,50.9799479 79.525826,47.7078915 Z M34.5030831,38.5724164 C32.6940346,33.5544155 27.903024,30.6520493 23.8190173,32.0951082 C19.7350808,33.5381671 17.8876508,38.7893404 19.6912263,43.7965089 C20.4641873,46.031549 21.9497654,47.9682559 23.9176723,49.3081856 C25.1785753,50.1544672 26.6586804,50.6210067 28.1880429,50.6426991 C28.9336386,50.6426991 29.673607,50.5179192 30.3807652,50.2738032 C32.5240898,49.4493112 34.1522476,47.6698812 34.7662098,45.4782815 C35.4295136,43.2051617 35.3363176,40.7858056 34.5030831,38.5669863 Z M69.0062179,27.245286 C65.5088082,24.7227452 60.0763299,26.1656652 56.9078637,30.462206 C55.4716832,32.3554587 54.6877902,34.6502432 54.6713431,37.0154376 C54.6328915,39.2938347 55.6799252,41.4583536 57.5053928,42.847112 C58.6839197,43.6825335 60.1038214,44.1219506 61.550948,44.1056743 C62.3787796,44.1056743 63.1955248,43.9754921 63.9849048,43.7367923 C66.259863,42.9990838 68.233271,41.5614411 69.6146931,39.6302336 C72.8325709,35.2577278 72.5694443,29.8167111 69.0062179,27.245286 Z M49.5507014,22.5961533 C48.1090479,20.8004748 45.8614549,19.829441 43.5481855,20.0247282 C41.2403891,20.2147104 39.1792582,21.5329199 38.0664499,23.5455086 L38.071,23.537 L38.082869,23.5347179 C35.6761744,27.6137051 36.0419624,32.7247303 38.9752566,36.423641 L39.1792301,36.6736225 C40.5386478,38.2739444 42.5285872,39.2232997 44.6445466,39.2775446 C44.8254515,39.2721145 45.0008693,39.2666984 45.1762871,39.2504221 C47.4676644,39.0062784 49.5013599,37.6989012 50.6580227,35.7296418 C53.1139278,31.5579503 52.6699103,26.3121931 49.5507014,22.5961533 Z"
					></path>
				</svg>
				<p class="body-xs color-dimmed">Cruelty free</p>
			</span>
			<span class="icon-bullet">
				<svg class="icon" width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M50,0 C77.617,0 100,22.383 100,50 C100,77.617 77.617,100 50,100 C22.383,100 0,77.617 0,50 C0,22.383 22.383,0 50,0 Z M37.2752,68.9786 C31.674,64.9016 24.6086,63.2368 17.7388,64.3254 C16.7274,64.5002 16.0156,65.4166 16.0964,66.4398 C16.7344,73.0038 20.2162,79.044 25.7248,83.0214 C31.326,87.0984 38.3914,88.7632 45.2612,87.6746 C46.2726,87.4998 46.9844,86.5834 46.9036,85.5602 C46.2656,78.9962 42.7838,72.956 37.2752,68.9786 Z M83.899,66.4394 C83.98,65.4182 83.27,64.5034 82.2606,64.3284 C75.3914,63.2368 68.326,64.9016 62.7248,68.9786 C57.2162,72.956 53.7344,78.9962 53.101,85.5606 C53.02,86.5818 53.73,87.4966 54.7394,87.6716 C61.6086,88.7632 68.674,87.0984 74.2752,83.0214 C79.7838,79.044 83.2656,73.0038 83.899,66.4394 Z M37.2752,43.9786 C31.674,39.9016 24.6086,38.2368 17.7388,39.3254 C16.7274,39.5002 16.0156,40.4166 16.0964,41.4398 C16.7344,48.0038 20.2162,54.044 25.7248,58.0214 C31.326,62.0984 38.3914,63.7632 45.2612,62.6746 C46.2726,62.4998 46.9844,61.5834 46.9036,60.5602 C46.2656,53.9962 42.7838,47.956 37.2752,43.9786 Z M83.899,41.4394 C83.98,40.4182 83.27,39.5034 82.2606,39.3284 C75.3914,38.2368 68.326,39.9016 62.7248,43.9786 C57.2162,47.956 53.7344,53.9962 53.101,60.5606 C53.02,61.5818 53.73,62.4966 54.7394,62.6716 C61.6086,63.7632 68.674,62.0984 74.2752,58.0214 C79.7838,54.044 83.2656,48.0038 83.899,41.4394 Z M51.168,11.0346 C50.4216,10.4132 49.3352,10.423 48.6,11.0578 C43.4464,15.6456 40.467,22.2428 40.4616,29.2 C40.5114,36.1862 43.5516,42.7862 48.7582,47.3502 C49.4988,47.9804 50.587,47.9818 51.329,47.3532 C56.5524,42.7884 59.5716,36.156 59.5382,29.1586 C59.5104,22.1596 56.4346,15.552 51.168,11.0346 Z"
					></path>
				</svg>
				<p class="body-xs color-dimmed">Gluten free</p>
			</span>
			<span class="icon-bullet">
				<svg class="icon" width="100px" height="98px" viewBox="0 0 100 98" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M34.3578,93.9911889 C34.4684,94.6914323 34.1956,95.3972537 33.6424,95.8430986 C33.0892,96.2889434 32.3394,96.4070784 31.675,96.1532775 C13.1338,88.8641722 0,70.8496891 0,49.803939 C0,44.7050117 0.771,39.7837849 2.203,35.1500264 C2.4126,34.4936105 2.9486,33.9921844 3.6194,33.8250424 C4.2902,33.6579004 5.0002,33.8489483 5.4952,34.3298551 C15.6644,44.6763246 29.7388,64.9013058 34.3578,93.9911889 Z M9.636,23.5096506 C8.8622,22.8420786 8.7206,21.6995762 9.3082,20.864663 C18.3848,8.23737229 33.2342,0 50,0 C77.5958,0 100,22.3165474 100,49.803939 C100,72.8553933 84.2438,92.2699648 62.883,97.9362585 C61.8334,98.2065943 60.7592,97.5928106 60.4634,96.5539004 C57.2546,85.3753067 52.6826,68.4025227 59.5318,55.6638704 C59.5318,55.6638704 72.2228,56.780674 76.7038,48.2283416 C80.9462,40.1306195 80.1666,31.6978166 84.8268,23.5644349 C84.9996,23.2682011 85.0058,22.9038355 84.8434,22.6018244 C84.681,22.2998133 84.373,22.1031873 84.0298,22.0820705 C51.843,20.0042501 47.7978,38.5675727 47.4312,45.7744019 C47.4216,46.1977354 47.6838,46.5800304 48.0832,46.7250595 C48.4826,46.8700885 48.9304,46.7453795 49.1964,46.415279 C51.9406,43.3951681 56.5232,39.5875574 60.5168,37.69441 C60.9462,37.5800602 61.398,37.774694 61.6088,38.16436 C61.8194,38.554026 61.7338,39.036925 61.4018,39.3311667 C56.0264,44.0816656 48.1264,52.0616511 44.422,65.6240606 C44.2056,66.4045879 43.529,66.9717552 42.72,67.0512422 C41.911,67.1305301 41.1364,66.7056029 40.7714,65.9820513 C35.9162,56.6926206 24.4312,36.523619 9.636,23.5096506 Z"
					></path>
				</svg>
				<p class="body-xs color-dimmed">Vegan</p>
			</span>
		</div>
		<hr class="this-hr" />
		<ul>
			<li>
				<p class="body-sm">Gender: <strong> ${GetValueByApiName("ItemProp2")}</strong></p>
			</li>
			<li>
				<p class="body-sm">Season: <strong> ${GetValueByApiName("ItemProp1")}</strong></p>
			</li>
			<li>
				<p class="body-sm">Case Quantity: <strong> ${GetValueByApiName("ItemCaseQuantity")}</strong></p>
			</li>
			<li>
				<p class="body-sm">Packaging and size: <strong> ${GetValueByApiName("ItemProp5")}</strong></p>
			</li>
			<li>
				<p class="body-sm">Skin Type: <strong> ${GetValueByApiName("ItemProp4")}</strong></p>
			</li>
			<li>
				<p class="body-sm">Concerns: <strong> ${GetValueByApiName("ItemProp6")}</strong></p>
			</li>
			<li>
				<p class="body-sm">Formulation: <strong> ${GetValueByApiName("ItemProp7")}</strong></p>
			</li>
		</ul>
	</body>
</html>
`;
return html;