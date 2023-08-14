const fs = require("fs");
const lodash = require("lodash");

function sumOfVowels(data) {
  const vowelsCount = [];
  let words = lodash.words(data);
  words = lodash.uniq(words);
  for (let word of words) {
    let count = 0;
    for (let letter of word) {
      if (lodash.includes(["a", "i", "u", "e", "o"], letter)) {
        count++;
      }
    }
    vowelsCount.push({ word, count });
  }
  console.log(vowelsCount);
  return vowelsCount;
}

function uniqOverFive(data) {
  let words = lodash.words(data);
  words = lodash.uniq(words);
  let overFive = words.filter((word) => word.length > 5);
  overFive = overFive.join(" ");
  console.log(overFive);
  return overFive;
}

function uniqUpperCase(data) {
  let words = lodash.words(data);
  words = lodash.uniq(words);
  words = words.join(" ");
  let stringWords = words.toUpperCase();
  console.log(stringWords);
  return stringWords;
}

function uniqWords(data) {
  let words = lodash.words(data);
  words = lodash.uniq(words);
  let stringWords = words.join(" ");
  console.log(stringWords);
  sumWords(stringWords);
}

function reverse(data) {
  let reverseData = lodash.words(data);
  reverseData = lodash.reverse(reverseData);
  reverseData = reverseData.join(" ");
  console.log(reverseData);
}

function sumWords(data) {
  let words = lodash.words(data);
  console.log(words.length);
}

module.exports = {sumWords, reverse, uniqWords, uniqUpperCase, uniqOverFive, sumOfVowels}