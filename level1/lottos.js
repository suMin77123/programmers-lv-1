const lottos = (lottos, win_nums) => {
  const frequencyArray = {};

  lottos.forEach((element) => {
    frequencyArray[element] = (frequencyArray[element] ?? 0) + 1;
  });

  const zeroCount = frequencyArray[0] ?? 0;

  let matchingCountWithoutZero = 0;

  win_nums.forEach((element) => {
    if (!frequencyArray[element]) return;

    matchingCountWithoutZero++;
  });

  const matchingCountToRank = [6, 6, 5, 4, 3, 2, 1];

  const answer = [
    matchingCountToRank[matchingCountWithoutZero + zeroCount],
    matchingCountToRank[matchingCountWithoutZero],
  ];

  return answer;
};

export default lottos;
