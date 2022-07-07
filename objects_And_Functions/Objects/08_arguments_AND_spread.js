/*
    arguments：
    * arguments 包含了所有值，所有我們傳入函數的參數，參數包含了所有傳入到所呼叫的函數的值
    * arguments 一般來說參數的概念，只是我們傳入函數參數的另一個稱呼而以，也可以稱為他 parameters
    * 而ＪＳ給我們一個關鍵字去包含所有名稱，所以當我們在討論參數概念時，只是在討論傳入函數的參數，
    * 特殊關鍵字 arguments 是特別的，因為ＪＳ 已經幫我們設定好了。
    * 當在 function 輸出 arguments 會出線類似 Array的 [] 他包含了所有我們傳入參數的值。
    * 他跟 Array的 [] 中括號並不一樣 他是 斜的[]， 因為 arguments 是特別的東西 ，ＪＳ設定好的
      因此又稱為 偽陣列或像陣列（array-like ）。
    * 這表示他的動作與陣列相似，看起來也很像，但他並不是個陣列他只有一部份陣列的功能。
    * arguments 可以利用中括號去操作它的值
    
    新的語法將能夠去取代他
    spread parameters
    其餘參數
    rest parameter
    https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/rest_parameters

      
*/ 
/*
    當變數提升 參數 name1,name2,name3 會被宣告
    未被傳入的參數會成為 未定義
    所以在ＪＳ可以省略傳入參數或是傳入一部份的參數
*/ 
// function f1(name1,name2 = '我也是預設值',name3){
//     name1 = undefined || '預設值';
//     console.log(name1);
//     console.log(name2);
//     console.log(name3);
//     console.log(arguments)
// };
// f1(1,2,3)

function f1(name1,name2 = '我也是預設值',name3,...arr){
    name1 = undefined || '預設值';
    // 利用if陳述句判斷 當arguments的length 為零時便不再動作
    if(arguments.length === 0){
        console.log('你一無所有')
        return
    }
    console.log(name1);
    console.log(name2);
    console.log(name3);
    // 利用中括號去搜尋它的值
    console.log(arguments[0])
    console.log(arr)
};
f1(1,2,3,4,5)