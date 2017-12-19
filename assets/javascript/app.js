var newQuestion
var answers
var theAnswer
var questionArray = [
    question1 = new MakeQuestions ("1What movie takes place in NY?", [answer1 = "1Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone"),
    question2 = new MakeQuestions ("2What movie takes place in NY?", [answer1 = "2Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone"),
    question3 = new MakeQuestions ("3What movie takes place in NY?", [answer1 = "3Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone"),
    question4 = new MakeQuestions ("4What movie takes place in NY?", [answer1 = "4Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone"),
    question5 = new MakeQuestions ("5What movie takes place in NY?", [answer1 = "5Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone"),
    question6 = new MakeQuestions ("6What movie takes place in NY?", [answer1 = "6Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone"),
    question7 = new MakeQuestions ("7What movie takes place in NY?", [answer1 = "7Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone"),
    question8 = new MakeQuestions ("8What movie takes place in NY?", [answer1 = "8Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone"),
    question9 = new MakeQuestions ("9What movie takes place in NY?", [answer1 = "9Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone"),
    question0 = new MakeQuestions ("0What movie takes place in NY?", [answer1 = "0Harry Potter", answer2 = "Sorceror's Stone", answer3 = "Home Alone", answer4 = "LOTR"], "Home Alone"),
]

function MakeQuestions (question, answers, solution) {
    this.question = question;
    this.answers = answers;
    this.solution = solution;
}

//choose a random question to display
var randomQuestion = function () {
    var randomNumber = Math.floor(Math.random() * questionArray.length);
    console.log(randomNumber)
    for (var i in questionArray) {
        if (randomNumber == i) {
            newQuestion = questionArray[i].question;
            answers = questionArray[i].answers;
            theAnswer = questionArray[i].solution
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
    $('.question-area').append("<div class = 'text-center time-left'> <h2>Seconds to answer: <br> 30</h2></div>");
    $('.question-area').append("<div class = 'text-center question'> <h2>" + newQuestion + "</h2></div>");  
    for (var i in answers) {
    $('.answer').append("<div class = 'text-center question'> <h3>" + answers[i] + "</h3></div>"); 
    }
    console.log(newQuestion, answers, theAnswer)
}
    

//compare answer and solution
var answerAndSolution = function () {
    var classifySolution = classify(solution);
    console.log(classifySolution);
    if ($('.allAnswers').attr('id') === classifySolution) {
        console.log('hi');
    }
}

var chooseAnswer = function () {
    // console.log(typeof solution)
    // console.log($('.answer').hasClass('.allAnswers'));
    if ($('.answer').hasClass(solution)) {
        console.log('hi');
    }
}


$('.start-btn').click(startTrivia);
$(document).on('click', '.allAnswers', answerAndSolution)
$(document).on('click', '.allAnswers', chooseAnswer)
