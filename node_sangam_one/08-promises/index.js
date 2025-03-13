const delay = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

console.log("alo");

delay(1000).then(() => {
  console.log("after 1s");
});

console.log("alo");
