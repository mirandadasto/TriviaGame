var triviaQuestions = [];
var wins = 0;
var losses = 0;
var timeInterval;
var timeLimit = 30;
var time = timeLimit;
var clockRunning = true;

class Question
{
    constructor(question, options, correctAnswer)
    {
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
}

window.onload = function()
{
    resetGame();
    timeInterval = setInterval(count, 1000);

}

// Adds question objects to triviaQuestions array
function populateTriviaQuestions()
{
    triviaQuestions = 
    [
        new Question("Dublin is the capital of which country?", ["United Kingdom", "Iceland", "Ireland", "France"], 2),
        new Question("What is the square root of 144?", ["4", "14", "12", "11"], 2),
        new Question("Halloween is in which month?", ["October", "September", "November", "January"], 0)
    ];
}

// setup new question --update question label, radio button text, unselect previous radio button. remove previous question
function setNewQuestion()
{
    $('input[name="option"]').prop("checked", false);

    if(triviaQuestions.length !== 0)
    {
        $("#currentTriviaQuestion").text(triviaQuestions[0].question);

        $("label[for=firstRadioOption]").html(triviaQuestions[0].options[0]);
        $("label[for=secondRadioOption]").html(triviaQuestions[0].options[1]);
        $("label[for=thirdRadioOption]").html(triviaQuestions[0].options[2]);
        $("label[for=fourthRadioOption]").html(triviaQuestions[0].options[3]);
    }
    else
    {
        alert("End of game! \nYour total score is: " + wins + " wins to " + losses + " losses. \nPress the Reset Game button to play again.")
    }

}


// check question against answer - call setup new random question, update win/loss count.
function answerCheck()
{
    var radioValue = $("input[name = 'option']:checked").val();

    if (radioValue == triviaQuestions[0].correctAnswer)
    {
        wins++;
        alert("You are correct!\nYour score is: " + wins + " wins to " + losses + " losses.");
    }
    else
    {
        losses++;
        var correctAnswer = triviaQuestions[0].correctAnswer;
        alert("You are wrong...\nYour score is: " + wins + " wins to " + losses + " losses.\nThe correct answer is: " + triviaQuestions[0].options[correctAnswer]); 
    }

    triviaQuestions.shift();
    setNewQuestion();
}

// check timer
function checkTimer()
{
    if(time <= 0)
    {
        alert("You have run out of time, press the Reset Game button to try again!");

        clearInterval(timeInterval);
        clockRunning = false;
    }
}

function beginTimer()
{
    $("#countdownTimer").text("00:30");
    time = timeLimit;
    clockRunning = true;
}

function count()
{
    if(clockRunning)
    {
        time--;

        var currentTime = timeConverter(time);

        $("#countdownTimer").html(currentTime);

        checkTimer();
    }
}

function timeConverter(time) {

    var minutes = Math.floor(time / 60);
    var seconds = time - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
  
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }

function resetGame()
{
    populateTriviaQuestions();
    setNewQuestion();
    beginTimer();
    wins = 0;
    losses = 0;
}

