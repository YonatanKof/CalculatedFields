var itemName = GetValueByApiName("ItemName");

var html = `<div style="font-size: 16px; margin: 0; padding: 0; text-align: left;"> 
                <h3 style=" 
                    color: #C10;  
                    font-size: 1.8em; 
                    line-height: 1.2em; 
                    font-weight: bolder; 
                    display: -webkit-box; 
                    -webkit-line-clamp: 2; 
                    -webkit-box-orient: vertical; 
                    overflow: hidden; 
                    text-overflow: ellipsis; 
                    margin: 0;" 
                    >
                    {{ItemName}}
                    </h3>
            </div>`;

var res = html;
res = res.replace("{{ItemName}}", itemName);

return res;
