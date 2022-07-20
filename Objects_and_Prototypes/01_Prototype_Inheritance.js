/*
    繼承：
    表示一個物件取用另一個物件的屬性或方法。
    有兩個物件，第一個物件可以取用他的屬性與方法。 
*/ 
/*
      js 屬於原型繼承
      所以意味著，他有著 prototype 的概念
      所有物件都有著 原型屬性 （顯示屬性），他會參考到另一個物件 _proto_ (隱式原型)
      所有物件都會依照原型鏈去參考，而原型鏈是看 _proto_   (隱式原型)
    * 如果我們有另一個物件，他也可以指向同一個物件原型，他們共享一個屬性，但不是直接，而是透過原型鏈的觀念。
        他並不是直接擁有該屬性，而是透過原型鏈去指向他 取用

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
/*
    下面方法會大幅減緩程式碼執行速度，且容易搞混，不推
*/ 
/*
    * 透過隱式原型來取用另一個物件的屬性或方法
    
    * 如果該物件原本具備該屬性 則優先使用，如果不具備該屬性則透過原型鏈去尋找屬性。
    誰調用 this 就是誰
     fn:function(fn){
        return fn(this.BirthdayYear)
    }
}
*/ 
Batista.__proto__ = jonacena
ShawnMichaels.__proto__ = jonacena

console.log(Batista.fn(function(item){return 2022 - item }))
console.log(jonacena.fn(function(item){return 2022 - item }))
console.log(ShawnMichaels.fn(function(item){return 2022 - item }))

console.log(Batista.Album)