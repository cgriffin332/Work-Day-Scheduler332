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

var saveBtn = [save9am, save10am, save11am, save12pm, save1pm, save2pm, save3pm, save4pm]




var populateSchedule = function(){
    for (var i = 0; i < inputAll.length; i++) {
    inputs[i].text(JSON.parse(localStorage.getItem(inputs[i][0].id)));
    }
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
// update every 10 seconds
setInterval(updateSlots, 10000)

console.log(save9am)
// save imputs to local storage
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

// $(document).on("click", ".saveBtn", function(event){
//     event.preventDefault();
//     console.log("this: " + JSON.stringify($(this)));

// })