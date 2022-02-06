const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn')
const outputE1 = document.querySelector('#output');

function calculateSumOfSquares(a, b){
    const sumOfSqares = a*a + b*b;
    // console.log(sumOfSqares);
    return sumOfSqares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value) ,Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputE1.innerText = "the length of hypotenuse is " + 
    lengthOfHypotenuse
}

hypotenuseBtn.addEventListener("click",calculateHypotenuse);