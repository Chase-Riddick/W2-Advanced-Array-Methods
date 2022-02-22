/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/
const vowels = "aAeEiIoOuU";

const hasThreeVowels = string => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelNum = string.split('').reduce((accumulator, currentCharacter) => {
        if (vowels.indexOf(currentCharacter) !== -1) {
            vowels.splice(vowels.indexOf(currentCharacter), 1);
            accumulator += 1;
        }
        else {accumulator}
        return accumulator
        }, 0)
    return (vowelNum >= 3);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
