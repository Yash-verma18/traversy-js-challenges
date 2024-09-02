function phoneNumberDirectory(phoneNumbers) {
  const phoneMap = new Map();

  for (let number of phoneNumbers) {
    const currentData = number.split(':');
    phoneMap.set(currentData[0], currentData[1]);
  }

  return phoneMap;
}

module.exports = phoneNumberDirectory;
