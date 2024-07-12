import A from "./a.js";

export default class B extends A {
  constructor(data) {
    super();

    this.data = data;
  }

  handle(data) {
    console.log(data);
  }
}
