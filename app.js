const fs = require("fs");
const lodash = require("lodash");
const utils = require("./utils");
const lodashModule = require("./lodashModule");

function mainRead() {
  fs.readFile("./data.txt", "utf-8", (err, data) => {
    if (err) throw err;
    utils.printFile(data);
    lodashModule.sumWords(data);
    lodashModule.reverse(data);
    lodashModule.uniqWords(data);
    const upper = lodashModule.uniqUpperCase(data);
    const overFive = lodashModule.uniqOverFive(data);
    const vowels = lodashModule.sumOfVowels(data);
    let result = upper + "\n" + overFive + "\n" + vowels + "\n";
    utils.writeToFile(result);
  });
}
mainRead();
