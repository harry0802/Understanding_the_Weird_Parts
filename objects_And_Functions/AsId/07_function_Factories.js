/*工廠創建*/


/**/ 
/**/ 
/**/ 
/**/ 
/**/ 

function makeGreeting (language){

    /*
    這裡返回的函數會指向，引用他的執行環境和記憶體位置
    即使他們的詞彙環境一樣，而且也在相同的函數裡面，但是他們還是會指向不同的記憶體位置，因為他們在不同的執行環境被創造
    */      
    return function(firstName,lastName){
        if(language === 'en'){
            console.log(`Hello ${firstName} ${lastName}`)
        }else if(language === 'cn'){
            console.log(`你好 ${firstName + lastName}`)
         }
        }

}
/*
    他們兩個都會創造新的執行環境，彼此記憶體互不相干。
    因為每一次呼叫函數都會創建一個新的執行還環境，在裡面創造的函數會指向那個執行環境，記憶體空間
*/ 
const greetEnglish = makeGreeting('en');
greetEnglish('Harry' ,'Potter' )

const  greetChinese = makeGreeting('cn');
greetEnglish('王','大錘' )