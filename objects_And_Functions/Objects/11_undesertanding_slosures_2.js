/*
      在外部函數裡面只是創建了內部函數並放在陣列裡(並沒有執行)
      i 會被 hoisting
      創建一個變數將它指向了，呼叫外部函數返回的結果 「透過 return」（帶有函數的數組）
      利用變數呼叫 數組執行函數
      數組的函數去取用外部函數記憶體的變數值 （雖然外部函數的執行環境不在，但是記憶體還在）
      而值是透過 for 循環 3 次的值，所以值是 3
      所以數組裡面所有要透過外部函數取用的該值都會是 3
*/
/**/ 
/**/ 
/**/ 
/**/ 
/**/ 
/**/ 
/**/ 

function fn1(){
   var arr , i ;
   arr = [];
   for(i = 0 ; i < 3 ; i ++ ){
      arr.push(function(){
         console.log(i)
      })
   }
   return arr
};

const arrFn =  fn1();
arrFn[0]();
arrFn[1]();
arrFn[2]();
console.log('-------------------')

/*
   利用 區域變數 let
   讓他每次循環時都是新的變數，這會在同一個執行環境中有不同記憶體位置
   所以每當函數被呼叫，每次都會對應到不同記憶體的位置。

*/ 

function fn2(){
   var arr , i ;
   arr = [];
   for(i = 0 ; i < 3 ; i ++ ){
      let result  = i;
      arr.push(function(){
         console.log(result)
      })
   }
   return arr
};

const arrFn2 =  fn2();
arrFn2[0]();
arrFn2[1]();
arrFn2[2]();

console.log('-------------------')

/*
   沒有 let 的做法
    為了保存 i 的值，我們需要將不同的執行環境，放進陣列。
    所以當我們的環圈執行的時候，需要更大的範圍包住現在的值。
    獲得執行環境唯一的方法就是執行函數，利用ＩＩＦＥ 立刻創造執行環境，利用傳入參數保留參數
    所以每次進入迴圈時，他都會立刻執行函數，藉由push()的表達式，然後會返回一個函數結果，傳入到數組
    因為匿名函數，所以我們得到了，依照迴圈的次數，對應的執行環境數量，並且都個帶有各自的值。
    然後透過全域環境去調用它，透過閉包我們的輸出的參數，可以去訪問到外部匿名函數執行環境的記憶體的參數。
      
*/ 


function fn3(){
   var arr , i ;
   arr = [];
   for(i = 0 ; i < 3 ; i ++ ){
      arr.push(
         (function(result){
            return function(){
               console.log(result)
            }
      }(i))
      )
   }
   return arr
};

const arrFn3 =  fn3();
arrFn3[0]();
arrFn3[1]();
arrFn3[2]();