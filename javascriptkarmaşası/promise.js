//promise bir asenkron işlemin nihai sonucunu temsil eden bir javascript nesnesidir.
//promise parametre olarak bir fonk yazıcaz bu fonk'a executer fonk deniyor.
/* const books = [
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

addNewBook({name: "Berlin Hatıralarım", author: "Hüsrev Gerede"}, listbooks); */
//promise parametre olarak bir fonk yazıcaz bu fonk'a executer fonk deniyor.

/* const promise1 = new Promise(function(resolve, reject)  {
    //resolve("data");
    reject("error");
})

//promise1.then(value => console.log(value));
promise1.catch(err => console.log(err)); */

/* const promise1 = new Promise((resolve, reject) => {
  //resolve();

  reject();
});
promise1.then(() => {
    console.log("veriler alındı");
});
promise1
  .then(() => {
    console.log("veriler alındı");
  })
  .catch(() => {
    console.log("veriler alınmadı");
  }).finally(() => {
      console.log("çalış köle");
  }) */ //her durumda bize bir sonuç dönülecekse finally kullanılır.

/*   const promise1 = new Promise((resolve, reject) => {
    resolve();
    //reject();
  });

  promise1.then(() => {
      console.log("veriler alındı");
  }, () => {
      console.log("veriler alınmadı");
  }) */

/* const books = [
    {name: "Pinball", author: "Haruki Murakami"},
    {name: "Özgürlük", author: "Zyhmunt Bauman"},
    {name: "Turkiye'de Çağdaşlaşma", author: "Niyazi Berkes"}
]

const listbooks = () => {
    books.map((book, index) => {
        console.log(book, index)
    })
} */

/* const addNewBook = (newBook, callback) => {
    books.push(newBook)
    callback();
} */

/* const addNewBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook)
        resolve(books)
        //reject("HATA")
    })
    return promise1
}

//addNewBook({name: "Berlin Hatıralarım", author: "Hüsrev Gerede"}, listbooks);

addNewBook({name: "Berlin Hatıralarım", author: "Hüsrev Gerede"})
.then(() => {
    console.log("yeni liste");
    listbooks();
}).catch((err) => {
    console.log(err)
}) */

const addTwoNumbers = (num1, num2) => {
  const promise2 = new Promise((resolve, reject) => {
    const sum = num1 + num2;
    typeof num1 !== "number" || typeof num2 !== "number"
      ? reject("2 sayı girmeniz gerekir")
      : resolve(sum);
  });
  return promise2;
};
addTwoNumbers(4, 8)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
