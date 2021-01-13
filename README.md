<h1>小程序默认模版</h1>

| 文件夹    | 功能             | 解释     |
|----------|------------------|----------|
| class    | 公共类方法库       | 单元格内容 |
| http     | 请求方式公共配置文件 | 单元格内容 |
| siteinfo | 接口host配置文件   | 单元格内容 |
| static   | 公共文件配置文件   | 单元格内容 |
| store    | 全局管理器配置文件  | 单元格内容 |
| utils    | 全局公共方法库     | 单元格内容 |

<h1>此文件为utils.js文件的公共类方法</h1>
<h3>如何使用？</h3>

**在class.js中抛出类**

``` 

export class className {
    *构造函数*
    constructor(){
        ...
    }
}
```

 **在utils.js中引入模块**

``` 

import { className } from "./class"; 
```
