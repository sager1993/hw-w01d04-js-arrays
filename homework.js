//  1.
//  sum all numbers, from 1 to num
const summation = function (num) {
    let sum = 0;
    for (i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

//  2.
//  sum all even numbers equal or less than num
const summationEven = function (num) {
    let sum = 0;
    if (num % 2 == 1)
        num--;

    return summation(num / 2) * 2;
}

//  3.
//  average numbers array
const avg = function (numArr) {
    let sum = 0;
    for (i = 0; i < numArr.length; i++) {
        sum += numArr[i];
    }
    return sum / numArr.length;
}

//  4.
//  reverse string
const reverse = function (inString) {
    let splitString = inString.split("");
    let reverseArray = splitString.reverse();
    return reverseArray.join("");
}

//  5.
//  combine an array of words with dash
const addDashes = function (wordArr) {
    return wordArr.join("-");
}

//  6.
//  count up then down in a string
const countUpAndDown = function (num) {
    const countArr = [num];
    for (i = num - 1; i > 0; i--) {
        countArr.unshift(i);
        countArr.push(i);
    }
    return countArr.join(" ");
}

//  7.
//  list words with an A from a word array
const wordsWithA = function (wordArr) {
    const wordsA = [];
    let wordS = ""
    for (i = 0; i <= wordArr.length; i++) {
        wordS = ""+wordArr[i];
        if (wordS.indexOf('a') != -1 || wordS.indexOf('A') != -1)
            wordsA.push(wordS);
    }
    return wordsA;
}

//  8.
//  list words with a selected letter from word array
const wordsWithLetter = function (letter, wordArr) {
    const wordsL = [];
    let wordS = ""
    for (i = 0; i <= wordArr.length; i++) {
        wordS = ""+wordArr[i];
        if (wordS.indexOf(letter) != -1)
            wordsL.push(wordS);
    }
    return wordsL;
}

//  9.
//  find the longest word in a string
const longestWord = function (inString) {
    let wordArr = inString.split(' ');
    let largestWord = 0;
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i].length > wordArr[largestWord].length) {
            largestWord = i;
        }
    }
    return wordArr[largestWord];
}

//  10.
//  return the largest even number from numbers array
const largestEvenNumber = function (numArr) {
    let largestEven = -999;

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 == 0) {
            if (numArr[i] > largestEven) {
                largestEven = numArr[i];
            }
        }
    }
    return largestEven;
}