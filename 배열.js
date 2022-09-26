// 배열(Array) : 순서가 있는 리스트
// 문자, 숫자, 객체, 함수 등도 포함 가능하다
// length : 배열의 길이
// push() : 배열 끝에 추가
// pop() : 배열 긑 요소 삭제
// unshift() : 배열 맨앞에 추가

let days = ['mon', 'tue', 'wed']

console.log(days)

days[1] = '화요일'

console.log(days);
console.log(days.length);

days.push("thu");

console.log(days);

days.pop();
console.log(days);

days.unshift("sun");
console.log(days);

days.shift();
console.log(days);

days.shift();
console.log(days);
