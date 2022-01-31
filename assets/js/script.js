
//moment testing
var date = moment();

var today = date.format('MMM Do, YYYY')
console.log(`The date is ${today}`)

var day = date.format('dddd')
console.log(`Today is ${day}`);

var time = date.format('LT');
console.log(`The current time is ${time}`);

$('#current-time').text(`Today is ${today}, a ${day}. The time is ${time}.`)


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
