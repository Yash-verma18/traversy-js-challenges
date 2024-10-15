const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
  const queue = new Queue();

  for (let i = str.length - 1; i != -1; i--) {
    queue.enqueue(str[i]);
  }

  let reverseResult = '';

  for (let i = 0; i < str.length; i++) {
    const enqueChar = queue.dequeue(str[i]);
    reverseResult += enqueChar;
  }

  return reverseResult;
};

module.exports = reverseStringWithQueue;
