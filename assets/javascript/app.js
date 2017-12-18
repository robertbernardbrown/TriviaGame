var questionObject = {
    question1: {
        question: "What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question2: {
        question: "What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question3: {
        question: "What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question4: {
        question: "What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question5: {
        question: "What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question6: {
        question: "What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question7: {
        question: "What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question8: {
        question: "What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question9: {
        question: "What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
    question10: {
        question: "What movie takes place in NY?",
        answers: ["Harry Potter", "Sorceror's Stone", "Home Alone", "LOTR"],
        solution: "Home Alone"
    },
}

var randomQuestion = function () {

}

var startTrivia = function () {
$('.instructions').addClass('hidden');
$('.btn').addClass('hidden');
$('.question-area').append("<div class = 'text-center time-left'> <h2>Seconds to answer: <br> 30</h2></div>");
$('.question-area').append("<div class = 'text-center question'> <h2>Which movie takes place in NY?</h2></div>");
// $('.answer').append("")
}


$('.start-btn').click(startTrivia);
