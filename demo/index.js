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