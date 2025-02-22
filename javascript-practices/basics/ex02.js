/**
 * 변수와 자료형 (data type)
 *
 * [기본타입, primitive type]
 *    - undefined
 *    - number
 *    - string
 *    - boolean
 *
 * [객체]
 * 1. new 생성자 함수를 사용하여 생성
 *    - Number()    => object 타입의 객체
 *    - String()    => object 타입의 객체
 *    - Boolean()   => object 타입의 객체
 *    - Object()    => object 타입의 객체
 *    - Array()     => object 타입의 객체
 *    - Date()      => object 타입의 객체
 *    - RegExp()    => object 타입의 객체
 *    - Function()  => function 타입의 객체
 * 2. {}
 * 3. []
 * 4. null
 */

/**
 * JS로 객체를 분류하는 다른 방법
 * 1. 내장 객체
 *    - 자바스크립트 엔진 내부에 미리 내장(정의)되어 있는 객체
 *    - Number, Boolean, Date, RegDate, Array, .... : 생성자 함수
 *    - parseInt, setTimeout, setInterval, ...      : 일반 함수
 *
 * 2. 호스트 객체
 *    - 자바스크립트 엔진이 embed 되어 있는 호스트 환경에 있는 객체
 *    - Browser 호스트: screen, location, navigatior, document(DOM), XmlHttpRequest
 *    - Node 호스트: http, os, fs, path, process, ...
 *
 * 3. 사용자 객체
 *    - 자바스크립트 엔진이 코드를 실행하면서 생성되는 객체
 */

console.log('====== 기본타입(undefined, number, string, boolean) ======');
var u; // var u = undefined; 와 동일, JS는 선언과 정의가 구분이 없다.
var i = 10;
var s = 'hello world';
var b = true;

console.log('u:' + typeof u);
console.log('i:' + typeof i);
console.log('s:' + typeof s);
console.log('b:' + typeof b);

console.log('====== 객체타입(object) ======');
var i2 = new Number(10);
var s2 = new String('hello world');
var b2 = new Boolean(false);
var o = {};
var a = [];
var n = null;

console.log('i2:' + typeof i2 + ':' + (i2 instanceof Number));
console.log('s2:' + typeof s2 + ':' + (s2 instanceof String));
console.log('b2:' + typeof b2 + ':' + (b2 instanceof Boolean));
console.log('o:' + typeof o + ':' + (o instanceof Object));
console.log('a:' + typeof a + ':' + (a instanceof Array));
console.log('n:' + typeof n);

console.log('====== 객체타입(function) ======');
function f1(a, b) {
    return a + b;
}

var f2 = function (a, b) {
    return a + b;
};

var f3 = new Function('a', 'b', 'return a+b;');

console.log(f1(10, 20), f2(10, 20), f3(10, 20));
console.log('f1:' + typeof f1);

console.log('====== Primitive Type도 메소드를 호출할 수 있다. (유사객체) ======');
console.log(b2.valueOf);
console.log(b.valueOf);
