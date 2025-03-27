let done = true;

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = "Here is the thing I built";
    resolve(workDone);
  } else {
    const why = "Still working on something else";
    reject(why);
  }
});

const проверитьЕслиСделано = () => {
  isItDoneYet.then((ok) => console.log(ok)).catch((err) => console.log(err));
};

проверитьЕслиСделано();
