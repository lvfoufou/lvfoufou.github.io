import { a, b } from "./3.js";

const sum = () => {
  console.log(a + b);
  return a + b;
};
const show = () => {
  console.log("这执行了show");
  return 1;
};
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    return `我的名字是${this.name}`;
  }
}

export { a, b, sum, show };
export default {
  Person
};
