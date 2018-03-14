//
//var d = new Date();
//    var weekday = new Array(7);
//        weekday[0] = "Sunday";
//        weekday[1] = "Monday";
//        weekday[2] = "Tuesday";
//        weekday[3] = "Wednesday";
//        weekday[4] = "Thursday";
//        weekday[5] = "Friday";
//        weekday[6] = "Saturday";
//
//    var month = new Array(12);
//        month[0] = "January";
//        month[1] = "February";
//        month[2] = "March";
//        month[3] = "April";
//        month[4] = "May";
//        month[5] = "June";
//        month[6] = "July";
//        month[7] = "August";
//        month[8] = "September";
//        month[9] = "October";
//        month[10] = "November";
//        month[11] = "December";
//
//var n = weekday[d.getDay()];
//var k = d.getDay();
//var m = month[d.getMonth()];
//var y = d.getFullYear();
//    document.getElementById("date").innerHTML = n + "," + " " + k + " " + m + " " + y;




/* Current Date */
/*function todaysDate()
{  

var currentDate = new Date();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = date.getMonth() + 1;
var day = date.getDay();
var dayNumber = date.getDate();
var year = date.getFullYear();
document.getElementById("date").innerHTML = day + ", " + dayNumber + "" + month + "" + year;
    
}*/

var d = new Date();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
monthNames = monthNames[d.getMonth()];
var month = d.getMonth() + 1;
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
dayNames = dayNames[d.getDay()];
var day = d.getDay();
var dayNumber = d.getDate();
var year = d.getFullYear();
document.getElementById("date").innerHTML = dayNames + ", " + dayNumber + " " + monthNames + " " + year;