// let title = document.getElementById("main-title");
// console.log(title);

// let sp = document.getElementsByTagName("span");
// console.log(sp);

// let spClass = document.getElementsByClassName("span-class");
// console.log(spClass)

let getName = document.querySelectorAll(".Name");
console.log(getName[1]);

//해당되는거에서 가장 첫번째를 가져옴
let getLi = document.querySelector(".m1");
console.log(getLi);

getLi.innerHTML = "변경해볼가";

//브라우저 랜더링 과정
//DOM(도큐먼트 오브젝트 모델)
//BOM

//var,let,const 차이
//레벨스코프 블럭레벨 스코프인지 함수,레벨 스코프인지