//Fonksiyonlar

// Function Declaration = Function statement

/* console.log(square(5));
function square(num){
    return (num * num); 
}
square(5);//5 i argüman olarak veriyoruz () -> invoke etmek için yani çalıştırmak.
console.log(square(5)); */

//Function declaration --> Hoisted olarak çalışır.hoisted: js engine tarafından js dosyası çalıştırılmaya başlandığı zaman değişkenler yukarıya doğru çıkarılmaya çalışılır.


//Function Expression eğer biz function decleration'u bir değişkene atıyorsak fnction expression oluşturuyoruz.

const karesi = function (num) {
    return num * num ;
}
console.log(karesi);
console.log(karesi(5));

//neden function expression function decleration dan daha fazla kullanılır? biz bu durumda bir fonksiyona bir değişken olarak davranabiliriz yani bir değişken bir fonksiyona atandığı zaman buna first-class function deriz


/* const myArr = [6, "Umit", function() {console.log("Array Element");}]
myArr[2]();

const myObj = {
    age: 5,
    name: "Arin",
    func: function() {console.log("Object Element")}
};
myObj.func();

console.log(20 + (function(){return 10;})())//IIFE */


//function expression is not hoisted
/* console.log(square);
const square = function(num) {
    return num * num
} */

//function expression can be anonymous, function expression is not hoisted.

//FIRST-CLASS FUNCTIONS DEVAM
//first class functionsların en büyük avantajlarından bir tanesi biz bir fonksiyonu başka bir fonksiyona argüman olarak alabiliriz diğer avantajı biz bir fonksiyonu başka bir fonksiyonun return ifadesi olarak 

/* const addFive = function(num, func){
    console.log(num + func());
}
addFive(10, function(){return 5;}) */

/* const myFunc = function(num){
    return function toDouble(){
        console.log(num * 2);
    }
}
const result = myFunc(7);
result(); */

//IIFE -> Immediately Invocable Function Expression. Bir fonksiyon çalıştırıldığı zaman çalıştırılmasını isteriz
//Neden IIFE yapılarına ihtiyaç duyarız?
const sum = function(){
    console.log(5 + 12);
}();

(function(){
    console.log(5+2);
})();

//fonksiyonlarda birer nesnedir!!!!!!!!
function kare(num) {
    return num * num
}
console.log(kare.name);


