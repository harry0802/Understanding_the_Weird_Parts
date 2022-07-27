/*
    Reflection
    一個物件可以看到自己的東西，然後改變屬性與方法
    我們可以藉由這樣使用一個模式，extend


*/ 

const jonacena = {
    job: 'Professional Wrestling',
    BirthdayYear:1977,
    Events:'Sixteen-time world champion',
    Album: "You Can't See Me",
    fn:function(fn){
        return fn(this.BirthdayYear)
    }
}

const Batista = {
    job: 'American Actors',
    BirthdayYear:1969,
    Events:'Six times world champion',
    FamousRoles: "Drax the Destroyer"
}

const ShawnMichaels = {
    aka:'The Heartbreak Kid',
    job: 'retirement',
    BirthdayYear:1965,
    Events:'4-time World Heavyweight Champion',


}

Batista.__proto__ = jonacena
ShawnMichaels.__proto__ = jonacena

// console.log(Batista.fn(function(item){return 2022 - item }))
// console.log(jonacena.fn(function(item){return 2022 - item }))
// console.log(ShawnMichaels.fn(function(item){return 2022 - item }))

// console.log(Batista.Album)

/**/
/**/ 
/**/ 
/*
    使用 for in
    他會編歷物件每一個東西，就像他知道陣列的長度並編歷所有成員
    他會到外部環境取值，不只在物件本身，還會到原型尋找。
    所以我們可以透過 if 陳述句 來判斷 該值是否為物件的原型
    if(被編歷物件.hasOwnProperty(循環裡的宣告) ){
        當該值是物件裡的值才會進入語句
    }

    for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }

    這樣的概念可以幫助我們補足原型鏈的繼承，但不是JS內建的
    

*/

for (const i in ShawnMichaels) {
    if (ShawnMichaels.hasOwnProperty(i)) {
        console.log(ShawnMichaels[i])
        
    }
}
 

/*
    if (length < 2 || obj == null) return obj; 
    當我們傳入的物件小於二，或者物件是空的，他就會回傳物件和傳入的值加起來
*/ 
function createAssigner(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults) obj = Object(obj);
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source), 
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!defaults || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  }