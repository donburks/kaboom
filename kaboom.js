updateTimer = function() {
  var clock = utils.clockString(total);
  if (clock == "0:00") {
    utils.kaboom();
  } else {
    $("#timer").text(clock);
  }
}
