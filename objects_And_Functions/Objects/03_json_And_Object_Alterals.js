/*
    * json:
        * json = JavaScript Object Notation
        * 他是被「物件實體語法」啟發的，而常被誤解成與 Object interal syntax  是同一個東西。
        * 雖然他看起來很像，也很容易轉換瀏覽器從伺服器抓下來的資料，或像是 Node.js
        * json是一種可以在網路上，上傳資料的格式。
        
        * 現在大多都用 json 格式傳送資料，使用方法像是「物件實體語法」，但還是有些差異。
            1. json 屬性需要被包在引號裡面
            2. json 要有解析器，例如：PHP,ASP.NET 的伺服技術，當他在解析時，json 一定需要被包在括號裡面。
            3. 以技術上來說，json 是「物件實體語法的子合集」，代表只要是 json 是有效的
                在物件實體就是有效的，但不是所有的「物件實體語法」在 json格式 都是有效的。
            4. json格式規則較為嚴格。
            5. JavaScript Object Notation , 並不是 JavaScript 的一部份
                但是他較為受歡迎，因為他簡單的讓 JavaScript 解析他，JavaScript 有一些內建功能可以轉換兩者。
                所以我可以讓任意 Object 轉換為 json 。
            6. JSON.stringify() 是 JavaScript 內建的轉化 JSON 的功能 .stringify
                他會把該物件轉化為 JSON 格式。
            7. JSON.parse() 會接受一個字串並且轉換為 JavaScript 的 Object 。

            ---------------JSON & 「物件實體語法」 並不一樣---------------
                         JavaScript 有一些內建功能可以在兩者之間轉換 。


*/ 
    /*
        json 格式:
         1.屬性一定需要被包在引號裡面，把屬性名稱包裹起來。
         2.內外的引號需要不一樣否則會導致衝突。
         '{
            "屬性名":"屬性值",
         }'
    */ 
    
    var gototheJSON = {   //這裡物件是實體語法，在物件實體語法中屬性可以被引號包裹。 
    "fristName" : "Mary",
    "isAProgrammer":true
    }
    /*
   * JSON.stringify() 是 JavaScript 內建的轉化 JSON 的功能 .stringify
     他會把該物件轉化為 JSON 格式。

    * JSON.parse() 會接受一個字串並且轉換為 JavaScript 的 Object 。
    */ 
   // 轉化對象變成 JSON 語法的字串

    console.log(JSON.stringify(gototheJSON));

    // 內外的引號需要不一樣否則會導致衝突。
  var jsonValue = JSON.parse( '{"fristName" : "Mary","isAProgrammer":true}');
  // 轉化 JSON 語法的字串成為對象。
    console.log(jsonValue)