//method : 객체의 프로퍼티로 할당된 함수


let boy = {
    name : "Mike",
    showName : function() {
        console.log(this.name)
    }
}

boy.showName()