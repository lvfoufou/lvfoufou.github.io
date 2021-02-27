const fs = require("fs");

//简单封装 fs封装成一个promise
const readFile = function (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

//async
async function fn() {
  try {
    f1 = await readFile("data/a.txt");
    f2 = await readFile("data/b.txt");
    f3 = await readFile("data/c.txt");
  } catch (e) {}
  console.log(f1.toString());
  console.log(f2.toString());
  console.log(f3.toString());
}
console.log(fn());
