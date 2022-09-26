// switch(평가){
//     case A :
//         // A일때 코드
//     case B : 
//         // B일때 코드
// }

const firut = prompt("과일 이름을 입력해 주세요");

switch (firut){
    case "수박" :
        console.log("500원 입니다");
        break;
    case "배" :
        console.log("100원 입니다");
        break;
    case "사과" :
        console.log("200원 입니다");
        break;
    default : 
        console.log("그런 과일은 없습니다"); // 케이스가 존재하지 않을때
} // swtich문은 만난시점 이후에것을 다 실행하기떄문에 만나고 멈추려면 break써줘야함


