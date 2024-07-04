/**
 * JS 객체 4 - prototype 기반의 상속과 오버라이딩 : JS OOP
 */

var MyObject = function (name, age) {
    this.name = name;
    this.age = age;
};

MyObject.prototype.school = '학교';
MyObject.prototype.course = '코스';
MyObject.prototype.info = function () {
    console.log(this.name + ' : ' + this.age + ' : ' + this.school + ' : ' + this.course);
};

// MyObject 인스턴스 생성 1
var o1 = new MyObject('나루토', 10);
o1.info();
o1.school = 'poscodx';
o1.info();

// MyObject 인스턴스 생성 2
var o2 = new MyObject('사스케', 20);
o2.info = function () {
    console.log('보안 문제');
};

o2.info();
