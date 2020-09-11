/**
 * DOM Variables
 */
var date = $("#currentDay");
var save9am = $(".9am");
var save10am = $(".10am");
var save11am = $(".11am");
var save12pm = $(".12pm");
var save1pm = $(".1pm");
var save2pm = $(".2pm");
var save3pm = $(".3pm");
var save4pm = $(".4pm");
var save5pm = $(".5pm");
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

var inputs = [input9am, input10am, input11am, input12pm, input1pm, input2pm, input3pm, input4pm, input5pm]




var populateSchedule = function(){
    input9am.text(JSON.parse(localStorage.getItem("event9am")));
    input10am.text(JSON.parse(localStorage.getItem("event10am")));
    input11am.text(JSON.parse(localStorage.getItem("event11am")));
    input12pm.text(JSON.parse(localStorage.getItem("event12pm")));
    input1pm.text(JSON.parse(localStorage.getItem("event1pm")));
    input2pm.text(JSON.parse(localStorage.getItem("event2pm")));
    input3pm.text(JSON.parse(localStorage.getItem("event3pm")));
    input4pm.text(JSON.parse(localStorage.getItem("event4pm")));
    input5pm.text(JSON.parse(localStorage.getItem("event5pm")));
}

populateSchedule();


var objDate = new Date();
var hours = objDate.getHours();


console.log(objDate);
console.log(hours);
console.log(input9am);



$(document).ready(function(){

    var updateSlots = function(){
        for (var i = 0; i < inputAll.length; i++) {
            // console.log(inputAll);
            // console.log(inputAll[i])
            // console.log(inputAll[i].id)
            if (parseInt(inputs[i][0].id) === hours) {
                inputs[i].addClass("present");
            }
            else if (parseInt(inputs[i][0].id) < hours) {
                inputs[i].addClass("past");
            }
            else {
                inputs[i].addClass("future");
            }
        }

    }
    updateSlots();
// display current date and time on scheduler
var update = function(){
    date.text(moment().format('dddd, MMMM Do'));
}
// update every second
setInterval(update, 1000);
// setInterval(updateSlots, 60000)

// save imputs to local storage
save9am.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("event9am", JSON.stringify($(input9am).val()));
})
save10am.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("event10am", JSON.stringify($(input10am).val()));
})
save11am.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("event11am", JSON.stringify($(input11am).val()));
})
save12pm.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("event12pm", JSON.stringify($(input12pm).val()));
})
save1pm.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("event1pm", JSON.stringify($(input1pm).val()));
})
save2pm.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("event2pm", JSON.stringify($(input2pm).val()));
})
save3pm.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("event3pm", JSON.stringify($(input3pm).val()));
})
save4pm.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("event4pm", JSON.stringify($(input4pm).val()));
})
save5pm.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("event5pm", JSON.stringify($(input5pm).val()));
})

})
