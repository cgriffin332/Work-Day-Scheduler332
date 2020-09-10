/**
 * DOM Variables
 */
var date = $("#currentDay");


$(document).ready(function(){

// display current date and time on scheduler
var update = function(){
    date.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
// update every second
setInterval(update, 1000);


})
