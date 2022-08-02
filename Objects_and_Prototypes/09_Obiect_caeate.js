/*
 * Obiect_caeate
 * 另一種建立物件的方式
 * 純粹的物件繼承，沒有建立新物件的概念
   從現有的物件在創建出新的物件，
   如果要定義新物件，就要用一個物件作為其他物件基本型態，然後就可以複寫，隱藏屬性和方法
 */

import { object } from "../underscore-esm";

const person = {
  firstname: "Defalut",
  lastname: "Defalut",
  greet: function () {
    return `hi ${this.firstname}`;
  },
};
const Harry = Object.create(person);

Harry.firstname = "micky";
Harry.age = 18;
console.log(Harry, Harry.greet());

/*
 * Obiect.caeate 會用他的原型建立空物件
    而他的原型就是我們傳入 caeate（）的東西
    他的特性是我們可以複寫任何東西，只要新增屬性方法到被建立的物件就好
 */

/*
    * polyfill
    是引擎缺少的增加功能到程式中
    利用程式檢查咧覽器是否支援這個功能
*/

if (object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error(
        "Object.create implementation" + "only accepts the first parameter"
      );
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}
