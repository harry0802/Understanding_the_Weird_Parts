/*
    陣列是包含許多東西的集合，陣列可以被宣告
    宣告 New Array
    或者是陣列實體語法
*/ 
var a = new Array;
var a = [
    1 , 
    {
        a:'bull',
        b:'b'
    },
    // 函數表達式
    function(name){
        var sayhi = 'hello ';
        console.log(sayhi + name);
    }
    ,
    '字符串'
    
]
// 用陣列呼叫函數 並傳送函數的參數，而參數使用陣列裡面的對象名稱

a[2](a[1].a)

/*
    陣列可以包含任何東西，我們可以參考他們甚至包含函數。
*/ 