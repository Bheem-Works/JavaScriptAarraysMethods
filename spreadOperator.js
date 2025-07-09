let array = [1, 2, 3];
console.log(...array);

const isRaj = true;
const foo = ["name", "juice", isRaj ? "name is raj" : undefined];
console.log(foo);

// assign;
const obj1 = { foo: "boo", x: 42 };
Object.assign(obj1, { x: 19 }); // Object.assing(target,changevalue);
console.log(obj1);

// Merget by using the spread syntax
const object1 = { foo: "bar", y: 12 };
const object2 = { foo: "yaz", y: 43 };
const merge = (...objects) =>
  objects.reduce((acc, curr) => ({ ...acc, ...curr }));
// const merge = (...objects) => ({ ...objects });
const mergeObj = merge(object1, object2);
// const spreadMerge = [...object1, ...object2]; // Not work because the object is not the iretables. Directly
console.log(mergeObj);
// expected output -> foo:"bar",y:12,foo:"yaz",y:43
