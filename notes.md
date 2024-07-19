
# JavaScript Syntax and Useful Built-in Libraries

## Basic Syntax

### Variables

let x = 5;
const PI = 3.14;
var oldVar = "legacy";



### Functions

function greet(name) {
    return `Hello, ${name}!`;
}

// Arrow function
const multiply = (a, b) => a * b;


### Loops

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Do-while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);


## Useful Built-in Libraries

### Math

    Math.random(); // Returns a random number between 0 and 1
    Math.floor(2.7); // Returns 2
    Math.ceil(2.1); // Returns 3
    Math.max(1, 2, 3); // Returns 3


### Date

    const now = new Date();
    now.getFullYear(); // Returns current year
    now.getMonth(); // Returns current month (0-11)
now.getDate(); // Returns current day of the month


### Array Methods

    const arr = [1, 2, 3, 4, 5];
    arr.map(x => x * 2); // Returns [2, 4, 6, 8, 10]
    arr.filter(x => x % 2 === 0); // Returns [2, 4]
    arr.reduce((acc, cur) => acc + cur, 0); // Returns 15


### String Methods

    const str = "Hello, World!";
    str.toLowerCase(); // Returns "hello, world!"
    str.toUpperCase(); // Returns "HELLO, WORLD!"
    str.split(", "); // Returns ["Hello", "World!"]
    str.includes("World"); // Returns true
    str.replace("World", "Universe"); // Returns "Hello, Universe!"

## Splice method
Syntax: array.slice(startIndex, endIndex)
Extracting a portion of an array:
    const fruits = ['apple', 'banana', 'orange', 'mango'];
    const citrus = fruits.slice(2, 4); // ['orange', 'mango']

    const lastTwo = fruits.slice(-2); // ['orange', 'mango']
    const firstThree = fruits.slice(0, 3);

    const str = "Hello, World!";
    const world = str.slice(7); // "World!"

## Join Method
The join method is a useful array method in JavaScript. It's used to concatenate all elements of an array into a single string.

    const arr = ['Hello', 'World'];
    const str = arr.join(' '); // "Hello World"

## Reverse Method
The reverse method is an array method in JavaScript that reverses the order of elements in an array in place.

    const arr = [1, 2, 3, 4, 5];
    arr.reverse(); // Output: [5, 4, 3, 2, 1]

## Regex patterns

.replace(/[^\w\s]/g, ''): Removes special characters, leaving only word characters and whitespace.****

/[^\w\s]/g: This is a regular expression pattern.
/.../: The pattern is enclosed in slashes.
^: The caret symbol inside the brackets [^...] means "not" or "negation".
\w: This matches any word character (alphanumeric characters and underscore). Specifically, it matches [a-zA-Z0-9_].
\s: This matches any whitespace character (spaces, tabs, and line breaks).
[^\w\s]: Combined, this pattern matches any character that is not a word character or a whitespace character.
g: The global flag, meaning that the pattern should be applied to all matches in the string, not just the first one.

.split(/\s+/): Splits the cleaned string into an array of words, using one or more whitespace characters as the separator. This ensures that multiple spaces between words do not result in empty strings in the array.


## Delete anything that is not a number or a letter
    let purifyString = str.replace(/[^a-z0-9]/g,"");


## Set method
// The Set object lets you store unique values of any type, whether primitive values or object references.

const arr = [1, 2, 1, 1, 1, 1, 1, 1, 1, 1];
newSet = new Set(arr); // {1, 2}


## Convert any set to array 

Array.from()

    const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    Array.from(new Set(arr)); // [1]