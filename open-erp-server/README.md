# 后台

## 开发命令

windows
``` shell
$ SET DEBUG=open-erp-server:* & npm dev
```

linux or macos
``` shell
$ DEBUG=open-erp-server:* & npm dev
```

## 部署步骤

### 1. 执行建表 SQL文件

文件位置 `open-erp-server/init/createDB.sql`

TODO 后期增加命令执行

## 笔记

### 解决跨域
> [express cors middleware: cors](https://expressjs.com/en/resources/middleware/cors.html)

``` shell
$ yarn add cors
```
使用 `used`
``` javascript
var cors = require('cors')

app.use(cors())
```

### `express-validator` 表单验证
> [express-validator文档](https://express-validator.github.io/docs/)

安装

``` shell
$ yarn add express-validator
```

### `boom` HTTP友好的错误对象
> [boom 文档](https://www.npmjs.com/package/boom)

安装

``` shell
$ yarn add boom
```

使用
``` javascript
var error = new Error('Unexpected input');
Boom.boomify(error, { statusCode: 400 });

Boom.badRequest('invalid query');

// response
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": "invalid query"
}
```

### `multer` 文件上传
> [multer文档](https://www.npmjs.com/package/multer)

安装

``` shell
$ yarn add multer
```

例子
``` javascript
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    // 处理文件名，默认没有后缀
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })
```

### `express-jwt` JWT认证
> [express-jwt文档](https://www.npmjs.com/package/express-jwt)

安装
``` shell
$ yarn add express-jwt
```

使用
``` javascript
// config/jwt.js
const expressJwt = require('express-jwt')
const { PRIVATE_KEY } = require('./index.js')

const jwtAuth = expressJwt({
  secret: PRIVATE_KEY, //  签名的密钥 或 PublicKey
  credentialsRequired: true, // 设置为false就不进行校验了，游客也可以访问
}).unless({
  path: [
    '/',
    '/user/login',
    //jwt的白名单，在该名单内说明不会进行校验
  ],
})

module.exports = jwtAuth
```

``` javascript 
// app.js
const jwtAuth = require('./config/jwt')

// 注册路由
const router = express.Router()

// 对所有路由进行 jwt 认证
router.use(jwtAuth)
```

### `mysql` mysql 链接
> [mysql文档](https://www.npmjs.com/package/mysql)

安装
``` shell
$ yarn add mysql
```