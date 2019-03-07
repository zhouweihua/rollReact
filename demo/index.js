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
* 当没babel是空对象{}的时候 let const 都没有转化
* 当加入preset的时候 let -> var; => -> function;
* 当加入polyfill的时候 代码扩大的好多
* 当使用runtime的时候 我babel7没有试出来 用了babel 6套餐 以及 webpack3 做出来了
*/

// import '@babel/polyfill'

let func = () => { console.log('babel function arrow')};
const NUM = 45;
let arr = [1,3,4];
let arrB = arr.map(item => item * 2);
arr.includes(1);
console.log('Set', new Set(arrB));

let p = new Promise((resolve) => {
    resolve('Promise test')
}).then(data => {
    console.log('resolve data', data)
})

/*****   react   ******/

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import AppContext from './common/context'

// import store from './store'
// import AppRouter from './common/routes'
// import history from './common/history'

// ReactDOM.render(
//     <AppContext.Provider value={{ testContext: true }}>
//         <Provider store={store}>
//             <AppRouter history={history} />
//         </Provider>
//     </AppContext.Provider>,
//     document.getElementById('app')
// )