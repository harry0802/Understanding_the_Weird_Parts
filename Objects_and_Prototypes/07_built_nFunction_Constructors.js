/*
 * 內建的函數建構子（實例物件）

 * 有些函數和函數原型已經存在。
 
 * 當我們使用 new 任何一個方法時，其實都在創建物件，而他的隱式原型屬性，就會是 該new 純值 的顯示原型屬性。
   let a = new Number 
   a.__proto__ === Number.prototype //true
   所以我們可以透過「隱式原型屬性」去尋找到 Number「顯示原型屬性」的方法。

   * 這些內建的函數建構子，雖然看起來好像再創建純值，但其實並不是，他們只是在創建物件。
   * 在某些情況下，ＪＳ會知道我們要的是物件而不是純值。
   這個純值就只是個值，他們沒有屬性或方法,但ＪＳ把它放進有許多屬性或字串的物件中，在讓我們去使用它。
    ‘hellow’.length  === new Sering(‘hellow’).length
    --------------------------------------------------
    String('hellow').length === new String('hellow').length //true
    'hellow'.__proto__ === String('hellow').__proto__  //true

   * 所以有時候 js 會把「純值包在物件中給你使用」，這樣我們可以取用我們可能需要的屬性與方法
   * 所以當我們使用 new 的方法時，記得是創建物件
   * 必須注意到的是，別覆寫到已經存在的屬性或方法。
   * 但是這種方法可以有效的改善程式，藉由了解函數建構子以及其原型屬性，
     與編輯內建函數建構子的原型屬性
 */

/*
* 把 String 的原型設置一個 isSingleWord 函數
    讓所有的字串都可以透過「__proto__ 」使用到這個方法
    例如 ：大家都可以用到 to String 這樣
*/
String.prototype.isSingleWord = function (Word) {
  if (this.includes(Word)) {
    console.log("Voldemort : You are already dead 💀");
  } else {
    console.log("Harry Potter: Shut up !");
  }
};
const Person = function (fullname, say) {
  this.fullname = fullname;
  this.say = say;
};
let LunaLovegood = new Person("LunaLovegood", "He Who Must Not Be Named?");

let b = "Voldemort?";
LunaLovegood.say.isSingleWord("Voldemort");
b.isSingleWord("Voldemort");

// 使用數值
Number.prototype.ispostive = function () {
  return this > 0;
};
//  123.ispostive()///error
const aa = new Number(123);
aa.isSingleWord();
/*
 * 雖然 js 會自動轉換字串為物件，但是他不會自動轉換數值為物件
 * 但是我們可以使用 new 來創建一個 Number 的實例物件
 * 他的 __proto__ 會指向 Number.prototype
 * 但是他並不是數值，而是一個被物件給包裹著的數值，增加了許多功能
 */

// 地雷區
/*
  * 內建函數建構子在處理純值（布林值，數值，字串）時很容易出現問題
  
  * Number !== new Number
    當我們使用純 Number的值 與 new Number的值放一起，乍看之下他們一模一樣
     但使實際上 new Numbe 它是一個物件 由new創建出來的物件,其中包含了數值而已
     所以這在比較上會出現問題，甚至如果別人接手如果他不懂會浪費很多時間

  * new Number 所建立的純值，並不是真正的純值
     所以並不推薦用 new Number 創建數值，用真正的純值。
     若我們真的需要使用到它，就必須真正清楚我們在做什麼。

  * 關於 date 函數建構子
    快樂的使用 資料庫 moment.js
    裡面有很多函數來處理日期，與日期運算
*/
