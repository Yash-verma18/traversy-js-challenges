function countDown(num) {
  // Base Value
  //   if (num <= 0) {
  //     console.log('All Done!');
  //     return;
  //   }

  console.log(num);
  num--;
  countDown(num);
}

countDown(10);

module.exports = countDown;
