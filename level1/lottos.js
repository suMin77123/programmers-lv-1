const lottos = (lottos, win_nums) => {
  const frequencyArrayWithLottos = {};
  const frequencyArrayWithWin = {};

  lottos.forEach((element) => {
    frequencyArrayWithLottos[element] =
      (frequencyArrayWithLottos[element] ?? 0) + 1;
  });

  win_nums.forEach((element) => {
    frequencyArrayWithWin[element] = (frequencyArrayWithWin[element] ?? 0) + 1;
  });

  const zeroCount = frequencyArrayWithLottos[0] ?? 0;

  let matchingCountWithoutZero = 0;

  lottos.forEach((element) => {
    if (element !== 0 && element in frequencyArrayWithWin) {
      matchingCountWithoutZero++;
    }
  });

  const matchingCountToRank = [6, 6, 5, 4, 3, 2, 1];

  const answer = [
    matchingCountToRank[matchingCountWithoutZero + zeroCount],
    matchingCountToRank[matchingCountWithoutZero],
  ];

  return answer;
};

export default lottos;
