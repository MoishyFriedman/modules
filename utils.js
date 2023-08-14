const fs = require("fs");

function writeToFile(data) {
  const stringData = String(data);
  fs.writeFile("results.txt", data, (err) => {
    if (err) throw err;
  });
}

function printFile(data) {
  console.log(data);
}

module.exports = { printFile, writeToFile };
