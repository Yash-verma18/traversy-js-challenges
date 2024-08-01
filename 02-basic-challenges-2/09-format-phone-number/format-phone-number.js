function formatPhoneNumber(number) {
  startingSlice = number.slice(0, 3).join('');
  midSlice = number.slice(3, 6).join('');
  endSlice = number.slice(6).join('');
  return `(${startingSlice}) ${midSlice}-${endSlice}`;
}
// function formatPhoneNumber(number) {
//   let starting = '';
//   for (let i = 0; i < 3; i++) {
//     starting += number[i];
//   }

//   let mid = '';
//   for (let i = 3; i < 6; i++) {
//     mid += number[i];
//   }

//   let end = '';
//   for (let i = 6; i < number.length; i++) {
//     end += number[i];
//   }
//   return `(${starting}) ${mid}-${end}`;
// }

module.exports = formatPhoneNumber;
