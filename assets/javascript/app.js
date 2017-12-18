var newQuestion
var questionArray = [
    question1 = {
        question: "1What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question2 = {
        question: "2What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question3 = {
        question: "3What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question4 = {
        question: "4What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question5 = {
        question: "5What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question6 = {
        question: "6What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question7 = {
        question: "7What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question8 = {
        question: "8What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question9 = {
        question: "9What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question10 = {
        question: "10What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
]

var randomQuestion = function () {
    var randomNumber = Math.floor(Math.random() * questionArray.length);
    console.log(randomNumber)
    for (var i in questionArray) {
        if (randomNumber == i) {
            newQuestion = questionArray[i].question;
        }
    }
}

var startTrivia = function () {
randomQuestion();
$('.instructions').addClass('hidden');
$('.btn').addClass('hidden');
$('.question-area').append("<div class = 'text-center time-left'> <h2>Seconds to answer: <br> 30</h2></div>");
$('.question-area').append("<div class = 'text-center question'> <h2>" + newQuestion + "</h2></div>");
$('.answer').append("")
}


$('.start-btn').click(startTrivia);
