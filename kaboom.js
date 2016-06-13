$(function() {
  var total = 10000;

  function updateTimer() {
    var clock = utils.clockString(total);
    if (clock == "0:00") {
      utils.kaboom();
      clearInterval(loop);
      return false;
    }
    $("#timer").text(clock);
  }

  var loop = setInterval(function() {
    total = total - 1000;
    updateTimer();
  }, 1000);
});