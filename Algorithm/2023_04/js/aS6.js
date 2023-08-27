let graph = {
  1: [2, 3, 5, 7],
  2: [1, 5, 6],
  3: [1, 4],
  4: [3],
  5: [1, 2],
  6: [2],
  7: [1],
};

let start = 3;
let visitList = [];
let queue = [];

for (let i = 0; i < Object.keys(graph).length; i++) {
  console.log(i);
}

const intoQueue = (num) => {
  //3
  queue.push(start); //queue = [3]
  visitList = queue[0];

  for (let i = 0; i < graph[num].length; i++) {
    //graph[num] = [1,4]
    for (let i = 0; i < visitList.length; i++) {
      graph[num] = graph[num].filter((x) => x != visitList[i]);
    }
    queue.push(graph[num][i]); //queue = [3, 1, 4]
  }

  queue.shift(); //queue = [1, 4]
  start = queue[0]; // start = 1;
};
