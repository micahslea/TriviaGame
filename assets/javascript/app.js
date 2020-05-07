var timer = 30;
var timerId;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

function startTimer() {
  clearInterval(timerId);
  timerId = setInterval(decrement, 1000);

  function decrement() {
    timer--;

    $("#time-remaining").html("<h2>" + "Time Remaining: " + timer + "</h2>");

    function stop() {
      clearInterval(timerId);
    }

    if (timer === 0) {
      stop();
      $(".end").toggle();
      $(".game").css("display", "none");
    }
  }
}

$(document).ready(function () {
  $(".game").css("display", "none");
  $(".btn").click(function () {
    $(".game").toggle();
    $(".start").css("display", "none");
    startTimer();
  });
});
