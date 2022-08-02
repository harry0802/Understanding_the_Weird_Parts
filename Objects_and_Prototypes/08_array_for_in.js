/*
 * 陣列是物件，所以我們可以把他當作一個物件處理
 *
 */
Array.prototype.calcname = function () {};

const arr = ["a", "b", "c", "d"];
// for (const i in arr) {
//   console.log(i + " : " + arr[i]);
// }

for (let i = 0; i < arr.length; i++) {
  console.log([i] + ":" + arr[i]);
}

/*`
* 
得到
0 : a
1 : b
2 : c
3 : d

因為陣列就是物件
0123 其實是名稱，名稱與值的配對，所以我們可以用中括號去使用它。
但是需要注意的是，假設我們今天在 array的原型增加了一個方法
而我們創建的 array 他的隱式原型 會指向 Array 的原型對象
如果我們使用 for..in 就會導致他連原型對象都編歷，結果就會得到我們不需要的結果

不過如果我們使用一般的 for loop 就不會有這個問題

所以我們需要避免這樣的問題，因為array 成員就是被增加的屬性
*/
