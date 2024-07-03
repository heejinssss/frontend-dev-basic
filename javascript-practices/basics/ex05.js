/**
 * 구문(statement)
 * 1. JS의 실행 단위
 * 2. 구성 요소
 *    - 값, 연산식 : 표현식(expression)
 *    - 주석 : 구문이지만 실행하지 않는다.
 *    - 예약어 : if, else, for
 * 3. 구문의 예
 *    - if, if ~ else
 *    - while, do ~ while, for
 *    - for ~ in
 *    - switch
 * 4. 공백 : 토큰 구분, 무시
 * 5. 세미콜론
 * 6. 개행   
 */

// ;(세미콜론) : 표현식을 표현식구문으로 만들어서 바로 실행 가능하도록
s = 'hello world'; console.log(s);

// 1. 개행은 ;(세미콜론) 대체
i = 10
console.log(i)

//2. 상황에 따라 토큰을 분리하는 역할을 함
a
=
2
+
3
console.log(a)

// con
// sole.log(10)
