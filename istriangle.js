const inputs = document.querySelectorAll(".userInput");
const isTriangleBtn = document.querySelector("#isTrianle");
const outputE1 = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    // console.log(sumOfAngles);
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngles===180){
        outputE1.innerText = "yay,the angles form a triangle";
    }
    else{
        outputE1.innerText = "oh ho! The angles don't form a triangle";
    }

}

isTriangleBtn.addEventListener("click", isTriangle)