const countUniqueValues = (sortedArray) => {
  if (sortedArray.length === 0) return 0;

  let left = 0;
  let right = 1;

  while (right < sortedArray.length) {
    if (sortedArray[left] !== sortedArray[right]) {
      left++;
      sortedArray[left] = sortedArray[right];
    }
    right++;
  }

  return left + 1;
};

export default countUniqueValues;
