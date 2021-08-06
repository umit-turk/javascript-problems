//1- Shorthand Properties

/* let name = "umit", age = 26;

const myObj = {
    name,
    age,
}
console.log(myObj.name);
console.log(myObj.age); */

//2- computed property names

/* let prop1 = "name";

let myObj = {}

myObj[prop1] = "umit";

console.log(myObj); */

/* let prop1 = "name";

let myObj = {
    [prop1]: "umit"
}
console.log(myObj); */

//3) Short Method syntax

/* const person = {
    name: "John",
    surname: "Doe",
    age: 40,
    fullName: function(){
        return this.name + " " + this.surname
    }
} */

/* const person = {
    name: "John",
    surname: "Doe",
    age: 40,
    fullName(){
        return this.name + " " + this.surname
    }
}

console.log(person.fullName()); */

//4) Object Destructuring
//bir nesnenin içerisindeki değerleri değişkenlere atamak için kullanıyoruz

/* const person = {
    name: "John",
    surname: "Doe",
    age: 40,
    fullName(){
        return this.name + " " + this.surname
    }
} */

/* let myVar1 = person.name;
console.log(myVar1);

let myVar2 = person.age;
console.log(myVar2); */

/* let {name: myVar1, age: myVar2} = person;
console.log(myVar1);
console.log(myVar2);

let {name, age} = person;
console.log(name);
console.log(age); */

/* const books = [
    {
        title: "kırmızı pazartesi",
        author: "haruki Murakami",
    },
    {
        title: "şeker portakalı",
        author: "jose muro de",
    },
    {
        title: "en uzun yüzyıl",
        author: "ilber ortaylı",
    }
]

for (const {title, author} of books){
    console.log(title + ": " + author);
} */

//5) spread operator in object literals(...)
//spread operatörü sayesinde biz ya var olan bir nesnenin özelliklerini kopyalamada yada nesneleri birleştirmede kullanırız.

/* const person = {
    name: "John",
    surname: "Doe",
    age: 40,
    fullName(){
        return this.name + " " + this.surname
    }
}

let person2 = {...person};
console.log(person2); */

/* const myObj1 = {
    name: "umit",
    age: 26
}
const myObj2 = {
    job: "student",
    gender: "male"
}
let myObj3 = {...myObj1, school: "final", ...myObj2}
console.log(myObj3); */

//6) rest operator in object literals
//biz object destructuring yöntemi ile kalan özellikleri başka bir nesne olarak çekebiliriz.

/* const person = {
    name: "John",
    surname: "Doe",
    age: 40,
    fullName(){
        return this.name + " " + this.surname
    }
} */

/* const {name, surname, age} = person;
console.log(name); */

/* const {name, ...rest} = person;

console.log(name);

console.log(rest); */

//7) object values - object entries

const person = {
    name: "John",
    surname: "Doe",
    age: 40,
    fullName(){
        return this.name + " " + this.surname
    }
}

console.log(Object.keys(person));// key değerlerini array içerisinde string olarak yazdırıyoruz.
console.log(Object.values(person));// values değerlerini array içerisinde string olarak yazdırıyoruz.
console.log(Object.entries(person))//key value çiflerinin her birini array içerisnde string olarak yazdırıyor.