function currencyFormat(num, currency) {
    return (
        currency.trim() +
        num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
}

var itemName = GetValueByApiName("ItemName");
var itemExId = GetValueByApiName("ItemExternalID");
var _unitPriceAfterDiscount = UnitPriceAfterDiscount; // UnitPriceAfterDiscount is in the Available Fields!!!
var currency = GetValueByApiName("Transaction.Currency");
var formattedPrice = currencyFormat(_unitPriceAfterDiscount, currency);

var html = `<div style="font-size: 16px; margin: 0; padding: 0; text-align: center;"> 
                <h3 style=" 
                    margin-bottom: 0.3em; 
                    color: #C10;  
                    font-size: 1.5em; 
                    line-height: 1.2em; 
                    font-weight: bolder; 
                    display: -webkit-box; 
                    -webkit-line-clamp: 2; 
                    -webkit-box-orient: vertical; 
                    overflow: hidden; 
                    text-overflow: ellipsis; 
                    margin-top: 0;" 
                    >
                    {{ItemName}}
                    </h3>
                    
                <p style="
                    margin-bottom: 0.5em; 
                    opacity: 0.7;
                    margin-top: 0;" 
                    > 
                        {{ItemExternalID}} 
                </p>
                <p style="
                    font-weight: bolder; 
                    font-size: 1.1em; 
                    margin-top: 0;" 
                    > 
                        {{UnitPriceAfterDiscount}} 
                </p>
            </div>`;

var res = html;
res = res.replace("{{ItemName}}", itemName);
res = res.replace("{{ItemExternalID}}", itemExId);
res = res.replace("{{UnitPriceAfterDiscount}}", formattedPrice);

return res;