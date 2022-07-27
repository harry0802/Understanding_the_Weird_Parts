// "use strict";
/*
    * 當我們函數使用 new 創建一個函數的實例物件
        需注意的是，當我們忘記使用 new 關鍵字，會導因為，new 沒有創建一個物件，函數裡面不會自動回傳東西
        因爲執行環就創建時，this 無法被指向給空物件（根本沒有） this 是物件自動產生的關鍵字 
         
    * 所以 :
        preson = Preson("李", "小龍");
        preson = undefined
        這會導致一連串的錯誤，例如使用隱式原型來呼叫函數

    * JS根本不在乎你是否有沒有用 new 關鍵字，所以他還是會執行函數,然後給你一堆錯誤
    
    * 預防：
        可以把函數字首使用大寫，這樣出現問題時會比較好發現
        instanceof 可以檢查，「左邊的值」是不是「右邊的值」，他將返回布林值。
*/
let firstName = 123;
let fullName = 123;

const Preson = function (firstName, fullName) {
  this.firstName = firstName;
  this.fullName = fullName;
};

Preson.prototype.calcName = function () {
  return `${this.firstName} ${this.fullName}`;
};

const preson = new Preson("李", "小龍");
console.log(preson);

console.log(preson.calcName());

console.log(preson instanceof Preson);
