const path = require("path");

console.log("frog path:", path.resolve("frog"));

const functionsFolder = path.resolve("functions, cow");

console.log( "functions index.js:", path.join(functionsFolder, "index.js"));

console.log( "functions functions:", path.join(functionFoloder, "functions"));

console.log("basename of functions directory", path.basename(functionsFolder))