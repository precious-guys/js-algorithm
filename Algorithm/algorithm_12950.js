//arr1 = [[1,2],[2,3]];
//arr2 = [[3,4],[5,6]]
function solution(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(sum);
  }
  return answer; //[[4,6],[7,9]];
}
