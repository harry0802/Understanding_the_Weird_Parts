/*
     設定 this 關鍵字的方法
    * this 是物件的方法，哪個物件調用他他就會指向誰。
    * 所有函數都可有，call(),appiy(),bind(),方法
    * 這三個都和 this 關鍵字，以及我們傳入的參數有關 
    * 因為函數是物件，所以可以使用方法。
    * appiy(),bind() 呼叫函數，設定 this ,傳入參數。
    * bind () 創造函數的複製，設定 this，傳入預設的參數，不可改變。
    
*/
/*
   * currying = 建立一個新的函數複製，然候設定預設參數。
    在使用數學運算下很方便
    如果有個資料庫需要做多次的數學運算，我們可以有個基本函數，然後放入預設的固定參數，例用bind
*/ 

const obj = {
    surname:'王',
    fullname:'大錘', 
    /*
        透過 this 是物件的方法的特性，讓他直接指向對象裡面的變數。
    */ 
    itemNumber:function(){
        return this.surname +  this.fullname 
    }
}
/*
       * 如果在這邊使用 this 會導致在變成在全域環境尋找 itemNumber ，但全域環境並沒有，直接報錯。
       * 但是可以透過別的方法來讓控制 this
    
    * bind() :
        在裡面放入想指向的物件，bind方法會回傳新的函數。
        globalLetter.bind(放入 this 要指向的物件)，bind 會回傳新的函數物件。
        新的函數會是原本的函數的複製，加上設定 this 指向其他物件的函數。
        所以當js 看到 bind的方法時，就會默認 this 指向的是 bind 的設定值。
        所以我們在改變 js 中 this 指向。
    
    * 所以 .bind 會創造並複製任何我們呼叫的函數，無論我們傳入什麼物件給這個方法。
    * 創造並複製，然後可以告訴他 this 是什麼。
    
        const globalLetter2 = globalLetter.bind(obj)
         globalLetter2()
*/ 
/*
    * call:
     .call 也可以讓我們決定,this 是什麼。
     .call() 傳入的第一個東西是 this 要指向的東西，接下來傳入的是參數。
    
    * 跟 bind 的差別是：
      bind 創造函數的複製（並不會執行），而 call是直接執行它，然後決定 this的變數是什麼，之後是我們想要傳入函數的參數。
*/ 
/*
    * apply
      他和 call 一樣，除了他的參數必須要用[]陣列包覆。
      陣列在數學比較方便，可以實現多的數值存入
      我們可以依據使用情境去選擇，要用哪一種方法
*/ 

const globalLetter =  function (value1,value2){
    console.log(this.itemNumber())
    console.log(`我需要 ${value1} 跟 ${value2} `)
}//.bind(obj) 也可以把它放在這裡  ;

globalLetter.call(obj,'武器','藥水');

/*
    可以使用 立即呼叫函數來獲取指定的 this
*/ 
(function(value1,value2){
    console.log(this.itemNumber())
    console.log(`我需要 ${value1} 跟 ${value2} `)
}).call(obj,'頭盔','盾牌')

// function Borrowing
/*
    利用 this 指向 來使用別的物件變數
    透過物件函數 .call/.apply 來去取用別的物件，
    條件是：
    1.變數名要透過 this 調用
    2.名字要一樣
*/ 
const borrowingObj = {
    surname:'張',
    fullname:'天師', 
}
 console.log(obj.itemNumber.call(borrowingObj))

// function currying
/*
   currying = 建立一個新的函數複製，然候設定預設參數。

   透果 .bind 屬性特性，複製函數給變數，本身並不會執行
   設定 this,而後面如果繼續傳值，就是固定複製函數的參數，看傳幾個就固定幾個。
   透過變數呼叫並傳入值時，如果還有參數未被使用並賦值給該參數，如果參數全都被固定，那該變數傳入的參數變無效。
*/ 
 
function restaurant(time,Person){
    return console.log(`只剩下 ${time} 點 有位置了，有 ${Person}人?`)
}
const guest = restaurant.bind(this,'18:00'); 
guest(8)
