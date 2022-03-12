var timeDisplay = document.getElementById("clock");


function refreshTime() {
  var dateString = new Date();
  timeDisplay.innerHTML = dateString;
}

setInterval(refreshTime, 1000);