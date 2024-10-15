const Stack = require('./stack');

function reverseStringStack(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let reverse = '';

  for (let i = 0; i < str.length; i++) {
    reverse += stack.pop(str[i]);
  }

  return reverse;
}

module.exports = reverseStringStack;
