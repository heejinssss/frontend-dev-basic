/**
 * Array 확장 (prototype 기반의 확장)
 * 예제: List 함수 추가
 */

Array.prototype.remove = function (index) {
    console.log('call remove : ' + index);
    this.splice(index, 1);
};

/*
Array.prototype.insert = function (index, value) {
    if (value instanceof Array) {
        for (var i = 0; i < value.length; i++) {
            this.splice(index++, 0, value[i]);
        }
    } else {
        this.splice(index, 0, value);
    }
};
*/

Array.prototype.insert = function (index, value) {
    if (value instanceof Array) {
        /* [Error] callback 함수 안의 this는 어휘 상의 this와 일치하지 않는다.
        value.forEach(function (e) {
            console.log('this =========> ', this);
            this.splice(index++, 0, e);
        });
        */

        value.forEach((e) => this.splice(index++, 0, e));

        /*
        // sol 1
        const getThis = this;
        value.forEach(function (e) {
            getThis.splice(index++, 0, e);
        });
        */

        // sol 2
        value.forEach(
            function (e) {
                this.splice(index++, 0, e);
            }.bind(this)
        );
    } else {
        this.splice(index, 0, value);
    }
};

// List 함수 사용하기
var a = [1, 2, 4];
console.log(a);

a.remove(2);
console.log(a);

a.insert(2, ['a', 'b', 'c']);
console.log(a);
