/*
 * @Date: 2021-10-20 15:57:06
 * @LastEditors: Cosima
 * @LastEditTime: 2021-11-01 14:42:25
 * @FilePath: /js-test/src/index.js
 */
import _ from 'lodash'

function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());