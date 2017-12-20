var newQuestion;
var answers;
var theAnswer;
var userChoice;
var gifResponse;
var questionIndex;
var timeLeft = 30;
var correctCount = 0;
var incorrectCount = 0;
var questionArray = [
    question1 = new MakeQuestions ("1What movie takes place in NY?", [answer1 = "1Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
    question2 = new MakeQuestions ("2What movie takes place in NY?", [answer1 = "2Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
    question3 = new MakeQuestions ("3What movie takes place in NY?", [answer1 = "3Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
    question4 = new MakeQuestions ("4What movie takes place in NY?", [answer1 = "4Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
    question5 = new MakeQuestions ("5What movie takes place in NY?", [answer1 = "5Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
    question6 = new MakeQuestions ("6What movie takes place in NY?", [answer1 = "6Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
    question7 = new MakeQuestions ("7What movie takes place in NY?", [answer1 = "7Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
    question8 = new MakeQuestions ("8What movie takes place in NY?", [answer1 = "8Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
    question9 = new MakeQuestions ("9What movie takes place in NY?", [answer1 = "9Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
    question0 = new MakeQuestions ("0What movie takes place in NY?", [answer1 = "0Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
]

function MakeQuestions (question, answers, solution, gif) {
    this.question = question;
    this.answers = answers;
    this.solution = solution;
    this.gif = gif;
}

//choose a random question to display
var randomQuestion = function () {
    var randomNumber = Math.floor(Math.random() * questionArray.length);
    console.log(randomNumber)
    for (var i in questionArray) {
        if (randomNumber == i) {
            newQuestion = questionArray[i].question;
            answers = questionArray[i].answers;
            theAnswer = questionArray[i].solution;
            gifResponse = questionArray[i].gif;
            questionIndex = i;
        }
    }
}

//eliminate apostrophes and spaces to help compare solution and answers
var classify = function (answer) {
    var noSpace = answer.replace(/\s+/g, '');
    var noApost = noSpace.replace("'", '');
    var lowerCase = noApost.toLowerCase();
    return lowerCase;
}

//start trivia and display first question
var startTrivia = function () {
    randomQuestion();
    $('.instructions').addClass('hidden');
    $('.btn').addClass('hidden');
    $('.question-area').append("<div class = 'text-center time-left'> <h2>Seconds to answer: <br>" + timeLeft +"</h2></div>");
    $('.question-area').append("<div class = 'text-center question'> <h2>" + newQuestion + "</h2></div>");  
    for (var i in answers) {
    $('.answer').append("<div class = 'text-center allAnswers answer" + i + "' id = '" + classify(answers[i]) + "'> <h3>" + answers[i] + "</h3></div>"); 
    }
    questionCountdown();
}

var nextQuestion = function () {
    $('.answer').removeClass('hidden');
    $('.question').removeClass('hidden');
    $('.feedback-area').addClass('hidden');
    timeLeft = 30;
    randomQuestion();
    $('.time-left').html("<h2>Seconds to answer: <br>" + timeLeft +"</h2></div>");
    $('.question').html("<h2>" + newQuestion + "</h2></div>");  
    for (var i in answers) {
    $('.answer').append("<div class = 'text-center allAnswers answer" + i + "' id = '" + classify(answers[i]) + "'> <h3>" + answers[i] + "</h3></div>"); 
    }
    questionCountdown();
}
    

//compare answer and solution
var chooseAnswer = function () {
    if (classify($(this).text()) === classify(theAnswer)) {      
        correct();
        correctCount++;
        questionArray.splice(questionIndex, 1);
        clearInterval(decrementTime);
        if (questionArray.length > 0) {
            setTimeout(nextQuestion, 3000);
            } else {
            setTimeout(finishScreen, 3000);
            }
        } else {
        incorrect();
        incorrectCount++;
        questionArray.splice(questionIndex, 1);
        clearInterval(decrementTime);
        if (questionArray.length > 0) {
            setTimeout(nextQuestion, 3000);
            } else {
            setTimeout(finishScreen, 3000);
            }
        }        
    }

var decrementTime
var questionCountdown = function () {
    decrementTime = setInterval(function () {
        timeLeft--
        $('.time-left').html("<div class = 'text-center time-left'> <h2>Seconds to answer: <br>" + timeLeft + "</h2></div>")
        if (timeLeft == 0) {
            questionArray.splice(questionIndex, 1);      
            clearInterval(decrementTime);
            incorrectCount++;
            timeUp();
            if (questionArray.length > 0) {
            setTimeout(nextQuestion, 3000);
            } else {
            setTimeout(finishScreen, 3000);
            }
        };
    }, 1000);
}

var restartGame = function () {
    questionArray = [
        question1 = new MakeQuestions ("1What movie takes place in NY?", [answer1 = "1Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
        question2 = new MakeQuestions ("2What movie takes place in NY?", [answer1 = "2Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
        question3 = new MakeQuestions ("3What movie takes place in NY?", [answer1 = "3Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
        question4 = new MakeQuestions ("4What movie takes place in NY?", [answer1 = "4Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
        question5 = new MakeQuestions ("5What movie takes place in NY?", [answer1 = "5Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
        question6 = new MakeQuestions ("6What movie takes place in NY?", [answer1 = "6Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
        question7 = new MakeQuestions ("7What movie takes place in NY?", [answer1 = "7Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
        question8 = new MakeQuestions ("8What movie takes place in NY?", [answer1 = "8Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
        question9 = new MakeQuestions ("9What movie takes place in NY?", [answer1 = "9Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
        question0 = new MakeQuestions ("0What movie takes place in NY?", [answer1 = "0Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone", "assets/images/home-alone.gif"),
    ]
    timeLeft = 30;
    correctCount = 0;
    incorrectCount = 0;
    $('.question-area').removeClass('hidden');
    $('.answer-area').removeClass('hidden');
    $('.instructions').addClass('hidden');
    $('.btn').addClass('hidden');
    nextQuestion();
}

var finishScreen = function () {
    $('.instructions').removeClass('hidden');
    $('.feedback-area').addClass('hidden');
    $('.question-area').addClass('hidden');
    $('.answer-area').addClass('hidden');
    $('.instructions').html("<h2>You've finished the quiz! Here's how you did:</h2> <br>" +
                            "<h3>Correct: "+ correctCount +"</h3> <br>" +
                            "<h3>Incorrect: "+ incorrectCount +"</h3> <br>" +
                            "<div class = 'btn btn-primary btn-block restart-btn'>Try Again?</div>");
}

var timeUp = function () {
    $('.question').addClass('hidden');
    $('.answer').addClass('hidden');
    $('.allAnswers').remove();
    $('.feedback-area').removeClass('hidden');
    $('.response').html("<h2>Time's up! The correct answer is " + theAnswer + "</h2>");
    $('.response-gif').html("<img src='" + gifResponse + "' alt='home-alone'>");
}

var correct = function () {
    $('.question').addClass('hidden');
    $('.answer').addClass('hidden');
    $('.allAnswers').remove();
    $('.feedback-area').removeClass('hidden');
    $('.response').html("<h2>You got it!</h2>");
    $('.response-gif').html("<img src='" + gifResponse + "' alt='home-alone'>");
}

var incorrect = function () {
    $('.question').addClass('hidden');
    $('.answer').addClass('hidden');
    $('.allAnswers').remove();
    $('.feedback-area').removeClass('hidden');
    $('.response').html("<h2>Nope! The correct answer is " + theAnswer + "</h2>");
    $('.response-gif').html("<img src='" + gifResponse + "' alt='home-alone'>");
}

$('.start-btn').click(startTrivia);
$(document).on('click', '.allAnswers', chooseAnswer);
$(document).on('click', '.restart-btn', restartGame);
