import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

let pkg = require('./package.json');

export default {
  entry: 'lib/index.js',
  plugins: [
    babel(babelrc()),
    nodeResolve({ jsnext: true, main: true }),
    commonjs()
  ],
  targets: [
    {
      dest: pkg['main'],
      format: 'umd',
      moduleName: 'customElementDecorator',
      sourceMap: true
    },
    {
      dest: pkg['jsnext:main'],
      format: 'es6',
      sourceMap: true
    }
  ]
};
