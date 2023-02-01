function isUnique(array) {
  return array.every((element, index, self) => self.indexOf(element) === index);
}

console.log(isUnique([1, 2, 3, 4])); // true
console.log(isUnique([1, 2, 3, 2])); // false

function isUnique(arr) {
    let seen = {};
    for (let i = 0; i < arr.length; i++) {
      if (seen[arr[i]]) {
        return false;
      }
      seen[arr[i]] = true;
    }
    return true;
  }