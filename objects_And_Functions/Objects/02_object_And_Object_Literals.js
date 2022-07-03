/*
    * 在 javascript 中做一件事情有很多方法
    * 物件實體語法:利用{}來創建對象，{} 又稱為大括號，用冒號：去間隔屬性與值。
    * 這並不是個運算子，而是當 javascript 引擎看到大括號，並且沒有帶有 if條件式 或 for迴圈時，他就會假設你正在創建物件。
    * {} 裡面：
       1.可以初始化物件
       2.可以建立屬性 
       3.可以建立方法
       4.一樣是「名稱／值」 配對。
    * 

*/ 

var obj = {
    a:'a',
    b:'b',
    c:'c'
}
console.log(obj)

var obj = new Object();
obj.a1 = 'a1';
obj.b1 = 'b1';
obj.c1 = 'c1';
console.log(obj)

/*
以上兩種方式都是一樣的
*/ 

// 對象裡還可以創建對象
var obj1 = {
    fisrstName:'Tony',
    lastName:'Alicea',
    address:{
        city : 'New York',
        state: 'ny'
    }
}
/*
    函數需要知道 obj1 的 lastName屬性 才能輸出，所以呼叫函數 傳入 obj1 對象

*/ 
function fn (obj){
    console.log('Hi ' + obj1.lastName)
}
fn(obj1)

/*
    可以同時建立函數和物件：
     * 因為 javascript 可以利用物件實體語法 (Object interal)
     * 當 ＪＳ 在處理時，他會看你的函數要傳入什麼，而讀取到大括號便知道要建立物件
       建立完物件之後便傳入物件，這與一般的呼叫函數傳入數值或字串並沒有區別。
    
     * 當傳入字串時候也代表這建立了該字串
        fn('string')

    *  所以當傳入物件的時候也代表著建立了該字串
        fn({
        fisrstName:"Mary",
        lastName:'Doe'
        }) 

*/
fn({
    fisrstName:"Mary",
    lastName:'Doe'
})

    /*
        * 利用 「成員取用運算子」與 「物件實體語法」創建了新物件
        * 能這樣使用原因：
            因為表面上看到的程式碼並不是真的被處理，而是先被 javascript 轉化成電腦能理解的東西。
        * 所以不論「物件實體語法」或「成員取用運算子」建立物件，都是一樣的對於 javascript 底層來說
          他就是建立物件到記憶體中，還有屬性與方法到記憶體中。
          所以使用者建立的語法對 javascript 來說都是一樣的並沒有差別。
    */ 
obj1.address1 = {
    city : 'New York',
    state: 'ny'
}