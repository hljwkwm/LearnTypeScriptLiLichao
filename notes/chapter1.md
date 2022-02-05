# 第一章 快速入门

## 0、TypeScript简介

1. TypeScript是JavaScript的超集。
2. 它对JS进行了扩展，向JS中引入了类型的概念，并添加了许多新的特性。
3. TS代码需要通过编译器编译为JS，然后再交由JS解析器执行。
4. TS完全兼容JS，换言之，任何的JS代码都可以直接当成JS使用。
5. 相较于JS而言，TS拥有了静态类型，更加严格的语法，更强大的功能；TS可以在代码执行前就完成代码的检查，减小了运行时异常的出现的几率；TS代码可以编译为任意版本的JS代码，可有效解决不同JS运行环境的兼容问题；同样的功能，TS的代码量要大于JS，但由于TS的代码结构更加清晰，变量类型更加明确，在后期代码的维护中TS却远远胜于JS。

## 1、TypeScript 开发环境搭建

1. 下载Node.js
   - 64位：https://nodejs.org/dist/v14.15.1/node-v14.15.1-x64.msi
   - 32位：https://nodejs.org/dist/v14.15.1/node-v14.15.1-x86.msi
2. 安装Node.js
   - 安装完成后，可以在终端中验证一下，`node -v`和`npm -v`
3. 使用npm全局安装typescript
   - 进入终端，输入：`npm i -g typescript`
   - 验证：终端输入：`tsc -v`
4. 创建一个ts文件
5. 使用tsc对ts文件进行编译
   - 进入命令行
   - 进入ts文件所在目录
   - 执行命令：`tsc xxx.ts`

输入以下代码：

```typescript
console.log('hello ts');
```

然后在终端中运行`tsc xxx.ts`，就可以编译出JS文件了。

文件位置：[src/chapter01/01_helloTS.ts](../src/chapter01/01_helloTS.ts)









