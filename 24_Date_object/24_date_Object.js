console.log("This tutorial is for understanding date object.");

let today = new Date();
// console.log(today);
// console.log("The type of date is : ",typeof today);

let otherDay = new Date('8-3-2002 11:10:10');
otherDay = new Date('08/03/2002');//---->mm/dd/yyyy
otherDay = new Date('April-5-2002 11:12:10:25');
// console.log(otherDay);

let a; 
    a = otherDay.getDay()
    a = otherDay.getDate()
    a = otherDay.getFullYear()
    a = otherDay.getMinutes()
    a = otherDay.getSeconds()
    a = otherDay.getHours()
    a = otherDay.getTime()
    a = otherDay.getMilliseconds()
    a = otherDay.getMonth()
    // console.log(a);
let b; 

    // otherDay.setDate(0)
    // otherDay.setFullYear(1700)
    // otherDay.setMinutes(25)
    // otherDay.setSeconds(2)
    // otherDay.setHours(3)
    // otherDay.setTime(6565656)
    // otherDay.setMilliseconds(60)
    // otherDay.setMonth(11)
    // console.log(otherDay);



    //HOW TO KNOW WHICH DAY TODAY📌📌📌
    // let date  = new Date();

    // let arr = new Array();
    // arr[0] = "Sunday";
    // arr[1] = "Monday";
    // arr[2] = "Tuesday";
    // arr[3] = "Wednesday";
    // arr[4] = "Thursday";
    // arr[5] = "Friday";
    // arr[6] = "Saturday";

    // console.log(date);
    // console.log(date.getDay());
    // console.log(arr[date.getDay()]);