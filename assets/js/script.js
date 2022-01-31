// TODO
// for the container make sure it doesn't wrap on mobile 
// event listener on save press to save the text in the field to local storage
// style style style
// maybe change the time/date at the top to be a live clock using an interval function


//moment testing
var date = moment();

var today = date.format('MMM Do, YYYY')
console.log(`The date is ${today}`)

var day = date.format('dddd')
console.log(`Today is ${day}`);

var time = date.format('LT');
console.log(`The current time is ${time}`);

$('#current-time').text(`Today is ${day} ${today}. The time is ${time}.`)

// array for all the div classes
const appt = $('div.event');

// gets the hour of the day (out of 24). Since the day starts at 7, subtract 7 from the hour to identify which div to style
var hour = moment().hour() - 7;


// TODO
// for the container make sure it doesn't wrap on mobile 
// event listener on save press to save the text in the field to local storage
// style style style

// sets the current hour to red
$(appt[hour]).css('background-color', 'red');

// sets the other times to the respective colors
// I wanted to use a foreach loop but it was giving me trou
for (let i = 0; i < appt.length; i++) {

    if (i < hour) {
        $(appt[i]).css('background-color', 'gray');
    }

    if (i > hour) {
        $(appt[i]).css('background-color', 'green');
    }
}

// use this on an event listener to set the contents of the event div to memory. change 'text' to the proper syntax.
// localStorage.setItem('7A', 'text'); 