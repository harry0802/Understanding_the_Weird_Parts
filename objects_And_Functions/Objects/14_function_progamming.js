/*
    JS 有一級函數，所以代表著我們可以實作函數程式設計，表示我們把程式碼都當作函數
*/
/**/ 
/**/  
/**/ 
/**/ 
/**/
import _ from "../../underscore-esm";

 

// function arr_saharedUse(arr1,arr2){
//     const firstGroup = arr1;
//     const secondGroup = arr2;
//     let i;
//     for(i = 0 ; i < firstGroup.length; i++){
//         secondGroup.push(firstGroup[i] * 2 )
//     };
//     console.log(secondGroup)
// }
// arr_saharedUse([1,2,3], [])_
function arr_saharedUse2(arr,fn){
    const secondGroup2 =[];
    let i;
    for(i = 0 ; i < arr.length; i++){
        secondGroup2.push(fn(arr[i]))
    }
    return secondGroup2
}

/*
    可以透過程式設計使我們用同一個函數呼叫並傳入，不同的方法運算
    我們可以重複利用函數做不能事情，只要傳入函數。
    用一級函數，分割程式碼，用更簡潔的方式
*/


//  使用一個函數用來檢查，數組是否有大於限定值。
/*
    方法：
    * 使用 bind()
   1. 方法
    * 建立一個函數使用傳入來設置兩個參數，因為我們一開始傳入的參數只有一個值，為了要解決獲取不到第二個值的問題，可以使用 bind()來固定一個參數。
        所以當我們傳入參數時就需要使用，bind() 並加上限定的參數值
   2.方法
    * 創建一個接收限制值的函數，他會回傳一個函數，使用傳參 arr,Length，再利用 bind 返回一個函數的複製，並傳入預設參數，所以當我們
        執行該函數時，他就會返回一個已經用 bind 處理好的函數物件。
       
     function(arr,Length){
    return  Length > arr}
*/  
//使用 bind() 呼叫。並在呼叫時使用限定值
const checkLength = function  (arr,Length){
   return arr > Length
}

//  使用 bind() 限定值，並在內部函數使用限定值
// function (Length) 這裡只會傳給 .bind(this,Length)
const checkLength2 = function (Length){
   return function(arr,Length){
    return  Length > arr
}.bind(this,Length)
};

const checkLength3 =  function (Length){
    return function(arr){
        return   arr > Length
    }.bind(this,Length)
 }


 const rt = arr_saharedUse2([2,4,6],function(item){ return item * 2});
const rt2 = arr_saharedUse2([2,4,6],function(item){ return item === 2});
const rt3 = arr_saharedUse2([2,4,6],function(item){ return item + 'hellow'});
const rt4 = arr_saharedUse2([2,4,6],function(item){ return item - 1});

const rt5 = arr_saharedUse2([2,4,6],checkLength2(5));
const rt6 = arr_saharedUse2([2,4,6],checkLength3(5));

console.log(checkLength2(2))

console.log(rt,rt2,rt3,rt4,rt5,rt6)
console.log(rt)




