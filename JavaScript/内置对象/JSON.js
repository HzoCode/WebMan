const arr = [1, 2, 3, 4, 5];
const obj = { a: 1, b: 2, c: 3 };
let str = JSON.stringify(obj)
let str2 = JSON.stringify(arr);
console.log(str2, arr);
console.log(str,obj); 
let obj2 = JSON.parse(str);
let arr2 = JSON.parse(str2);
console.log(arr2, arr2[0], arr2[1])
console.log(obj2, obj2.a, obj2.b, obj2.c);
console.log(typeof str,typeof obj2);

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();