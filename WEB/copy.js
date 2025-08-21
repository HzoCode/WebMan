/**
 * 浅拷贝
 * 拓展语法(...)  Array.prototype.concat()  Array.prototype.slice() Array.form() Object.assign()
 */
// const str = "string"

// console.log(str, typeof str)
// console.log(Array.from(str), Object.prototype.toString.call(Array.from(str))) 

const obj = {a: 1, b: 2, c: 3, d: {e: 4, f: 5}};
// const obj2 = {...obj};
const obj2 = Object.assign({}, obj);
obj.a = 100;
obj2.d.e = 33;
console.log(obj2, obj);


const arr = [1, 2, 3, 4, 5,{a: 1, b: 2, c: 3}];
const arr2 = arr.slice();
// const arr2 = arr.concat();
// const arr2 = Array.from(arr);
arr[0] = 100;
// arr2[5].a = 33;
console.log(arr2, arr);

/**
 * 深拷贝
 * JSON.parse(JSON.stringify()) 手写递归  window.structuredClone() lodash.cloneDeep()
 */

const dObj = {a: 1, b: 2, c: 3, d: {e: 4, f: 5}};
// const dObj2 = JSON.parse(JSON.stringify(dObj));
const dObj2 = structuredClone(dObj);
dObj.a = 100;
dObj2.d.e = 33;
console.log(dObj2, dObj);