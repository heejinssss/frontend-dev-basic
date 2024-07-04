/**
 * JS 객체 1 - object 타입
 * 1. JS 객체는 function 타입과 object 타입 중 하나이다.
 * 2. function 타입의 객체는 '함수'라고 부른다.
 * 3. 따라서 JS에서 객체라고 부르는 것은 object 타입의 객체를 가리킨다.
 */

/**
 * 생성 방법 1
 * 생성자 함수를 사용하는 방법
 * 1. Number, Boolean, String, Object, Array 내장 객체 (생성자 함수)
 * 2. 사용자 정의 생성자 함수
 */

var o1 = new Object();
o1.name = '나루토';
o1.age = 10;
o1.another = new Object();
o1.another.name = '사스케';
o1.another.age = 20;

console.log(o1);

/**
 * 생성 방법 2
 * {} literal 사용하는 방법
 */
var o2 = new Object();
o2.name = '나루토';
o2.age = 10;
o2.another = new Object();
o2.another.name = '사스케';
o2.another.age = 20;

console.log(o2);

/**
 * 생성 방법 3
 * (J)ava(S)cript (O)bject (N)otation
 */
var o3 = {
    name: '나루토',
    age: 10,
    another: {
        name: '사스케',
        age: 20,
    },
};

console.log(o3);

// XmlHttpRequest 객체를 사용해서 통신(AJAX)을 한다.
var response = '{name: "나루토", age: 10, email: "naruto@gmail.com"}';
var userVo = eval('(' + response + ')');
console.log(userVo.name + ' : ' + userVo.age + ' : ' + userVo.email);
