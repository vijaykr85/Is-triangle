const quizform = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelectorAll("#submit-answer-btn")
const outputE1 = document.querySelector("#output");

const correctAnswers = ["90","right angled"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizform);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    console.log(score);
    outputE1.innerText = "your score is " + score; 
}

submitAnswerBtn.addEventListner("click", calculateScore);