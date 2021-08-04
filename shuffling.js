let arry = [1,2,3,4,5,6,7,8,9]

let arrayshuffle = (arr) => {
    let newPos, temp;

    for(let i = arr.length - 1; i > 0; i--){
        newPos = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[newPos]
        arr[newPos] = temp;
    }
    return arr;
};

let newArray = arrayshuffle(arry);
console.log(newArray);

let newArray2 = arrayshuffle(newArray);
console.log(newArray2);