// Ask the user if they want to continue
// if they do then wait 2 seconds (2000ms)
// then ask them again
// else close app

// use readline, setTimeout
const readline = require("readline");

const app = readline.createInterface({
    input: process.stdin,
    output: process.stnout
});

function checkContinue() {
app.question(
    `Want to continue?
    1. Yes
    2. No`,
function (userAnswer) {
    if(userAnswer === "1") {
        setTimeout(function () {
            checkContinue();
        }, 2000)
    } else {
        app.close
    }
}
);
}