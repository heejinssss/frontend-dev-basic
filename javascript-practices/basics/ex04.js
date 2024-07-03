/**
 * JS Scope
 * 1. JS는 코드에서 변수의 범위를 알 수 있다.
 * 2. JS는 전역 범위가 있다.
 * 3. ES6 이전
 *    - Java와 같은 블록 범위를 지원하지 않는다.
 *    - 함수 범위만 지원
 *    - var 키워드를 사용해야 함수 범위를 가진다.
 * 4. ES6 이후
 *    - Java와 같은 블록 범위를 지원한다.
 *    - let/const 키워드를 사용해서 블록 범위의 변수/상수를 만든다.
 * 5. 결론
 *    const/let을 사용하고 둘 중에 하나를 반드시 붙여야 한다.
 */

var i = 20;
var f = function () {
    var i = 10;
    j = 100;

    console.log(i);
    j = j - i;
};

f();
console.log(i);
console.log(j);

console.log('=== var 키워드는 함수 블록에서만 범위를 만든다. ===');
if (90 + 10 === 100) {
    var k = 10;
}

console.log(k);

// console.log(x); // not defined error (없는 변수를 참조)
