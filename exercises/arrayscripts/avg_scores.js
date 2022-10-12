let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

//part1 = where to start, creating count variable and initializing it (start)
//part 2 = conditional, comparision that returns true or false, should loop continue (end)
//part3 = how to count
function getAverage(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total = total + scores[i];
  }
  return total / scores.length;
}

let averageScore = getAverage(myScores);
console.log(averageScore.toFixed(2));
