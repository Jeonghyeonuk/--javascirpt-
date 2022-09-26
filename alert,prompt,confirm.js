const name = prompt("이름을 입력 하세요.");
alert("환영합니다, " + name + "님");
alert(`안녕하세요, ${name}님, 환영합니다.`);
const date = prompt("예약일을 입력 하세요.", "2022-09-");
const isAdult = confirm("당신은 성인입니까?") //결제하시겠습니까 ? 등 사용
console.log(isAdult)

//  단점
//  1. 스크립트 일시 정지
//  2. 스타일링 X

