export function solution(lottos, win_nums) {
  const zeroArray = lottos.filter((number) => number === 0);
  const zeroCount = zeroArray.length;
  if (zeroCount === 6) {
    return [1, 6];
  }

  const anotherArray = lottos.filter((number) => number !== 0);

  let correctCount = 0;
  anotherArray.forEach((number) => {
    win_nums.forEach((winNum) => {
      if (winNum === number) {
        correctCount++;
      }
    });
  });

  const ranking = [6, 5, 4, 3, 2, 1];

  if (correctCount === 0) {
    return [ranking[correctCount + zeroCount], ranking[correctCount]];
  }

  var answer = [
    ranking[correctCount + zeroCount - 1],
    ranking[correctCount - 1],
  ];
  return answer;
}
