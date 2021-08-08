//bir fonksiyonu nasıl çağırıldığına bağlı olarak değişen söz konusu nesnedir.
//obj.func() ----> this.obj
//this ---> global object window(global);

/* console.log(this);
console.log(this.location.href); */

//function decleration

/* function func1() {
    this.name = "umit";
   // console.log(this);
   // console.log(this.location);
   // console.log(this.location.href);
   console.log(this.age);
}
func1();
console.log(name);
console.log(this.name);

//function expression

const func2 = function () {
    this.age = 26;
   // console.log(this);
   // console.log(this.location);
   // console.log(this.location.href);
   console.log(this.name);
}
func2();
console.log(age);
console.log(this.age); */

//constructor func

/* function Person(name, surname, age) {
    const obj = {};
    obj.name = name;
    obj.surname = surname;
    obj.age = age;
    obj.fullName = function () {
        return obj.name + " " + obj.surname
    }
    return obj;
}

const umit = new Person("Umit", "Turk", 26); */


/* function Person(name, surname, age) {

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function () {
        return this.name + " " + this.surname
    }
} */

/* class Person {
    constructor(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
    }
    fullName = function () {
        return this.name + " " + this.surname
    }
}

const umit = new Person("Umit", "Turk", 26);
const ugur = new Person("Ugur", "Turk", 27);
console.log(umit);
console.log(ugur); */

/* const yasar = {
    name: "Yasar",
    age: 26,
    surname: "Turk",
    fullName: function () {
        console.log(this);
        return this.name + " " + this.surname
    },

    mother : {
        name: "Ayşe",
        age: 40,
        fullName: function () {
            console.log(this);
            return this.name + " " + this.surname
        }
    }
}
console.log(yasar);
console.log(yasar.fullName());
console.log(yasar.mother.fullName()); */

/* const ugur = {
    name: "Ugur",
    funcy: function () {
        console.log(this === ugur);
        console.log(this === window);
    }
}
console.log(ugur.funcy());

const funcy2 = ugur.funcy;
console.log(funcy2()); */

const ugur = {
    name: "Ugur",
    funcy: function () {
        console.log(this === ugur);
        setTimeout(function () {
            console.log(this === ugur);
            console.log(this === window);
        }, 2000);
    }
}
console.log(ugur.funcy());
