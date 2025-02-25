// import {calculateCircleArea} from "./math.js";
import * as math from "./math.js";
import clearConsole from "./other.js";

console.log("R = 2:", math.calculateCircleArea(2));

console.log("Basic PI:", math.moreAccuratePI);

clearConsole();

const person = { name: "Ivy", walk: true };

const ivy = {...person, age: 742, name: "Ivy Spivy"};

console.log("ivy", ivy);

const {age, ...restOfIvyDeets} = ivy;

console.log("restOfIvyDeets", restOfIvyDeets);

const badArray = [
[1,2],
[3, 4],
[5, 6],
7,
[
    [8, 9],
    [10, 11],
],
];

// flat goes down 1 level
console.log(badArray.flat().flat());

// ? prevents errors from missing properties
ivy.frog?.goToTheStore();

ivy.frog = 0;

// changes value if current true, &&=
console.log("&&:", ivy.frog && "rat");
// changes value if current false, ||=
console.log("||:", ivy.frog || -5);
// changes value if null or undefined, ??=
console.log("??:", ivy.frog ?? 100);

if (ivy.toad === null || typeof ivy.toad === "undefined") {
    ivy.toad = 10;
}

ivy.toad ??= 30;
