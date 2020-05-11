$(document).ready(function () {
  var timer = 60;
  var timerId;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;

  var questions = [
    {
      title: "What was the first feature-length animated film to be released?",

      answers: [
        "Lady and the Tramp",
        "Snow White and the Seven Dwarfs",
        "Pinocchio",
        "Bambi",
      ],
      correctAnswer: "Snow White and the Seven Dwarfs",
    },
    {
      title: "Which actor was not in the movie Lawless?",
      answers: ["Shia LaBeouf", "Tom Hardy", "Buddy Guy", "Jessica Chastain"],
      correctAnswer: "Buddy Guy",
    },
    {
      title:
        "For what movie did Steven Spielberg win his first Oscar for Best Director?",
      answers: [
        "Schindler's List",
        "E.T.",
        "Jurassic Park",
        "The Color Purple",
      ],
      correctAnswer: "Schindler's List",
    },
    {
      title:
        "Who played Robert Ford in The Assassination of Jesse James by the Coward Robert Ford?",
      answers: ["Brad Pitt", "Casey Affleck", "Sam Rockwell", "Will Smith"],
      correctAnswer: "Casey Affleck",
    },
    {
      title:
        'In the cult classic The Big Lebowski how many times does "The Dude" say"man"?',
      answers: ["25", "57", "103", "147"],
      correctAnswer: "147",
    },
    {
      title: "Who directed The Thin Red Line",
      answers: [
        "Terrence Malick",
        "Francis Ford Coppola",
        "Steven Spielberg",
        "Tim Burton",
      ],
      correctAnswer: "Terrence Malick",
    },
    {
      title: "What was Tim Burton's debut feature film?",
      answers: [
        "Edward Scissorhands",
        "Pee-wee's Big Adventure",
        "Frankenweenie",
        "Beetlejuice",
      ],
      correctAnswer: "Pee-wee's Big Adventure",
    },
    {
      title:
        'Which of the following actors did Peter Jackson call "the worst actor he has ever seen" when auditioning for the part of Frodo Baggins in Lord of the Rings?',
      answers: [
        "Toby Maguire",
        "Keanu Reeves",
        "Jessie Eisenberg",
        "Jake Gyllenhaal",
      ],
      correctAnswer: "Jake Gyllenhaal",
    },
  ];
  var questionDiv = document.getElementById("two");

  for (var i = 0; i < questions.length; i++) {
    newQuestionDiv = $("<div>");
    newQuestionDiv.html(questions[i].title);
    newQuestionDiv.appendTo("#two");

    for (var j = 0; j < questions[i].answers.length; j++) {
      var radioBtn = document.createElement("Input");
      radioBtn.setAttribute("type", "radio");
      radioBtn.setAttribute("name", "title");
      radioBtn.setAttribute("style", "margin-right: 10px");
      radioBtn.setAttribute("value", questions[i].answers[j]);
      radioBtn.setAttribute("class", "buttonSelected");
      radioBtn.setAttribute("answer", questions[i].correctAnswer);
      questionDiv.append(radioBtn);
      radioAnswers = $("<label>");
      radioAnswers.append(questions[i].answers[j]);
      radioAnswers.css({
        "font-size": "20px",
        "font-family": "'Jost', sans-serif",
        "margin-right": "25px",
      });
      radioAnswers.appendTo(questionDiv);

      console.log(questions[i].answers[j]);
      radioBtn.addEventListener("click", evaluate);
      console.log(radioBtn);
    }
  }
  function evaluate() {
    console.log(radioBtn);

    if ($(radioBtn).attr("value") == $(radioBtn).attr("answer")) {
      correct++;
      console.log("answer correct" + correct);
    } else {
      incorrect++;
      console.log("answer incorrect" + incorrect);
    }
    console.log(radioBtn.getAttribute("value"));
    console.log(radioBtn.getAttribute("answer"));
  }

  $("#correct-text").text("Correct Answers: " + correct);
  $("#incorrect-text").text("Incorrect Answers: " + incorrect);
  $("#unanswerd-text").text("Unanswered: " + unanswered);

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

  $(".game").css("display", "none");
  $(".btn").click(function () {
    $(".game").toggle();
    $(".start").css("display", "none");
    startTimer();
  });

  //   $("input[type='radio']").click(function () {
  //     var radioCorrect = $("input[value='correct']:checked").val();
  //     var radioIncorrect = $("input[value='incorrect']:checked").val();

  //     console.log(radioCorrect);
  //     console.log(radioIncorrect);

  //     if (radioCorrect) {
  //       correct++;
  //       $("#correct-text").text("Correct Answers: " + correct);
  //     }
  //     if (radioIncorrect) {
  //       incorrect++;
  //       $("#incorrect-text").text("Incorrect Answers: " + incorrect);
  //     }
  //   });
});
