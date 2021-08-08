// Js Single Thread : o anki çalışan kod parçacığı
//Js synchronous: js sıralı bir şekilde çalışır.


/* const func1 = () => {
    console.log("Func 1 console log 1");

    console.log("Func 1 console log 2");

    alert("Alert Message");
}

const func2 = () => {
    console.log("Func 2 console log 1");

    console.log("Func 2 console log 2");
}

func1();
func2(); */

/* let x = 10;
console.log(x);

setTimeout(() => {
   x = x + 5; 
}, 2000);
console.log(x);

x = x + 5;
console.log(x); */

//Call Stack bizim açımızdan fonksiyonların çalışma sırasını gösterir.

/* function func1() {
    console.log("ben birinciyim");
    func2();
    console.log("ben tekrar birinciyim");
}

function func2() {
    console.log("ben ikinciyim")
    func3();
    console.log("ben tekrar ikinciyim")
}
function func3() {
    console.log("ben üçüncüyüm");
}
func1(); */

/* function sum(x, y) {
    return x + y;
}

function ave(x, y){
    return sum(x, y) / 2
}

let x = ave(6, 8);
console.log(x); */

/* function task(message) {
    let n = 10000000000;
    while(n > 0){
        n--
    }
    console.log(message);
}

console.log("1");

setTimeout(() => {
    console.log("2");
}, 1000)

console.log("3");
console.log("4");

task("işlem tamamlandı");

setTimeout(() => {
    console.log("5");
}, 2000)

task("işlem tamamlandı 2"); */

//callback js in asenkron çalışması için bulduğu çözümlerden biridir.
//callback bir bildirim fonkiyonudur.

/* const myName = () => {
    console.log("benim adım ümit");
}

setTimeout(myName, 3000); */

/* setTimeout(() => {
    console.log("benim adım ümit");
}, 3000); */

/* const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    alert("you clicked me!")

    let pElem = document.createElement('p');
    pElem.textContent = "This is a newly- added"
    document.body.appendChild(pElem);
}) */

const books = [
    {name: "Pinball", author: "Haruki Murakami"},
    {name: "Özgürlük", author: "Zyhmunt Bauman"},
    {name: "Turkiye'de Çağdaşlaşma", author: "Niyazi Berkes"}
]

const listbooks = () => {
    books.map((book, index) => {
        console.log(book, index)
    })
}


const addNewBook = (newBook, callback) => {
    books.push(newBook)
    callback();
}

addNewBook({name: "Berlin Hatıralarım", author: "Hüsrev Gerede"}, listbooks);


