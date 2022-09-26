for (let i =0; i < 10; i++){
    //반복할 코드
    console.log(i);
}

let i=0;

while(i<10){
    console.log(i);
    i++;
}

let j=0
do{
    j++ ;
}while (j < 10){

}

//break : 멈추고 빠져나옴
while(true){
    let answer = confirm("계속 할까요?")
    if(!answer){
        break;
    }
}

//continue 멈추고 계속함
for (let i =0; i < 10; i++){
    if(i%2){
        continue;
    }
    console.log(i);
}