/**
 * JS 객체 4 - prototype 기반의 상속과 오버라이딩 : JS OOP
 */

var MyObject = function (name, age) {
    this.name = name;
    this.age = age;
};

MyObject.prototype.school = '학교';
MyObject.prototype.course = '1기';
MyObject.prototype.info = function () {
    console.log(this.school + ' : ' + this.course);
};
