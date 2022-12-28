let s = "asdfasdfas asdfasfasdf asdfasf";
s = s.split(" ");
let answer = "";

for (let i = 0; i < s.length; i++) {
  let str = [...s[i]];
  console.log("str : " + str);
  for (let j = 1; j <= str.length; j++) {
    if (j == 1 || j % 2 == 1) {
      answer = answer + str[j - 1].toUpperCase();
    } else {
      answer = answer + str[j - 1];
    }
  }
  if (i + 1 !== s.length) {
    answer = answer + " ";
  }
}
console.log(answer);

// const arr = ["h", "i", "k"];
// const arrJoin = arr.join();
// console.log(arrJoin[0].toUpperCase());
