"use strict";
/*
 * 要如何設定 prototype(顯示原型)
   當我們使用函數建構子時就已經設定好原型了
 
 * 當我們建立了函數會有 名稱屬性與程式屬性 還會有一個 construcotr （建構子）
   js中 函數就是物件，他會有一些屬性
   1. Name 函數可以匿名
   2. 程式屬性 函數可以被呼叫執行 Incocable()
   3. 所有函數都有 prototype 他是從空物件所產生的
     * 除非我們將函數作為函數建構子來使用，否則他只會待在那，用不到
  ˋ  * 一旦我們使用到 new 運算子呼叫函數，他就有意義
     * 當我們用函數來建立物件這種特殊用途時原型屬性才會用到

  * 當我們透過 函數的 prototype 傳入屬性，函數的「實例物件」也能透過＿proto＿尋找到該屬性
    所以「實例物件」＿proto＿ ＝＝＝  函數的 prototype
    當建構子沒有該屬性就會透過 ＿proto＿ 去尋找

  * 所以所有用函數建立的「實例物件」都可以透過 函數的prototype 去增加屬性，方法
    而「實例物件」都可以透過 ＿proto＿ 去使用

  * 可以利用 把屬性在函數建構子被設定，因為他們常常是不一樣的值，而方法放在 prototype 裡面
    雖然說我們也可以把方法放在「實例物件」，但是出現會造成佔據大量記憶體的問題
    同樣的方法會被創建多次，但是放在 prototype 只會有一個 。
  
  * 以效能來說 將屬性、方法放在 prototype較好，但是因為屬性需要不一樣所以需要放在函數
    但是方法就可以是一樣
   

  * 原型中的函數建構子，我們可以建立物件，然後原型就已經幫我們設定好了，我們只要新增屬性、方法，就能讓所有「實例物件」取用到
 */
let Preson = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};
Preson.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
const hanlin = new Preson("Adam", "hanlin");
console.log(hanlin.getFullName());

console.log(hanlin);
