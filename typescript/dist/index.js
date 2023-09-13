import fs from "fs";
console.log(123);
function addNumber(a, b) {
    return a + b;
}
const res = addNumber(3, 4);
console.log(res);
fs.writeFileSync("test.txt", "test");
