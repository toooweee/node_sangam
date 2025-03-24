const getWidthHeight = () => ({
  width: 100,
  height: 200,
});

const getWidthHeight2 = () => {
  return {
    width: 100,
    height: 200,
  };
};

console.log(getWidthHeight());
console.log(getWidthHeight2());

const getConfig = () => {
  return {
    host: "localhost",
    port: 3000,
  };
};

const getConfig2 = () => ({
  host: "localhost",
  port: 3000,
});
