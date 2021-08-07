//js classes
//class veri tipi özel bir fonksiyondur.Constructor functionun yaptığının aynısını yapıyor.
//contructor function
/* function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
} */

/* function fullName() {
    return this.name + " " + this.surname
} */

/* Person.prototype.fullName = function() {
    return this.name + " " + this.surname
}

Person.prototype.friends = ["ahmet", "mehmet"]

const umit = new Person("umit", "turk", 26);
const ugur = new Person("ugur", "turk", 27);

console.log(umit);
console.log(ugur);
console.log(umit.fullName());
console.log(ugur.fullName());

console.log(umit.friends);
console.log(ugur.friends);

umit.friends.push("hüseyin");
console.log(umit.friends);// ahmet, mehmet, hüseyin
console.log(ugur.friends);// ahmet, mehmet, hüseyin */

/* function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = fullName;
} */

//CLASS DECLERATION

class Person {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.friends = ["Ahmet", "Mehmet"]
    }
    fullName() {
        return this.name + " " + this.surname
    }
}

const umit = new Person("umit", "turk", 26);
const ugur = new Person("ugur", "turk", 27);

console.log(umit);
console.log(ugur);
console.log(umit.fullName());
console.log(ugur.fullName());
umit.friends.push("hüseyin");
console.log(umit.friends);//ahmet,mehmet,hüseyin
console.log(ugur.friends);//ahmet, mehmet

console.log(Person);
console.log(typeof Person)

//CLASS EXPRESSION 

/* const Person = class {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.friends = ["Ahmet", "Mehmet"]
    }
    fullName() {
        return this.name + " " + this.surname
    }
} */