/*
    * 重載函數：
      讓同一個函數，能擁有不同數量的參數， 但在ＪＳ不行，因為在ＪＳ函數就是物件。
    
    * 用其他方法調用函數:
      當不想每次都要傳入條件
      利用邏輯運算，在函數裡來決定輸出值的值是什麼，
      利用預設值 如果該值是數值則返回 ture
      再利用if陳述句，判斷當數值大於或等於18時輸出值，否則書另一個值。
      在創建一個函數，用那些被傳入 fn 函數的特定預設參數
      並在函數裡面調用 fn的函數（需要帶上參數） 
      所以我們可以不用考慮if判斷值，可以直接呼叫不同函數



*/ 
function fn(name , gender , age){
    age = age || Number;
    if(age >= 18){
        console.log('嗨 '+ name  + gender)
        return
    }else{
        console.log('滾犢子')
    }
};

function fn1(name,gender){
    // 這裡會幫我們傳入要判斷的值
    fn(name , gender ,18)
};
fn1('bull ','女 ');

function fn2(name,gender){
    fn(name , gender ,16)
}
fn2('王大錘', '直男')