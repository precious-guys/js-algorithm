const reverseCard = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\\n");
  console.log(input);
  let arr = [];
  for (let i = 1; i < 21; i++) {
    arr.push(i);
  }
  input.forEach((n) => {
    let start = parseInt(n.split(" ")[0]) - 1;
    let end = parseInt(n.split(" ")[1]);
    arr = [
      ...arr.slice(0, start),
      ...arr.slice(start, end).reverse(),
      ...arr.slice(end),
    ];
  });
  console.log(arr.join(" "));
};

reverseCard();
