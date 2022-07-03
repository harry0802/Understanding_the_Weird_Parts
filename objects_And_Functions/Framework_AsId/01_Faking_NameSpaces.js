/*
     * 命名空間：
      * 在現代的程式語言，命名空間是變數和函數的容器，通常這用於變數和函數的名稱分開。
      * 而問題是 javascript 並沒有命名空間，因爲物件本質 javascript 本身並不需要命名空間。
      * 可以利用物件來達到一個偽命名空間，

*/ 
/*
    兩者都是全域環境下，相同名稱的變數名，並覆蓋
    命名空間可以有個多個容器裝著變數名，他們是相關的方法和屬性。
    javascript 並沒有命名空間，為了避免這樣的衝突，可以藉由建立一個物件，成為屬性的容器，而方法則是我們想要的東西。
    可以利用這樣確保在共同開發時，你在寫函數的時候，不會與別人的命名空間有衝突。

*/
var saySomething = '你好';
var saySomething = 'Hello';

var Chinese = {
    relax:'放鬆',
    saySomething: 
    {
        Hello:'你好',
        morning:'早安'
    }
};
var English = {
    saySomething :'Hello'
}
// 他們不會互相衝突，也不會互相複寫
console.log(Chinese.saySomething)
console.log(English.saySomething)

// 還可以深入的去選擇句子

console.log(Chinese.saySomething.morning)
