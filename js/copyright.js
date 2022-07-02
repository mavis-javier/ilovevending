/* This program updates the year of the Copyright portion of website 
* Created by Mavis Javier
* July 5, 2022
*/

// get current date
var current = new Date();
// get current year through the year of current date
var currentYear = current.getFullYear();

// use el variable to create an object under footer id
var el = document.getElementById("footer");
// write the copyright text into footer's HTML section
el.innerHTML = "<p>Copyright &copy;" + currentYear + " " + 
"DEAJ Investments LLC. All Rights Reserved." +"</p>";