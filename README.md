# 开发前请阅读我


**文件夹目录：**

- front : 前端 ( Vue3 + Ts + Axios )
- server: 服务端 ( Nest + Ts )

## Git规范：

**分支管理**

- master  上线分支
- feature 版本分支
- hotfix  bug修复分支
- dev     开发分支


**代码提交规范**

- feat:  新增（xxx）功能模块
- fix:   修复（xxx）功能模块
- style: 样式的调整
- test:  测试代码



## front前端相关

### 启动项目：

```cmd
    npm run open ip地址
    
    // example:
    npm run open 192.168.10.1:8080
```


## server服务端相关

## 目录介绍

```javascript
    src
    ├── app.controller.spec.ts      带有单个路由的基本控制器示例
    ├── app.controller.ts           对于基本控制器的单元测试样例
    ├── app.module.ts               应用程序的根模块。
    ├── app.service.ts              带有单个方法的基本服务
    └── main.ts                     应用程序入口文件。它使用 NestFactory 用来创建 Nest 应用实例。
```

### 启动项目：

```cmd
    npm run serve
```