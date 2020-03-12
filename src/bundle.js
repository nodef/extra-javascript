'use strict';
const rollup = require('rollup').rollup;
const commonjs = require('@rollup/plugin-commonjs');



function bundle(o) {
  return rollup(Object.assign({plugins: [commonjs()]}, o));
}
export default bundle;
