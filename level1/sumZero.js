const sumZero = (sortedArray) => {
  let leftPoint = 0;
  let rightPoint = sortedArray.length - 1;

  while (leftPoint < rightPoint) {
    const sum = sortedArray[leftPoint] + sortedArray[rightPoint];

    if (sum === 0) return [sortedArray[leftPoint], sortedArray[rightPoint]];

    if (sum > 0) {
      rightPoint--;
    }
    if (sum < 0) {
      leftPoint++;
    }
  }

  return null;
};
export default sumZero;
