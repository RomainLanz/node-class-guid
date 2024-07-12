import B from "./b.js";

const job = new B({ name: "John", age: 30 });
const serializedJob = job.serialize();

// Other process...

const unserializeJob = JSON.parse(serializedJob);
const { default: dynamicJobClass } = await import(unserializeJob.path);
const dynamicJob = new dynamicJobClass(unserializeJob.data);

console.assert(dynamicJob instanceof B, "dynamicJob is not an instance of B");

// dynamicJob.handle(unserializeJob.data);
