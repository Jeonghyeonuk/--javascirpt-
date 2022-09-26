
//기본 연산자

console.log(1 + 2); // 더하기
console.log(10 - 3); // 빼기
console.log(3 * 2); // 곱하기
console.log(4 / 2); // 나누기
console.log(5 % 2); // 나머지

const a = "나는 ";
const b = "정현욱";

console.log(a + b) // "나는 정현욱"

const q = 30;

console.log(a + q + "살 " + b); // "나는 30살 정현욱"



// NaN = Not a number

const name = "Mike";
const y = name/2;

console.log(y); // NaN

//Booldean;

const c = true; // 참
const d = false; // 거짓

const name2 ="Mike";
const age = 30;

console.log(name2 == "Mike"); // true
console.log(age > 40); // false

//null 과 undifined;

let money;
console.log(money); // undifined

let user = null;
console.log(user) // null (존재하지않는다)

const array = [1,2,3]

// typeof 연산자

console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof "xxx");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof array);