// example

function sayHi() {
    console.log("hi");
}

sayHi.color = "blue";

console.log(sayHi.color)

// blah is the number 5
const blah = new Number(5);
blah.hide = function () {
    return("I'm hiding");
};

console.log(`${blah} says ${blah.hide()}`)