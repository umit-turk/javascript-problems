//extractring numbers from a string

let str = "I finished 68 of the 80 total";

let arr = str.split(" ");

let nums = arr.filter((elem) => !isNaN(elem)).map((val) => parseFloat(val));
console.log(nums);

/* let final = nums.map((val) => {
    return parseFloat(val)
})
console.log(final) */
