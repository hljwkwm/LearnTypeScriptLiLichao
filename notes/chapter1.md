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

## 2、基本类型

### 类型声明

- 类型声明是TS非常重要的一个特点，通过类型声明可以指定TS中变量（参数、形参）的类型，指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错，简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值。
- 语法：

```typescript
let 变量: 类型;

let 变量: 类型 = 值;

function fn(参数: 类型, 参数: 类型): 类型{
    ...
}
```

TS可以编译成各种版本的js文件，比如ES3、ES5、ES6等，这个可以通过配置文件来更改，默认情况下，会编译为ES3的JS文件。

### 自动类型判断

- TS拥有自动的类型判断机制，当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型，所以如果你的变量的声明和赋值时同时进行的，可以省略掉类型声明。

```typescript
// 声明完变量直接进行赋值
// let c: boolean = false;
// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let c = false;
c = true;
```

- TS有自动类型判断，但是对变量做类型限定依然是有必要的，比如对函数的形参和返回值做类型限定。

```typescript
// JS中的函数是不考虑参数的类型和个数的
// function sum(a, b){
//     return a + b;
// }
// console.log(sum(123, 456)); // 579
// console.log(sum(123, "456")); // "123456"，这样就会拼串，并不是我们想要的结果


// TS中可以对函数的参数个数和类型进行限定
// 冒号后面表示函数的返回值
function sum(a: number, b: number): number{
    return a + b;
}
// 必须传两个参数，且这两个参数都是number，传错误类型的参数，或者多传少传，都是不可以的
let result = sum(123, 456);

```

文件位置：[src/chapter01/02_basis.ts](../src/chapter01/02_basis.ts)

