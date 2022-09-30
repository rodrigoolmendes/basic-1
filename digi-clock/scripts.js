//creating function for the clock
function Time() {
    //creating object of Date Class
  var date = new Date();
    //getting current hour
  var hour = date.getHours();
    //getting current minute
  var minute = date.getMinutes();
    //getting current second
  var second = date.getSeconds();
    //creating a variable to store AM/PM
  var period = "";
    //assigning AM/PM accoridng to current hour
  if (hour >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }
    // Converting the hour in 12-hour format
  if (hour == 0) {
    hour = 12;
  } else {
    if (hour > 12) {
      hour = hour - 12;
    }
  }
    // Updating hour, minute, and second
    // if they are less than 10
  hour = update(hour);

  minute = update(minute);

  second = update(second);

  // Adding time element to the div

  document.getElementById("digital-clock").innerText =
    hour + " : " + minute + " : " + second + " " + period;
  // Setting timer to 1 second (1000ms)
  setTimeout(Time, 1000);
}

//Function to Update time elements if they are lessa than 10
//Append 0 before time elements if they are less than 10

function update(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}

Time();
