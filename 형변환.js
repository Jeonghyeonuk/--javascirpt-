// String() 문자형으로 형변환
// Number() 숫자형으로 형변환
// Boolean() 불린형으로 형변환

// const mathScore = prompt("수학 몇점?");
// const engScore = prompt("영어 몇점?");
// const result = (mathScore + engScore) / 2; //이경우 문자열로 받아와서 숫자로 바꿔야함

const mathScore = Number(prompt("수학 몇점?"));
const engScore = Number(prompt("영어 몇점?"));
const result = (mathScore + engScore) / 2;

console.log(result);

//String 형변환
console.log(
String(3),
String(true),
String(false),
String(null),
String(undefined)
);

//Number 형변환
console.log(
    Number("1234"),     // 1234
    Number("1234adsasd"), //  NaN
    Number(true),   // 1
    Number(false),   // 0
    Number(null), // 0
    Number(undefined) // NaN
);

// Boolean 형변환
// false가 되는경우
// 숫자0, 빈문자열 "", null, undefined, NaN
// 나머지는 true