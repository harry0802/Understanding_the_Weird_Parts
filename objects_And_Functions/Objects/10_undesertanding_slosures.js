/*
    閉包需要了解
    1 一級函數運作
    2 了解執行堆和執行上下文
    這些都是掌握閉包前需要的知道的觀念
*/
/*
    閉包運作機制：
*/ 
/**/ 
/**/ 

function fn1(saysomething){
 return function(name){
    // 利用範圍鏈去引入外層函數 saysomething
    console.log(saysomething +' '+ name);
 }
}
fn1('hi')()
/*
    * 因為用函數表達式回傳一個函數，所以當呼叫函數時會得到一個值 function ，可以再次呼叫他，
      因為函數是一個物件，所以我們可以把它當作一個值回傳。
    * fn1('hi')() 呼叫函數和被回傳的函數
*/

/*
    * 設定一個變數為函數的回傳值：
       所以現在「變數」成為一個函數，他是一個呼叫「外部函數」執行之後回傳「內部函數對象」的函數 ，所以當我們呼叫變數就代表了，呼叫內部函數對象。

    * 為什麼「變數」扔然知道「外部函數」是什麼？
       因為「外部函數」已經被呼叫了，所以裡面的程式屬性被執行，並且回傳一個「內部函數」然後「賦值給變數」
       所以「變數」實際上在是在呼叫「外部函數」裡面的回傳的「內部函數」。
    
    * 簡單說就是把函數的執行結果賦值給了變數。
    * 當我們透過變數呼叫函數時，雖然是使用函數回傳的內部函數 
      var rt  = fn1('hellow'); 因為這句語法還在，所以外部函數並未消失，而且還可提供內部函數去「透過範圍鏈查找參數」
    
      * 執行流程的上下文棧:
        當我們執行程式時，
        *  永遠最先創建「全域執行上下文」 
        => var rt  = 「fn1('hellow')」 創建新的執行環境  
        => 然後變數被傳入到他的變數環境裡
        => 他回傳一個新的函數物件，創建後立即回傳
        => 回傳之後外部函數就離開執行上下文   
        => 回到全域執行環境，呼叫變數指向的匿名函數（並未給他名字），rt（'變數'）
        => 創建新的執行環境 (傳入變數)到記憶體 
        => 當在函數在執行程式屬性時，遇到沒有的變數時
        => 回到範圍練，外部詞彙環境，他會到函數被創造的外面一層（父層），尋找參數因為他在自己裡面找不到。直到全域環境為止

     * （永遠只有當函數呼叫時才會執行，創建新的執行環境）

     * ! 每個執行環境都有他自己的記憶體空間，變數函數都被創建在裡面，而當執行環境沒了之後記憶體空間會怎樣？
        在一般情況下,JavaScript引擎會清除他，這個舉動又稱為垃圾回收，但當執行環境結束時記憶體空間依然會存在。
     
     * 當在函數在執行程式屬性時，遇到沒有的參數時：
        回到範圍練，外部詞彙環境，他會到函數被創造的外面一層（父層），尋找參數因為他在自己裡面找不到。
        即使外部環境沒有了，離開了執行堆，內部環境依然可以參考到，父層參數的外部環境記憶體空間
        也就是說雖然外部函數已經結束，內部函數依然可以參考到他的記憶體位置，到執行環境的記憶體位置。
     
    * 函數結束了，執行環境結束了，但記憶體還在，因為ＪＳ要確定我們的函數依然可以透過範圍練中找到，雖然他已經不在執行堆了
    
    * 執行環境可以把外部的變數關住、包住，所以是內部的函數包住了外部的函數，包住那些他應該要參考到的變數，即使執行環境已經結束
    
    * 所以這個包住所有可以取用的變數的現象就稱為「閉包」。 
        我們不需要擔心他的外部環境是否還在執行，ＪＳ會確保無論我們在執行哪個函數，都能取用到他應該要取用的變數，範圍沒有改變 

*/ 
var rt  = fn1('hellow');
rt ('函數回傳的函數');