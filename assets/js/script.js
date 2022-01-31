
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


// Psuedo code
// 24 divs/rows (one for each hour)
// within each row: first column is an hour; second column is an interactable box. When you click on it you can type an appt. Possibly do a modal that pops up a box with a time dropdown and an entry for what the appt is; the third column is a save button that saves the entry to memory
// Three states to each box: gray is for past, red is for the current hour, and green is for the future
// for the container make sure it doesn't wrap on mobile 
// write a function that checks the current time and applies a color to each div based on that
// function labelFunction() {
    // for loop through the divs
    // if the hour is less than now, color is gray
    // if the hour is now, color is red
    // if the hour is future, color is green
    // do this via $(element).addClass("whatever") and have the classes styled in the css

    // variable with getelementbyclassname yields an array with each element
    // forEach loop over these elements with an if statement to set the background color
    // use the array position +7 to identify time. The hour is given in 00-24


// sets the current hour to red
$(appt[hour]).css('background-color', 'red');

// sets the other times to the respective colors
// I wanted to use a foreach loop but it was giving me trouble.
for (let i = 0; i < appt.length; i++) {

    if (i < hour) {
        $(appt[i]).css('background-color', 'gray');
    }

    if (i > hour) {
        $(appt[i]).css('background-color', 'green');
    }
}
