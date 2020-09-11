/**
 * DOM Variables
 */
var date = $("#currentDay");
var save9am = $(".9");
var save10am = $(".10");
var save11am = $(".11");
var save12pm = $(".12");
var save1pm = $(".13");
var save2pm = $(".14");
var save3pm = $(".15");
var save4pm = $(".16");
var save5pm = $(".17");
var input9am = $("#9");
var input10am = $("#10");
var input11am = $("#11");
var input12pm = $("#12");
var input1pm = $("#13");
var input2pm = $("#14");
var input3pm = $("#15");
var input4pm = $("#16");
var input5pm = $("#17");
var inputAll = $(".text")

/**
 * Variables
 */
// an array of inputs
var inputs = [input9am, input10am, input11am, input12pm, input1pm, input2pm, input3pm, input4pm, input5pm]
// current date and time
var objDate = new Date();
var hours = objDate.getHours();




var populateSchedule = function(){
    for (var i = 0; i < inputAll.length; i++) {
    inputs[i].text(JSON.parse(localStorage.getItem(inputs[i][0].id)));
    }
}

populateSchedule();

//This all begins when document is ready
$(document).ready(function(){
    // function to update the class of timeslot based on current local time
    var updateSlots = function(){
        for (var i = 0; i < inputAll.length; i++) {
            // if the time slot is the same as curent time, class is present
            if (parseInt(inputs[i][0].id) === hours) {
                inputs[i].addClass("present");
            }
            // clas of past is assigned if its in the past
            else if (parseInt(inputs[i][0].id) < hours) {
                inputs[i].addClass("past");
            }
            // otherwise the class of future is assigned
            else {
                inputs[i].addClass("future");
            }
        }

    }
    //call this updateSlot function
    updateSlots();
// display current date and day on scheduler
var update = function(){
    date.text(moment().format('dddd, MMMM Do'));
}

// update time every second
setInterval(update, 1000);
// update time slots every 10 seconds
setInterval(updateSlots, 10000)

// when user clicks a save button, it saves value to local storage
save9am.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("9", JSON.stringify($(input9am).val()));
})
save10am.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("10", JSON.stringify($(input10am).val()));
})
save11am.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("11", JSON.stringify($(input11am).val()));
})
save12pm.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("12", JSON.stringify($(input12pm).val()));
})
save1pm.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("13", JSON.stringify($(input1pm).val()));
})
save2pm.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("14", JSON.stringify($(input2pm).val()));
})
save3pm.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("15", JSON.stringify($(input3pm).val()));
})
save4pm.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("16", JSON.stringify($(input4pm).val()));
})
save5pm.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("17", JSON.stringify($(input5pm).val()));
})


})