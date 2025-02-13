const mathFuncs = require("./functions");

const {calcTriArea} = mathFuncs

const ans1 = calcTriArea({
    base: 3, height: 7});
console.log(ans1); // OUTPUT: 10.5

const ans2 = calcTriArea({
    base: 2});
console.log(ans2); // OUTPUT: 1

const ans3 = calcTriArea();
console.log(ans3); // OUTPUT: 0.5
