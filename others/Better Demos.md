# Change text in ***next discount*** message

1. Sales Activities
2. Transaction Types
3. Edit the Transaction type
4. Got to fields tab
5. Custom Transaction Fields
6. Edit PPI_ItemPromotion_Logic
7. Edit the formula in this part

    Change or translate text like `fixed price of`

    ```jsx
    var getMessage='';
    		if (percentageValue > 0) {
    			getMessage = Math.round((percentageValue + Number.EPSILON) * 100) / 100 + "% off";
    		}
    		if (priceValue > 0) {
    			getMessage += getMessage.length>0 ? ' + ' : '';
    			getMessage += priceValue + currency + " off";
    		}
    		if (fixedPriceValue > 0) {
    			getMessage += getMessage.length>0 ? ' + ' : '';
    			getMessage += "fixed price of " + fixedPriceValue + currency;
    		}
    		if (additionalItemsValue == 1) {
    			getMessage += getMessage.length>0 ? ' + ' : '';
    			getMessage += "an additional item"; 
    		}
    		if (additionalItemsValue > 1) {
    			getMessage += getMessage.length>0 ? ' + ' : '';
    			getMessage += additionalItemsValue + " additional items"; 
    		}
    		
    		return "Buy " + buyMessage + moreMessage + " to get " + getMessage;
    ```

8. Save and hope for the best  🙏

# Change `$$$` icons in ***next discount*** message

1. Sales Activities
2. Transaction Types
3. Edit the Transaction type
4. Got to fields tab
5. Custom Transaction line-item Fields
6. Edit PPI_ItemPromotion_NextDiscount
7. Edit formula

    ```jsx
    var nextDiscountMessage = this.PPI_ItemPromotion.getNextDiscount(ItemWrntyID, ItemUUID, LineNumber);
    if (nextDiscountMessage != '') {
    	nextDiscountMessage = '$$$ ' + nextDiscountMessage;
    }
    return nextDiscountMessage;
    ```

# Change Wishlist icon

1. got to fields 
2. Custom Transaction line-item Fields
3. Item In Wish List