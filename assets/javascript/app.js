var triviaQuestions = [];
var wins = 0;
var losses = 0;

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
    populateTriviaQuestions();
    setNewQuestion();
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
        //alert score?
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

}