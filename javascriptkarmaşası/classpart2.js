//class decleratıon
//contructor metodu iki tane işlev görüyor birincisi hafızada yeni bir tane obje oluşturuyor.2. this anahtar kelimesini o objeye bağlıyor.

//static methodlar o class'a ait olan özellik ve methodlardır.
//neden class en temel sebebi mümkün olduğunca parçalara ayırmak buna modülerleştirme denir.classlar nesnelerin şablonudur.

/* class Person {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    fullName(){
        return this.name + " " + this.surname;
    }
    static showName = "Person";

    static staMethod() {
        console.log("STATIC METHOD ÇALIŞIYOR");
    }
}
console.log(typeof Person);

const umit = new Person("umit", "turk", 26);
const ugur = new Person("ugur", "turk", 27);
console.log(umit instanceof Person)
console.log(ugur instanceof Person)

//umit person class'ının instancesi
console.log(umit.static);// undefined
console.log(Person.showName);
console.log(Person.staMethod()); */

/* class Person {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    fullName(){
        return this.name + " " + this.surname;
    }
}
const umit = new Person("umit", "turk", 26);
//persona ait olan tüm özellikleri ve metodları enginner da içeriyor.
class Engineer extends Person {}; // Engineer --> Subclass(child) , Person --> Superclass(parant)

const ahmet = new Engineer("Ahmet", "Can", 40);
console.log(ahmet); */

//OBJECT + (name, surname, age, fullName()) --> Person

// Person => Engineer

/* console.log(umit instanceof Person);
console.log(ahmet instanceof Engineer);
console.log(ahmet instanceof Person); */

/* class Person {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    fullName(){
        return this.name + " " + this.surname;
    }
}

class Engineer extends Person {
    constructor(name, surname, age, job){
        super(name, surname, age)// içerideki parametreleri superrclassdan alıyor yani persondan
        this.job = job;
    }

    getMoney(){
        console.log("para kazan");
    }
}
const umit = new Person("umit", "turk", 26, "student");

const ahmet = new Engineer("Ahmet", "Can", 40);

console.log(umit);
console.log(ahmet);

// OBJE + (name, surname, age) => Person

// Person + job, getMoney() => Engineer

console.log(ahmet.getMoney()); */

/* 
class Person {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    fullName(){
        return this.name + " " + this.surname;
    }
}

class Engineer extends Person {
    constructor(name, surname, age, job){
        super(name, surname, age)// içerideki parametreleri superrclassdan alıyor yani persondan
       // this.name = name;
      //  this.surname = surname;
      //  this.age = age; 
       // this.job = job;
    }
    //subclass'ın this'i superclass tarafından oluşturuluyor.

    getMoney(){
        console.log("para kazan");
    }
} */

//var olan referans veri tiplerini extend etme

class ExtendedArray extends Array {
    shuffle(){
        this.sort(() =>Math.random() -0.5);
    }
}

let myArr = new ExtendedArray(1,2,3,4,5);
console.log(myArr instanceof ExtendedArray);
console.log(myArr instanceof Array);
console.log(myArr);
myArr.shuffle();
console.log(myArr);