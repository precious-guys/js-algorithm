function solution(s) {
  //s = "try hello world";
  s = s.split(" ");
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let str = [...s[i]];
    for (let j = 1; j <= str.length; j++) {
      if (j == 1 || j % 2 == 1) {
        answer = answer + str[j - 1].toUpperCase();
      } else {
        answer = answer + str[j - 1].toLowerCase();
      }
    }

    if (i + 1 !== s.length) {
      answer = answer + " ";
    }
  }
  return answer; //"TrY HeLlO WoRlD";
}
