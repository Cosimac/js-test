/*
 * @Date: 2021-10-20 15:57:06
 * @LastEditors: Cosima
 * @LastEditTime: 2021-10-27 18:06:39
 * @FilePath: /js-test/src/index.js
 */
import _ from 'lodash';
import numRef from './ref.json';

export function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    ''
  );
}

export function wordToNum(word) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1
  );
}
