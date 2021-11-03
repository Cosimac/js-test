/*
 * @Date: 2021-10-20 15:57:06
 * @LastEditors: Cosima
 * @LastEditTime: 2021-11-03 11:49:26
 * @FilePath: /js-test/src/index.js
 */
import _ from 'lodash'

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

// ------------原型链------------

function People() {
  this.type = '1-1'
}
function Person() {
  this.type = '1'
}

// prototype是构造函数的方法，指向原型对象 {Object}
// __proto__是实例对象的属性，指向原型对象 {Object}
// constructor是对象的属性，指向构造函数 People() 

People.prototype = new Person()

// 实例对象
const people = new People()
const person = new Person()

// console.log(people, 'people的实例');
// console.log(People.prototype, 'People原型对象')
// console.log(people.__proto__, 'people原型对象');
// console.log(people.__proto__.constructor, 'people的构造函数');
// console.log(people.__proto__ === People.prototype, '------');

// ----------------原型链END---------------------

// 将参数从一个函数传递到另一个函数的推荐做法。
function foo() {
  bar.apply(null, arguments);
}
function bar(a, b, c) {
  // 干活
}







