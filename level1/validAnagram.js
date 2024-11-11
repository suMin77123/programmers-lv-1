const validAnagram = (text1, text2) => {
  if (text1.length !== text2.length) return false;

  const frequencyText = {};

  for (let i = 0; i < text1.length; i++) {
    const char = text1[i];
    frequencyText[char] = (frequencyText[char] ?? 0) + 1;
  }
  for (let i = 0; i < text2.length; i++) {
    const char = text2[i];
    if (!frequencyText[char]) return false;
    frequencyText[char]--;
  }

  return true;
};

export default validAnagram;
