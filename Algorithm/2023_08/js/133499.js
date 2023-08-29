const bubbling = ["aya", "yeye", "u", "maa"];

function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"]; //발음이 가능한 단어
  let cnt = 0;

  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];

    for (let j = 0; j < words.length; j++) {
      if (babble.includes(words[j].repeat(2))) {
        //같은 단어 2번이상 연속시 멈춤
        break;
      }

      babble = babble.split(words[j]).join(" "); //for문을 통해 babbleing[i]의 words[j]를 제거하고 join(" ");
    }

    if (babble.split(" ").join("").length === 0) {
      //공백을 제거한 문자열의 길이가 0이 아니라면 cnt++;
      cnt++;
    }
  }

  return cnt;
}

console.log(solution(bubbling));
