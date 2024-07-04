/**
 * closure: 함수가 정의될 때 그 함수와 변수 scope의 조합
 * 1. closure는 자신이 생성될 때의 scope를 기억하는 함수
 * 2. closure는 함수가 자신이 정의될 때 scope를 기억하며 자신이 정의될 때의 scope 밖에서 호출되어도 그 scope에 접근할 수 있는 함수
 * 3. 사용하는 이유
 *    - 상태 유지 ex) useState
 *    - 전역 변수 회피
 *    - 정보 은닉 ex) useState
 */

// Lexical Scope
var f1 = function () {
    var s = 'Hello World';

    var inner = function () {
        console.log(s);
    };

    inner();
};

f1();

// Closure
var f2 = function () {
    var s = 'Hello World';
    var inner = function () {
        console.log(s);
    };

    return inner;
};

var closure = f2();
closure();
