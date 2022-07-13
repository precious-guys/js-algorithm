function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.split("").every((item) => !isNaN(item));
  } else {
    return false;
  }
}
