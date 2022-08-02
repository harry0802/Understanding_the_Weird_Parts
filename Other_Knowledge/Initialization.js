/*
 * 初始化
     使用簡單的結構 有效的初始化資料，這也對作出原型有幫助
     當我們打造一些軟體還沒串接到資料庫或 ＡＰＩ
     我們可以創建出假資料提供介面使用
     當我們準備好也可讓物件得到資料，透過api 拿到 jason 資料
     而我們的介面也準備好面對此類型的資料，我們可以利用這樣去測試資料
 */

const people = [
  {
    firstname: "john",
    lastname: "doe",
    address: ["111 main st", "222 THird st."],
  },
  {
    firstname: "jane",
    lastname: "doe",
    address: ["333 main st", "444 THird st."],
    greet: function () {
      return "Hellow";
    },
  },
];
