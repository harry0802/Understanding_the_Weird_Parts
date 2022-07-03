/*
|| 運算子 （是會回傳值的函數） 只會回傳第一個被轉換成 true 的值
*/ 

function a1 (name){

    console.log( 'hello' + mame)
}

a1('harry')
a1() 
/*
即使不傳參數 function 也能運行 但是參數的值則為 undefined 
 而 console.log( 'hello' + mame) 輸出的部分就會變成了 hello 與 字符串的 undefined （ＪＳ 強制轉型）。
 而為了避免這樣的事情發生，便可以利用（運算子｜｜） 技巧，來解決
*/ 



/*
name = name || 'stranger'
當第一個被轉換為 true 的值
成為 name

在這裡需要注意的是！
= 與 || 兩者之間的運算子的（優先權）（和相依性）。

｜｜ 優先權比 ＝ 高 會先進行運算
name || 'stranger'      相依性 ＝ l to r 

然後才會進行 ＝ 運算子 
name ='stranger'        相依性 ＝ r to l


*/ 
function a1 (name){
    name = name || 'stranger'
    console.log( 'hello' + mame)
}

a1() //stranger
a1('harry')