const Stack = require('./stack');

function balancedParenthesis(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] == ')') {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(str[i]);
    }
    // console.log("stack", stack)
  }

  return stack.isEmpty() ? true : false;
}

module.exports = balancedParenthesis;
