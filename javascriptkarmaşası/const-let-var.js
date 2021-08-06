//var-let-const

//let block scope ve değişebilen değişkenlerde kullanılır.
/* let age;
console.log(age)
age = 26;
console.log(age); */

//const değişmez ifadeler için kullanılır.Yeni bir değer atayamıyoruz.
//const da bir başlangıç değeri olması gerekiyor.

/* const name = "umit";
console.log(name); */

/* let name = "Umit";
console.log(name);

name = "yasar"
console.log(name); */

//neden const kullanıyoruz?  değişmeyecek değerlerde kullanırız.
// neden let kullanırız? değişkenimizin değişmesini istediğimiz yerlerde let kullanırız.

/* let str = "";
for(let i = 0; i < 10; i++){
    str = str.concat(i)
    console.log(str);
} */



/* const myArr = [1,2,3];
console.log(myArr);
myArr.pop();
console.log(myArr);

const student = {
    name: "Umit",
    age: 26,
}
console.log(student)
student.name = "Yasar";
console.log(student); */


//var functional scope yada global scope olarak çalışır.

/* var age = 26;
console.log(age);

age = 30;
console.log(age); */

/* var x = 1;
console.log(x);

if(x === 1){
    var x = 10;
    console.log(x);
}
console.log(x); */

//LET >> BLOCK SCOPE
//süslü parantezlerin içinde bulunan her alan bir scopedir
/* let y = 1;
console.log(y);

if(y === 1){
    let y = 10;
    console.log(y)
}
console.log(y); */

/* var x = 10;
console.log(window.x); *///var ile oluşturduğumuz bir değişken window nesnesine bağlı bir property

//HOISTING
// değişkeni yukarıya alma işlemi yapıyor

//var x;
console.log(x); // undefined sonucu dönecek.
var x = 10;
console.log(x);//10


//let deki hoısted var'daki gibi çalışmıyor.

let y = 10;
console.log(y);