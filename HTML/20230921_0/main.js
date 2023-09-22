// var num= 1;
// var str ="안녕하세요";
// console.log(num)

// dddd = 1234;
// console.log(dddd);

// 재선언안됨
// let number = 1;
// number = 2;
// let number = 5; 에러
// console.log("변수 number",number);

// 상수 선언
// const MAXNUMBER = 1;
// NAXNUMBER=5;
// console.log(MAXNUMBER);

// 입력창이뜬다
// let value = prompt("입력해라");
// console.log(value);
// alert(1); 경고창

// == 자동으로 형변환을 해서 ture가 뜬다.
// === 데이터타입 까지 비교를하여 false가 뜬다.
// console.log(5 === "5");

let score = 10;

let b = 100;

if (score == 10) {
    let a = 50;
    if (a == 50) {
        a = 10;
        console.log(a);
        console.log(b);
    }
}

//원시 타입
//숫자 타입 , 문자열, 불리언, undefined, null

//객체 타입
//객체,함수,배열...

//if . for , switch, while... 다있음

prompt //기본적으로 string로 받기때문에 숫자를 쓰려면 형변환을 해야한다.
for (let i = 0; i<5; i++) {

    for (let k = 0; k <= i; k++) {
        document.write("*");
    }
    document.write("<br>");
}
//1. 함수 선언문
function sum(x,y){
    return x+y;
}
//2. 함수 표현식
let res = function sum(x,y){
    return x + y;
}
//3. Function생성자 함수를 사용할 때
let res1 = new Function("x","y","return x+y");

//4. 화살표 함수
let res3 = (x,y)=> x + y;