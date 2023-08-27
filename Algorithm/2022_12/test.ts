interface A {
  age?: number;
  name: string;
}

let bye = {
  name: "민성",
};

function good(hi: A) {
  console.log(hi);
}

good(bye);
