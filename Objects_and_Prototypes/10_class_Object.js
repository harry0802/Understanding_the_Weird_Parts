/*
 * 在 js中 class 關鍵字就是物件，然後我們從這個物件創立新物件
 * 設定class prototype 
   * extends 關鍵字 
    設定 class.__proto__
   
     * super 關鍵字 
        他會呼叫我們原型物件的建構子，所以我們可以傳入初始值到原型鏈
        然後我們可以透過 Object.create 修改隱藏數屬性方法
 */

/*
    * syntactic sugar 
        表示很多方法可以做到一件事情，但其實做出來的東西是一樣的
*/

class preson {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    return firstname + lastname;
  }
}

const john = new preson("john", "doe");

console.log(john);
