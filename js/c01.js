/* 
* This program displays a message according to the time of the day 
* taken from Jon Duckett's book "JavaScript & jQuery"
* modified by Mavis Javier 
*/
var today = new Date();         // create a new Date object
var hourNow = today.getHours(); // Find the current hour
var greeting;

// single and double quotations are interchangeable!
if(hourNow > 18) {
    greeting = "Good evening";    
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

var elGreeting = document.getElementById("greeting");
elGreeting.textContent = greeting;