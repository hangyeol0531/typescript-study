// ES5 - 함수 선언문
function sum(a, b){
    return a + b;
}

// ES5 - 함수 표현식
var sum = function(a, b){
    return a + b;
}

// ES6+ - 함수 표현식(arrow)
var sum = (a, b) => {

}

var sum = (a, b) => a + b;

// typescript arrow function typing
var sum = (a: number, b: number): number => {

} 