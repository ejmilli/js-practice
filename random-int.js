const random = (num) => {
  const intnum = Math.floor(Math.random() * num) + 1;
  if (intnum === num) {
    return "GoodWork";
  } else {
    return "mismatched";
  }
};

console.log(random(10));
