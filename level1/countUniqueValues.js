const countUniqueValues = (sortedArray) => {
  let uniqueValueCount = sortedArray.length === 0 ? 0 : 1;

  let left = 0;
  let right = 1;

  while (right < sortedArray.length) {
    if (sortedArray[left] === sortedArray[right]) {
      right++;
    } else {
      uniqueValueCount++;
      left = right;
      right++;
    }
  }

  return uniqueValueCount;
};

export default countUniqueValues;
