//combining arrays and removing duplicate values.

let obj = {name: "steven"},
    obj2 = obj,
    obj3 = {name: "steven"};

let array1 = ["james", "marry", "tony", "keyvan", "anna", obj],
    array2 = ["steven", "gabe", "esther", "marry", "anna", obj];

/* let newArray = [].concat(array1, array2); */
//let newArray = [...array1, ...array2];

let set = new Set([...array1, ...array2])
/* console.log(set); */

let newArray = [...set]
console.log(newArray);