/*
    當函數呼叫時發生了什麼事？：
    * 當函數呼叫時會創建新的執行環境
    * 每個執行環境有一個自己的變數環境，也就是被創造在函數裡面的變數所在，他可以被參考到外部環境，外部詞彙環境，也就是物理所在
      他可以隨著範圍鏈一路往下找
    * 也就是說我在函數裡面使用一個變數，而他在函數環境中沒有，他就會往外找這個變數或函數直到全域環境為止。
    * 執行環境被創造函數被執行，js 會給我們一個不曾宣告過的東西 This變數， This會指向不同的物件，一個不同的東西依據函數如何被呼叫的
      在某些情況下 this 會依據函數如何被呼叫而改變，js 會決定 this 應該指向別的東西。
    * this 關鍵字是特別的物件或是其他東西，依據函數在何處被呼叫而決定 
      
    * 在嚴格模式下，this 值會在進入執行環境時建立並維持該狀態。因此，下例的 this 預設值是 undefined：
        所以在嚴格模式下，如果 this 沒有定義到執行環境內，其預設值就會是 undefined。
    
*/

/*
        * 當呼叫函數時 就表示了執行程式屬性，也就是函數裡面所有的程式
           而他首先做的事情就是創建執行環境，其中一部分就是創造 this 關鍵字
        * 而當執行函數時 this 在執行環境裡會變成什麼？
           依然會指向全域對象，不論是函數陳述句或是函數表達式都一樣，this 都會指向同一個位址（全域物件）。

        
    */
/*
            * 透過 this 在全域物件裡連接一個變數名，所以在呼叫之後可以 console.log(newvariabal)。
               因為 this 已經被創造，所以可以使用點運算子，連接一個新的變數到全域物件，
            * 任何連接到全域物件的的變數都可以這樣參考到他 console.log(newvariabal) 不需要點運算子。



        */
function a() {
  console.log(this);
  this.newvariabal = "a";
  console.log(newvariabal);
}
a();
console.log(newvariabal);

var b = function () {
  console.log(this);
};
b();

/*
            透過對象方法使用 this :
            每當函數被呼叫時就會創建新的執行環境，由 js 決定 this 指向誰
            當函數就是連結到物件的方法時，this 該物件，因為方法連接到了物件 this 就會指向包含他的物件。
            所以當在對象裡面的方法 利用 this創建新的屬性時 等同於就在對象裡面創建了新的屬性。
        */

/*
                     * this.newvariabal = '我從函數裡面創建的啦' // 用 this 改變這個包含方法的物件 
                     * this.name = newname 這裡的名稱屬性被等號運算子創造新增到全域物件
                      var a2 = function(newname){
                        this.name = newname
                    }
                    表示 var a2 裡面的函數他的 this 指向了全域物件，即時他在一個我們創建的物裡面。
                    * 遇到這種情況:
                      1.就要確定我們指向的是對的物件。
                      2.this 沒有讓我們出錯。
                      3.了解物件是用 by reference 設定
                        可以在函數裡面的最前面預先給 this 一個變數，讓他們都指向與 this 同一個記憶體位址
                        而目前的 this 指向的會是外層的物件，而當我們使用 this 的時後都改成使用 this的變數
                        那麼即使在函數裡面創建的函數，使用 this 的變數也能對應到外層的對象。
                        這樣就不需要考慮是否指向對的物件。
                      4. 因為子函數裡面沒有宣告 this 的變數 所以會透過 scope chain 去往外尋找 
                            子函數的物理位置在父層函數，所以他會到外部環境尋找直到找到，或者到全域環境為止
                */
// var obj = {
//     name : 'name',
//     a1 : function(){
//         console.log(this)
//         this.newvariabal = '我從函數裡面創建的啦'
//         var a2 = function(newname){
//             this.name = newname
//         }
//         a2('我想改變成 this.newname')
//         console.log(this)
//     }
// }
var obj = {
  name: "name",
  a1: function () {
    var self = this;
    console.log(self);
    this.newvariabal = "我從函數裡面創建的啦";
    var a2 = function (newname) {
      self.name = newname;
    };
    a2("我想改變成 this.newname");
    console.log(self);
  },
};
obj.a1();
