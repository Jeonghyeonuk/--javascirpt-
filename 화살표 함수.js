// 함수 선언문 과 함수 표현식


//함수 선언문
function sayHello(){
    console.log("Hello!");
}

//함수 표현식
let sayHello2 = function(){
    console.log("Hello!");
}

//화살표 함수
let sayHello3 = () => {
    console.log("Hello!");
}

let sayHello4 = (name) =>{
    const msg = `Hello, ${name}`
    console.log(msg);
}

//함수 선언문 vs 함수 표현식
// - 호출방법은 동일 : sayHello();
// - 차이점은 호출할 수 있는 타이밍이다.

// 함수선언문 : 어디서든 호출가능
// javascript는 기본적으로 인터프리터 언어라 위에서 아래로 코드가 실행되는데
// 내부 알고리즘에 의해 function들은 처음 실행 될때 초기화 단계에서 코드의 모든 함수를
// 찾아서 모음을 만들어주는데 이것을 hosting 이라고 하며 이때문에 어디서나 호출이 가능하다

// 함수 표현식 : 코드에 닿았을때 함수 사용 가능