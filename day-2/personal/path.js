const path = require('path');
const fs = require("fs");

const textPath = path.join(__dirname, "fs-files", "5543", "message-5543.txt");
// console.log(textPath);

const extFile = path.extname(textPath);
// console.log(extFile);

// console.log(__dirname);
// console.log(__filename);
console.log(textPath);

if (extFile === ".txt") {
    console.log("this is txt file")
} else {
    console.log("this is not txt file")
};

fs.readFile(textPath, "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});