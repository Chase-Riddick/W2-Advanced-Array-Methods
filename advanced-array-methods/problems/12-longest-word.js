/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/


const longestWord = string => {
    let currentLongestCharacterCount = null;
    let currentLongestIndex = null;
    let stringAsArray = string.split(' ');
    console.log(stringAsArray);
    stringAsArray.forEach((word, index) => {
        if (word.length > currentLongestCharacterCount) {
            currentLongestIndex = index;
            currentLongestCharacterCount = word.length;
        }
    });
    if (currentLongestIndex === null) {
        return ''
    }
    return stringAsArray[currentLongestIndex];
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
