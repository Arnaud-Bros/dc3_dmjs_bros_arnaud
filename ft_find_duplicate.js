function hasDuplicates(arr) {
  let seenValues = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (seenValues.has(arr[i])) {
      return true;
    }
    seenValues.add(arr[i]);
  }
  return false;
}