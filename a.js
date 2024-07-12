export default class A {
  serialize() {
    return JSON.stringify({
      path: import.meta.filename,
      data: this.data,
    });
  }
}
