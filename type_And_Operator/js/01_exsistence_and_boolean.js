// js 是動態型別的轉換 才會有了強制轉型的特性
/*
*/

// 當這些東西都不存在就會被轉成 false
Boolean(undefined); // false
Boolean(null)// false
Boolean('')// false


/*
在 if陳述句() 裡的東西會嘗試進行轉換 true or false 
所以 if() （）裡a並不重要，而加上{}後 （）會進行檢查並轉換為 boolean值
所以當 a 為false，此時 if陳述句()會不成立，因為 a 不存在 。
*/
/*
因此可以利用ＪＳ強制轉型的特性，來去檢查當下的變數是否有值，
一個不是 undefined，null，'' 的值

！注意：
0值也是 false / 0並非不存在，而是一個有效的值。
所以當變數有 0值的時候 就會出問題
因為 if(a) 會強制轉型 0 為 false
*/
var a ;
if(a){
console.log('something is threr.')
}


/*
此時可以利用運算子來避免
！注意：運算子的優先權和相依性

此時 (a || a === 0) 
｜｜ 優先權比 === 高 會先進行運算

 最後判斷會是 false || ture

此方式利用 ＪＳ 強制轉型的模式來檢查該值是否存在
*/ 
var a ;
if(a || a === 0){
console.log('something is threr.')
}
