function solution(t, p) {
  // t = "3141592"	p = "271"
  let answer = "";
  let count = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    answer = t.substring(i, i + p.length);
    if (answer <= p) {
      count++;
    }
  }
  return count; //count = 2
}
