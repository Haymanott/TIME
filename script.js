var clock = new Vue({
  el: "#clock",
  data: {
    time: "",
    date: "",
    week: "",
  },
});

var week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var timerID = setInterval(updateTime, 1);
updateTime();

function updateTime() {
  var cd = new Date();
  clock.time =
    zeroPadding(cd.getHours(), 2) +
    ":" +
    zeroPadding(cd.getMinutes(), 2) +
    ":" +
    zeroPadding(cd.getSeconds(), 2) 
    //+
    //":" +
    //zeroPadding(cd.getMilliseconds(), 3)
    ;

  clock.date =
    zeroPadding(cd.getDate(), 2) +
    "-" +
    zeroPadding(cd.getMonth() + 1, 2) +
    "-" +
    zeroPadding(cd.getFullYear(), 4);

  clock.week = week[cd.getDay()];
}

function zeroPadding(num, digit) {
  var zero = "";
  for (var i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
}