// TODO
// add a clear button to each hour
// style style style
// for the container make sure it doesn't wrap on mobile
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

// array for the buttons
const save = $('button.save')
const clear = $('button.clear')

// gets the hour of the day (out of 24). Since the day starts at 7, subtract 7 from the hour to identify which div to style
var hour = moment().hour() - 7;

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


