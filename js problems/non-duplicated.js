let col3 = new Set([1,2,3,4,5,6]),
    sum = 0;
let arr = [...col3]

arr.forEach((val) => {
    if(val > 2){
        sum+= val
    }
});
console.log(sum);