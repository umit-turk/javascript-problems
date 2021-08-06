//prototype nedir hemen hemen tüm nesneler başka bir nesneden türetilerek oluşturulur.Bu bir önceki nsneyede protoype denir.

/* const person = {
    name: "john",
    surname: "doe",
    age: 26,
    fullName: function(){
        return this.name + " " + this.surname
    }
}
console.log(person);
console.log(person.name);
console.log(person.fullName());
//console.log(person.job);
console.log(person.toString());
console.log(person.hasOwnProperty("name")); *///bizim yazdığımız person nesnesi prototype olan object nesnesinden hasownproperty metodunu inherit ediyor.

// OBJECT + name, surname, age, fullName() -----> person

/* const myObj = {};
console.log(myObj);
console.log(myObj.toString()); */

// OBJECT ---> myObj

/* function Person(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.function = function(){
        return this.name + " " + this.surname
    }
} */

/* const umit = new Person("Yasar", "Turk", 26);
console.log(umit); */

// OBJECT + name, surname, age, fullname() ----> Person ---> umit

/* console.log(umit.toString());
console.log(umit.hasOwnProperty("age"));
console.log(umit.__proto__); */

/* const yasar = new Person("Ahmet", "Can", 35);
console.log(yasar);
yasar.job = "student";
console.log(yasar);
console.log(yasar.toString()); */

//OBJECT + name, surname, age, fullname() ---> Person + job -----> yasar

/* yasar.toString = function(){
    return "Umidooo"
}
console.log(yasar.toString()); */

/* function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.fullName = function(){
    return this.name + " " + this.surname
}

Person.prototype.surname = "Turk"

const ahmet = new Person("Ahmet",  35);

const umit = new Person("Umit",  26);

console.log(umit);
console.log(ahmet); */

const person = {
    name: "XXXXX",
    surname: "YYYY",
    age: 0,
    fullName: function(){
        return this.name + " " + this.surname
    }
}

const umit = Object.create(person)
console.log(umit);
console.log(umit.name);

umit.name ="umit";
console.log(umit);
console.log(umit.age);
umit.age = 26;
console.log(umit);
console.log(umit.hasOwnProperty("age"));

console.log("surname" in umit);

