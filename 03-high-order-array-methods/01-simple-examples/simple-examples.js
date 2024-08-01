const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */

const mapResult = numbers.map((num) => {
  return num * 2;
});

console.log('mapResult', mapResult);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const filterResult = numbers.filter((num) => {
  return num > 2;
});

console.log('filterResult', filterResult);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const reduceResult = numbers.reduce((total, num) => {
  return total + num;
}, 0);

console.log('reduceResult', reduceResult);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

// Its a short version of for loop.

// const forEachResult = numbers.forEach((num) => {
//   console.log('num', num);
// });

/**
 * find: Returns the first array element that satisfies a specified condition.
 */

// it does not return an array, it give a number.
const findResult = numbers.find((num) => {
  return num > 2;
});

console.log('findResult', findResult);

/**
 * some: Checks if at least one array element satisfies a condition.
 *
 * it gives you true or false, if a value exist on the condition you added. But only return the first element that satisfies a condition
 */

const someResult = numbers.some((num) => {
  return num < 0;
});

console.log('someResult', someResult);

/**
 * every: Checks if all array elements satisfy a condition.
 *
 * It will go to each element to check the condition. so it kinda good for checking the whole array
 */

const everyResult = numbers.every((num) => {
  return num < 0;
});

console.log('everyResult', everyResult);
