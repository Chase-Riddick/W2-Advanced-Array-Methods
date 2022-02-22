/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/
const vowels = "aAeEiIoOuU";

const splitSentenceAndWords = sentence => {
    let newArray = sentence.split(' ').map(word => word.split(''));
    return newArray;
}

const isVowel = character => {
    return (vowels.includes(character));
}

const progressiveVowelIndex = word => {
    return word.reduce((accumulator, character, index) => {
        return isVowel(character) ? accumulator = index : accumulator;
    }, 0);
}

// const hipsterfy = sentence => {
//     let sentenceArrAndSubArrs = splitSentenceAndWords(sentence);
//     let lastVowelIndex = 0;
//     for (let i = 0; i < sentenceArrAndSubArrs.length; i++) {
//         for (let j = 0; j < sentenceArrAndSubArrs[i].length; j++) {
//             if (isVowel(sentenceArrAndSubArrs[i][j])) {
//                 lastVowelIndex = j;
//             }
//         }
//         sentenceArrAndSubArrs[i][lastVowelIndex] = '';
//         sentenceArrAndSubArrs[i] = sentenceArrAndSubArrs[i].join('');
//     }
//     return sentenceArrAndSubArrs.join(' ');
// }

// const hipsterfy = sentence => {
//         let sentenceArrAndSubArrs = splitSentenceAndWords(sentence);
//         let newArray = sentenceArrAndSubArrs.map(word => {
//             let wordIndex = progressiveVowelIndex(word);
//             word[wordIndex] = '';
//             let newWord = word.join('');
//             return newWord;
//         });
//         let newSentence = newArray.join(' ');
//         return newSentence;
//     }

const hipsterfy = sentence => {
        let sentenceArrAndSubArrs = splitSentenceAndWords(sentence);
        let newSentence = sentenceArrAndSubArrs.reduce((accumulator, word, currentIndex, array) => {
            let finalVowelIndex = progressiveVowelIndex(word);
            word[finalVowelIndex] = '';
            if (currentIndex === array.length - 1) {
                let newWordEntry = word.join('');
                return accumulator + newWordEntry
            }
            else {
                let newWordEntry = word.join('') + " ";
                return accumulator + newWordEntry
            }
        }, '');
        return newSentence;
    }

// hipsterfy('When should everyone wake up?');
console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
// console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
// console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
