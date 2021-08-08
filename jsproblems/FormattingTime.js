let mDate = new Date();

mDate.setTime(2020);

console.log(mDate.toString());

let str = "2";
console.log(str.padStart(4, "0"));

let num = 5;
console.log(num.toString().padStart(2, "0"))

//////////////////
let formatTime = (m) => {
    //0000:00:00.00
    let hms = "",
    formatTime = new Date(),
    hours = "0",
    minutes = "0",
    seconds = "0",
    dSecs = "0";

    formatTime.setTime(m);
    hours = Math.floor(m / 3600000).toString().padStart(4,"0");
    minutes = formatTime.getMinutes().toString().padStart(2, "0");
    seconds = formatTime.getSeconds().toString().padStart(2, "0");
    dSecs = Math.round(formatTime.getMilliseconds() / 10).toString().padStart(2, "0");

    hms = `${hours}:${minutes}:${seconds}.${dSecs}`;
    return hms
}