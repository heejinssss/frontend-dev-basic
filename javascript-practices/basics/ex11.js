/**
 * Array 객체 함수: Array.prototype.*
 */

var colors = ['black', 'green', 'purple'];
var fruits = ['apple', 'mango', 'banana'];

// concat
console.log('=== concat ===');

var a1 = fruits.concat(colors);
console.log(a1);

// pop, push : stack
console.log('=== stack ===');
var color = colors.pop();
console.log(color, colors);

colors.push('yellow');
console.log(colors);

// join
console.log('=== join ===');

var s = fruits.join(':');
console.log(s);

// reverse
console.log('=== reverse ===');

console.log(fruits);
fruits.reverse();
console.log(fruits);

// shift
console.log('=== shift ===');

var numbers1 = [1000, 3000, 2000, 5000, 4000, 8000];
var number = numbers1.shift();
console.log(number, numbers1);

// slice
console.log('=== slice ===');
var numbers2 = numbers1.slice(1, 3);
console.log(numbers2);

// splice: 1. [index]로부터 [count]개를 삭제하고, 삭제된 요소를 배열에 담아 반환
console.log('=== splice(index, count) ===');

console.log(fruits);
fruits.splice(0, 2);
var fruits2 = fruits.splice(0, 2);
console.log(fruits2, fruits);

// splice: 2. [index]로부터 [count]개를 삭제하고, [replace]로 대체한 후, 삭제된 요소를 배열에 담아 반환
console.log('=== splice(index, count, replace) ===');

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);
console.log(a2, a1);

// splice: 3. removeAt()의 기능
console.log('=== removeAt() ===');

var a3 = [0, 1, 2, 3, 4];
a3.splice(2, 1); // removeAt(2)
console.log(a3);

// splice: 4. insertAt()의 기능
console.log('=== insertAt() ===');

var a4 = [0, 1, 2, 3, 5];
a4.splice(1, 0, 2); // insertAt(1, 2)
console.log(a4);
