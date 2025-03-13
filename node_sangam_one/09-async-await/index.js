const delay = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const delayedGreet = async (ms) => {
  await delay(ms);
  console.log("Hello from Islam");
};

delayedGreet(4000);
