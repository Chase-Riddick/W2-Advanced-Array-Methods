/*

Write a function `maxWithReduce(nums)` that takes in an array of numbers.
The function should return the largest number of the array.

You can assume that the array will not be empty.

Solve this using Array's `reduce()` method.

Examples:

console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
console.log(maxWithReduce([-2, -3, -7, 3])); // 3

*/
// let maxWithReduce = array => {
//   return array.reduce((accumulator,num) => {
//     if (num > accumulator) {accumulator = num; return accumulator;}
//       else {return accumulator}
//     }, 0)
// }

let maxWithReduce = array => {
  return array.reduce((accumulator,num) => {
  return (num > accumulator ? accumulator = num : accumulator)}, 0)
}

console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
console.log(maxWithReduce([-2, -3, -7, 3])); // 3

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = maxWithReduce;
} catch (e) {
  module.exports = null;
}