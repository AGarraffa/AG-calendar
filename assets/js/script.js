// TODO
// add a clear button to each hour
// style style style
// for the container make sure it doesn't wrap on mobile
// maybe change the time/date at the top to be a live clock using an interval function

// setting up the moment variable
var date = moment();

// the current date
var today = date.format('MMM Do, YYYY')
console.log(`The date is ${today}`)

// the day of the week
var day = date.format('dddd')
console.log(`Today is ${day}`);

// the current time
var time = date.format('LT');
console.log(`The current time is ${time}`);

// rendering the date, day, and time to the html
$('#current-time').text(`Today is ${day} ${today}. The time is ${time}.`)

// array for all the div classes
const appt = $('div.event');

// array for the buttons
const save = $('button.save')
const clear = $('button.clear')

// gets the hour of the day (out of 24). Since the day starts at 7, subtract 7 from the hour to identify which div to style
var hour = moment().hour() - 7;

// sets the current hour to green
$(appt[hour]).css('background-color', 'rgb(198, 213, 126)');

// sets the other times to the respective colors
// I wanted to use a foreach loop but it was giving me trouble
for (let i = 0; i < appt.length; i++) {

    if (i < hour) {
        // past hours are red
        $(appt[i]).css('background-color', 'rgb(213, 126, 126)');
    }

    if (i > hour) {
        // future hours are blue
        $(appt[i]).css('background-color', 'rgb(162, 205, 205)');
    }
}


// sets the contents of the planner from local storage
for (let i=0; i < appt.length; i++) {
    // $(appt[i].text((i+7) + 'hour'));
    let key = (i+7) + "hour"
    console.log(localStorage.getItem(key))
    appt[i].innerHTML = localStorage.getItem(key)
    console.log(appt[i].innerHTML)
}


// event listener applying a save function to each button
// the keyNames are dynamically generated based on the position in the loop
// they go from 7hour to 17hour
for (let i = 0; i < save.length; i++) {
    $(save[i]).on( "click", function() {

        localStorage.setItem((i+7) + 'hour', appt[i].innerHTML);

    });
      
}

// clears the events of the div with the clear button press
for (let i = 0; i < clear.length; i++) {
    $(clear[i]).on( "click", function() {

        localStorage.setItem((i+7) + 'hour', "");
        appt[i].innerHTML = ""

    });
      
}


