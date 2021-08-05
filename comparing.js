//comparing objects in an array

let obj = {name: "steven"},
    obj2 = obj,
    obj3 = {name: "steven"};

let array1 = ["james", "marry", "tony", "keyvan", "anna", obj],
    array2 = ["steven", "gabe", "esther", "marry", "anna", obj];

/* let newArray = [].concat(array1, array2); */
//let newArray = [...array1, ...array2];

let prepareArray = (arr) => {
    return arr.map((elem) => {
        if(typeof elem === "object" && elem !== null){
            return JSON.stringify(elem);
        }else{
            return elem
        }
    })
}

let set = new Set([...prepareArray(array1), ...prepareArray(array2)])
/* console.log(set); */

let newArray = [...set]
console.log(newArray);