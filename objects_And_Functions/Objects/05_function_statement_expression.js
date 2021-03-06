/*
    * 陳述句與表達式的用法差別:
        1. 表達式
            * 表達式是一個程式碼的單位，會形成一個值。
            * 函數表達式或任何表達式，最終會創造一個值，而這個值不一定要儲存在某個變數中。
        
        2. 陳述句
            * 函數陳述句，陳述句只會做某件事。
            * 陳述句並不會返回任何值，所以稱為陳述句

        JS 因為函數是物件，所以有函數表達式，與函數陳述句。
*/ 

var a ;
// 表達式，因為等號運算子回傳了一個值，會設定該值到記憶體中
a = 3;

// 表達式，用加號運算子回傳了一個值，但並沒有用等號運算子，設定該值到記憶體中。
1 + 3
// 值可以是任何東西

// 陳述句
    // 當在if陳述句（）放進表達式，會形成一個值，而陳述句並不會返回任何值，所以稱為陳述句
    if (a === 0 ){
        console.log('is none')
    }

/*
    函數陳述句:
        當被執行時，不會返回任何值。
        這個函數會被放進記憶體，但他只是陳述句，他不會回傳任何值，直到函數被執行。
        他不會做任何事情，但是他會被提升（Hoisting），在全域執行環境的創造階段
        所以在任何地方調用都是可以的。

         1.當執行環境確定，他的名稱屬性還有程式屬性就被設定好了。
         2.所以在記憶體中有一個物件他的名稱，是函數名稱
         3.當我們呼叫程式碼的時候，他會被連接到記憶體中函數物件所在的地方。
         4.然後呼叫函數程式的部分
*/ 

    function stment(){
        console.log('a')
    }
    stment()
/*
    函數表達式：
    * 建立了一個函數物件，將它賦值給一個變數，所以變數名的記憶體中的地址值就指向函數物件。
    * 用了等號運算子，他會把物件放到記憶體中，並且指向全域變數的地址。
    * 這並不是去看函數的名稱而是，而是利用全域變數獲取到函數的地址值。
    * 匿名函數就是沒有名稱屬性的函數，但還是可以使用，他利用了指向物件地址的變數名稱。
    * 函數表達式並不會被提升，他只會提升變數
     1.所以在記憶體中有一個物件，但他並沒有名稱，但已經有了一個擁有該物件地址值的變數
       所以並不需要一個名稱去參照他，所以他是一個匿名函數。
     2.利用變數名去觸發函數 要有（）

     * 當他被執行時這裡的的陳述句會讓函數物件被創建出來，本質上他會回傳一個物件
        所以他是表達式，形成一個值，該值是一個函數對象
     var anonymouseFn = function(){
       console.log('函數表達式')
}
*/ 
var anonymouseFn = function(){
    console.log('函數表達式')
}
anonymouseFn()

// 

function log(a){
    /*
    所以參數指向了表達式裡面的函數物件地址值
    如果要執行函數表達式裡面的函數就再次調用
    */ 
     a()
}
/*
函數表達式可以創建一個物件，一個函數物件
    所以在這物件裡面也可以宣告一個函數，創造物件
    他是匿名的，但是他可以被參數使用
    把函數傳給另一個函數就像使用變數一樣
*/
// log(3)
log(
    function(){console.log('123')}
)
