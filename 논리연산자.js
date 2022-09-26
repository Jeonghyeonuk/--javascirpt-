const name = "Mike";

const age = 30;

if(name == "Mike" || age < 19){ // 하나만 true여도됨
    console.log("통과");
} else{
    console.log("탈락");
}

if(name == "Mike" && age < 10){ // 둘다 true여야함
    console.log("통과")
} else{
    console.log("탈락");
}

if(name != "Mike"){ // 부정 (name이 마이크가 아닐때)
    console.log("통과")
} else{
    console.log("탈락");
}
 