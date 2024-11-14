const maxSubarraySum = (array, num) => {
  if (array.length === 0) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;

  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = maxSum < tempSum ? tempSum : maxSum;
  }

  return maxSum;
};

export default maxSubarraySum;
