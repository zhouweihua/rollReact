const express = require('express')
const path = require('path')
const port = process.env.PORT || 8081
const app = express()
var fs=require("fs");
// 在你应用 JavaScript 文件中包含了一个 script 标签
// 的 index.html 中处理任何一个 route
app.get('*', function (request, response){
  if (request.path.endsWith('.js') || request.path.endsWith('.css') || request.path.endsWith('.less') || request.path.endsWith('.png') || request.path.endsWith('.jpeg') || request.path.endsWith('.jpg')) {

    fs.exists(path.resolve(__dirname, '../dist', request.path.substr(7, request.path.length - 1)), function(exists){
      if(exists){
         console.log("文件存在")
      }
      if(!exists){
         console.log("文件不存在")
      }
    })
  
    response.sendFile(path.resolve(__dirname, '../dist', request.path.substr(7, request.path.length - 1)))
    return
  }
  // console.log(request)
  response.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)