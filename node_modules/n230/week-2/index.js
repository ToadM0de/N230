// pre-built
const readline = require("readline")

// installed dependencies

//custom modules

const mathFuncs = require("./functions");

const { calcTriArea,} = mathFuncs

const ans1 = calcTriArea({
    base: 3, height: 7});
console.log(ans1); // OUTPUT: 10.5

const ans2 = calcTriArea({
    base: 2});
console.log(ans2); // OUTPUT: 1

const ans3 = calcTriArea();
console.log(ans3); // OUTPUT: 0.5

const app = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

app.question(`Enter the height of the triangle:
    height: (${calcTriArea.props.height})`, 
    function (userHeight) {
        console.log(userHeight);

        app.question(`Enter the base of the triangle:
    base: (${calcTriArea.props.base})`,
     function(userBase) {
        const userAns = calcTriArea({base: userBase,
            height: userHeight});
        console.log(`User Ans: ${userAns}`);
        app.close();
    }
    );
 }
);

