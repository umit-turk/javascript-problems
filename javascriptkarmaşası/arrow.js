/* Arrow Function */
//Normal fonksiyon this'i içeriğe göre arrow functionun kendine ait bir this'i yok!!!!!!!!

//Func Decleration
/* console.log(square(4));
function square(num) {
  return num * num;
}

//func expression

const kare = function (num) {
  return num * num;
};
console.log(kare(2));

//Arrow Function Expression

const kare2 = num => num * num;
console.log(kare2(8)); */

/* window.name = "ümit";

function tellName() {
    console.log(this);
    console.log(this.name);
}
tellName(); */

/* const person = {
    name: "yasar",
    tellName: function(){
        console.log(this);
        console.log(this.name);
    }
}
person.tellName(); */


/* window.name = "ümit";

const tellName = () => {
    console.log(this);
    console.log(this.name);
}
tellName();

const person = {
    name: "yasar",
    tellName: () => {
        console.log(this);
        console.log(this.name);
    }//arrow function'un kendine ait olan bir this'i yoktur bu yüzden dışarıdan alır.
}
person.tellName(); */

/* window.name = "umit";

const person = {
    name: "yasar",
    tellName: function(){
        console.log(this);//person
        console.log(this.name);//yasar

        setTimeout(function(){
            console.log(this);//global
            console.log(this.name);//umit
        }, 2000);
    }
}
person.tellName(); */

/* window.name = "umit";

const person = {
    name: "yasar",
    tellName: function() {
        console.log(this);//person
        console.log(this.name);//yasar

        setTimeout(() => {
            console.log(this);//person
            console.log(this.name);//yasar
        }, 2000);
    }
}
person.tellName(); */

//constructor function arrow function olarak yazamayız.
/* const Person = (name, surname, age) => {

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function () {
        return this.name + " " + this.surname
    }
}

const person1 = new Person("john", "doe", 26);
console.log(person1); */

//arrow fonksiyonları bir nesnenin metodu olarak kullanmak sıkıntı oluşturabilir.

/* window.year = 100;

const myObj = {
    year: 2020,
    showYear1: function(){
        console.log(this.year, this);
    },
    showYear2: () => console.log(this.year, this)
}
myObj.showYear1();
myObj.showYear2(); */

//CALL: bir fonksiyonu veya metodu ilgili olduğu nesneden farklı bir nesnede kullanmamızı sağlar.

window.name = "ugur"
window.grade = 100;

const student = {
    examResult: () => {
        return this.name + " " + this.grade
    }
}

const student1 = {
    name: "umit",
    grade: 80
}
const student2 = {
    name: "yasar",
    grade: 60
}
console.log(student.examResult.call(student1));
console.log(student.examResult.call(student2));