console.log(1111)
console.log(2222)

/*****   assistAmd   ******/
require(["./assistAmd"], function(assistAmd) {
    console.log(assistAmd.key)
 });

/*****   assistCommon   ******/
var assistCommon = require("./assistCommon");
console.log(assistCommon.key)

/*****   assistEs6   ******/
import assistEs6 from './assistEs6'
console.log(assistEs6.key)

/*****   babel   ******/
/*
* 例如，默认情况下babel可以将箭头函数，class等语法转换为ES5兼容的形式
* 但是却不能转换Map，Set，Promise等新的全局对象，这时候就需要使用polyfill去模拟这些新特性
* 那其实逻辑有三层了：babel-loader -> babelrc -> preset -> polyfill -> runtime
*/
let func = () => { console.log('babel function arrow')};
const NUM = 45;
let arr = [1,3,4];
let arrB = arr.map(item => item * 2);
arr.includes(1);
console.log('Set', new Set(arrB));