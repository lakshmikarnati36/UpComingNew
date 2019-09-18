// A $( document ).ready() block.
$(document).ready(function () {

    var dNow = new Date();
    var localdate = (dNow.getMonth() + 1) + '/' + dNow.getDate() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
    // To show current date to card
    $("#upcoming").text("Today");
    $('#currentDate').text(localdate);

    $("body").on('click', "#timeList", function (event) {

        var target = event.target;
        var targetId = target.id;
        if (targetId === "next_day" || targetId === "next_day_a") {
            nextDay();
        }
        else if (targetId === "next_week" || targetId === "next_week_a") {
            console.log("next_week");
            nextWeek();
        }
        else if (targetId === "next_month" || targetId === "next_month_a") {
            next_month();
        }
        else if (targetId === "next_threeMonth" || targetId === "next_threeMonth_a") {
            next_threeMonth();
        }
    })
});

function nextDay() {
    var CurrentDate = new Date();
    CurrentDate.setDate(CurrentDate.getDate() + 1)
    var localdate = (CurrentDate.getMonth() + 1) + '/' + CurrentDate.getDate() + '/' + CurrentDate.getFullYear() + ' ' + CurrentDate.getHours() + ':' + CurrentDate.getMinutes();
    $("#upcoming").text("Next Day");
    $('#currentDate').text(localdate);
}

function nextWeek() {
    var CurrentDate = new Date();
    CurrentDate.setDate(CurrentDate.getDate() + 7);
    var localdate = (CurrentDate.getMonth() + 1) + '/' + CurrentDate.getDate() + '/' + CurrentDate.getFullYear() + ' ' + CurrentDate.getHours() + ':' + CurrentDate.getMinutes();
    $("#upcoming").text("Next Week");
    $('#currentDate').text(localdate);
}



function next_month() {
    var CurrentDate = new Date();
    console.log("Current date:", CurrentDate);
    CurrentDate.setMonth(CurrentDate.getMonth() + 1);
    var localdate = (CurrentDate.getMonth() + 1) + '/' + CurrentDate.getDate() + '/' + CurrentDate.getFullYear() + ' ' + CurrentDate.getHours() + ':' + CurrentDate.getMinutes();
    $("#upcoming").text("Next Month");
    $('#currentDate').text(localdate);
}

function next_threeMonth() {
    var CurrentDate = new Date();
    CurrentDate.setMonth(CurrentDate.getMonth() + 3);
    var localdate = (CurrentDate.getMonth() + 1) + '/' + CurrentDate.getDate() + '/' + CurrentDate.getFullYear() + ' ' + CurrentDate.getHours() + ':' + CurrentDate.getMinutes();
    $("#upcoming").text("Next 3 Months");
    $('#currentDate').text(localdate);
}