# 秦高梯- fullstack 交付作业

[gaoTi News](https://github.com/qingaoti) showcase using typescript && egg

## 交付描述

1.源代码  
--   使用eggjs + typejs + mongo

Express 本人以前也用过3年，但是现在已经4年没接触Express了 ，
最近几年都是用eggjs，觉得挺好用的，也很顺手，这次框架要求没那么严，所以就用eggjs做了。

---------------------------------
2相关地址路径

shop测试地址
主页：
https://qingaoti.myshopify.com/

自己创建的collections
https://qingaoti.myshopify.com/collections/yinhao-test

在线api地址测试  -- 目前不支持传文件类型，如果是其他类型的接口都可以在线测试
http://127.0.0.1:7001/swagger-ui.html

---------------------------------
5. 问题点说明

Exceljs 官方文档推荐csv使用 fast-csv (截图: 在目录doc里的问题1.png )，
所以我在做解析csv时，既然官方推荐了用fast-csv解析，后续操作就没有必要又去转成excel了。直接异步往下了。
以后如果要做写入csv可以用Exceljs。

mocha 测试上传会经常超时，我还需要研究一下怎么弄。 以前用js写上传的mocha测试是没问题，用ts后感觉mocha支持不是那么好。
目前上传我是用postmen 测试的。  测试用例丢doc里面了：shopify.postman_collection.json

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 16.x
- Typescript 4.0+
- python 3.6+

