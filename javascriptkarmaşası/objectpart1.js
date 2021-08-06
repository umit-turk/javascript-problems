//objects

//property --method:bir nesne ile ilişkili fonksiyon
//Neden bir nesneye ihtiyaç duyarız?Biz verilerin  hepsinin bir arada bulunmasını isteriz ve bir nesne içerisinde birleşik bir şekilde oluştururuz.

/* const person = {
    name: "John",
    surname: "Doe",
    age: 40,
    languages: ["Turkish", "English", "Spanish"],
    fullName: function(){
        return this.name + " " + this.surname
    },
    address:{
        city: "Bursa",
        district: "Nilüfer"
    }
} */

//Object Literal

/* const person = {
    name: "John",
    surname: "Doe",
    age: 26,
    fullName: function(){
        return this.name + " " + this.surname
    },
}
console.log(person);
//dot Notation 
console.log(person.name);
console.log(person.fullName());

person.job = "Student";
console.log(person);
console.log(person.job);

//bracket notation
console.log(person["name"]);
console.log(person["fullName"]());
console.log(person["na"+ "me"]); */

/* const person = {
    name: "John",
    surname: "Doe",
    age: 40,
    languages: ["Turkish", "English", "Spanish"],
    fullName: function(){
        return this.name + " " + this.surname
    }
}

person.address = {}

console.log(person);

person.address.city = "Bursa";

console.log(person); */

//CONSTRUCTOR --> YAPICI
//Bize nesne dönen bir yapıcı fonksiyon oluşturduk.

/* function Person(name, surname, age){
    const obj = {};
    obj.name = name;
    obj.surname = surname;
    obj.age = age;
    obj.fullName = function () {
        return obj.name + " " + obj.surname
    }
    return obj;
} */

//this current object'e referans gösterir.

/* function Person(name, surname, age){
   
    console.log(this);

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function () {
        return this.name + " " + this.surname
    }
    console.log(this);
}
//new anahtar kelimesi yeni bir boş nesne oluşturur.
const person1 = new Person("John", "Doe", 26);
console.log(person1)
const person2 = new Person("Umit", "Turk", 50);
console.log(person2);  */

//Object Constructor 

/* const person1 = new Object();
person1.name = "Yasar";
person1.surname = "Turk";
person1.age = 26;
person1.fullName = function () {
    console.log(this);
    return this.name + " " + this.surname;//this o anki güncel objeyi referans alır.
}
console.log(person1);
console.log(person1.fullName()); */

//Object.create() ile nesne oluşturmak
//yeni bir nesne oluştururken eski nesneyi kullanacağız.

const person = {
    name: "john",
    surname: "doe",
    age: 26,
    fullName: function(){
        return this.name + " " + this.surname
    }
}
console.log(person);

const arin = Object.create(person)
arin.name = "Arin";
arin.surname = "Software";
arin.age = 5;

console.log(arin);
console.log(arin.fullName())