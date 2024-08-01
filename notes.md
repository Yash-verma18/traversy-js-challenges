
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

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


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

    const word = "Javascript"
    word.slice(1) // avascript
    word.substring(1) // avascript

## Join Method
The join method is a useful array method in JavaScript. It's used to concatenate all elements of an array into a single string.

    const arr = ['Hello', 'World'];
    const str = arr.join(' '); // "Hello World"

## substring Method

    let formatted = "1234567890"
    `(${formatted.substring(0, 3)}) ${formatted.substring(3,6 )}-${formatted.substring(6)}`
    // (123) 456-7890

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
"[^\w\s]" 
Combined, this pattern matches any character that is not a word character or a whitespace character.
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

## Reduce method : 
    const arr = [1, 2, 3, 4, 5];
    let actualSum = arr.reduce((sum, num) => sum + num, 0);

## Formulas: 

    to find the sum of n inclusive numbers

    'n(n+1)/2'

    where n is the length of the array + 1

so for example: 
    let arr = [1,2,3,4,5]
    let n = arr.length + 1
    let sum = n * (n + 1) / 2
    console.log(sum) // 15 
**Check Find missing number for reference and use case.**


## indexOf method :

To get the index of something from a array.

    let arr = ["a", "b", "c"];
    arr.indexOf("b") // 1


## charCodeAt(0) 

its a method which gives us the character code of a character. 

    let arr = ['X', 'Z'];
    let start = arr[0].charCodeAt(0); // 88 is the character code of X.


Always remeber this : 

1. lowercase letters range character code :  97 to 122
2. upperCase letters range character code:  65 to 90.

## String.fromCharCode(88)

Convert the char code to a letter.

    
    String.fromCharCode(88);  // X is the string converted from character code 88.
## ParseFloat : Converts a string to a floating-point number.

    // Return the total sales amount with tax rounded to 2 decimal places
    return parseFloat(totalSalesWithTax.toFixed(2));  // 100.00

## Parse Int :  Converts a strig to a integer
    const num = "024";
    parseInt(num) // 24;

    parseInt("a") // NaN (not a number)

    let val =  parseInt("a")
     
    if(val){
         console.log("the input is number ")    
     }else{
           console.log("the input is string ")
     }

## string manipulation methods 

    trim()
    split()
    join()

## isNan : Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).

    isNaN('a') // true
    isNaN(1) // false
