/*
 * typeof_instanceof
    * typeof
        他會告訴我們該值純值是什麼 以字串表示
         對於 函數與 陣列他都會是物件 
         對於 undefined 他就會是 字串 undefined
         對於 null 他會是 object 做壞了沒救了
    * Ａ instanceof Ｂ
        他會告述你Ａ 他是否存在 Ｂ 隱式原型鏈上  實例物件

 */
const d = function () {};
const b = [];
// 透過  Array.prototype.toString 會將 陣列內容轉換為 字串
Array.prototype.toString(b);
// 透過物件toString用 call 方法 將 this 指向b去執行 可以得到 陣列
console.log(Object.prototype.toString.call(b));
