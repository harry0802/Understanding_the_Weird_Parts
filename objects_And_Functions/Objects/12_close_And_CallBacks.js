
/**/ 
/**/ 

/*
    * setTimeout( , 設定毫秒):
       當需要做某件事情時讓他延遲發生

*/
/*
    * 這裡使用到了函數表達式，閉包:
       setTimeout 接收了一個函數物件，因此這是使用了 js 的一級函數（匿名函數表達式）。
       所以我們傳入了函數物件，與另一個參數是停止時間。
       當 sayHiLater 結束後 setTimeout 在瀏覽器內數秒，並等待設定時間過後，引擎會看是否有函數要執行。
       當在執行時發現函數內有該執行環境沒有的變數，則透過閉包去取用（從範圍練找）。
         
    * setTimeout 裡面的匿名函數做事，在我們執行 setTimeout 函數時，把匿名函數給了 setTimeout 函數
       這種行為稱為 回乎（callback），回呼函數
       
    * 也就是當我們結束後執行另一個函數，
    
    * 即使執行環境不在記憶體空間還是存在 。
    
 
*/ 
function sayHiLater(){
    let greeting = 'Hi';
    setTimeout(function(){
        console.log(greeting)
    },3000)
}

sayHiLater()



/*
    * 回呼函數，或回調函數：
        當某個函數執行完，我們給他執行的函數
        所以我們可以呼叫一個函數，然後再給他一個函數，之後當它結束後，該函數會回呼我們給他的函數。
*/ 

function animal_Congress (Animals){

    console.log(`接龍遊戲！ 請接～ `)
    Animals()
}

animal_Congress(
    (function(){
        console.log('獅子')
    })
)
animal_Congress(
    (function(){
        console.log('子孫')
    })
)
animal_Congress(
    (function(){
        console.log('孫女')
    })
)
animal_Congress(
    (function(){
        console.log('女人')
    })
)

function a(){
    var myvar = 2;
    b()
};

function b (){
    console.log(myvar);
}


