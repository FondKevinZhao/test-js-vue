// 自己写一个接口，让我的vue来访问(会形成跨域，然后解决跨域)

const express = require('express'); // common.js的引入方式
const app = express();
console.log(app.get);

app.get('/users/info', function (req, res) {
  let response = {
    status: 200,
    data: {
      name: 'zhaoliying',
      age: 33
    }
  }
  res.send(JSON.stringify(response));
})

app.listen(5000, function () {
  console.log('服务器已经启动，在localhost:5000/users/info');
})