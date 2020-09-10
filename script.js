/**
 * DOM Variables
 */
var date = $("#currentDay");
var save9am = $(".9am");
var input9am = $("#9am");
var input10am = $("#10am");
var input11am = $("#11am");
var input12pm = $("#12pm");
var input1pm = $("#1pm");
var input2pm = $("#2pm");
var input3pm = $("#3pm");
var input4pm = $("#4pm");
var input5pm = $("#5pm");




var populateSchedule = function(){
    input9am.text(JSON.parse(localStorage.getItem("event9am")));
}

populateSchedule();

$(document).ready(function(){

// display current date and time on scheduler
var update = function(){
    date.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
// update every second
setInterval(update, 1000);

// save imputs to local storage
save9am.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("event9am", JSON.stringify($(input9am).val()));
})


})
