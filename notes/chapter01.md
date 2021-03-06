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

### 变量类型：

|  类型   |       例子        |              描述              |
| :-----: | :---------------: | :----------------------------: |
| number  |    1, -33, 2.5    |            任意数字            |
| string  | 'hi', "hi", `hi`  |           任意字符串           |
| boolean |    true、false    |       布尔值true或false        |
| 字面量  |      其本身       |  限制变量的值就是该字面量的值  |
|   any   |         *         |            任意类型            |
| unknown |         *         |         类型安全的any          |
|  void   | 空值（undefined） |     没有值（或undefined）      |
|  never  |      没有值       |          不能是任何值          |
| object  |  {name:'孙悟空'}  |          任意的JS对象          |
|  array  |      [1,2,3]      |           任意JS数组           |
|  tuple  |       [4,5]       | 元素，TS新增类型，固定长度数组 |
|  enum   |    enum{A, B}     |       枚举，TS中新增类型       |

**number**

```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
```

**boolean**

```typescript
let isDone: boolean = false;
```

**string**

```typescript
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;
```

**字面量**

可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围

```typescript
let color: 'red' | 'blue' | 'black';
let num: 1 | 2 | 3 | 4 | 5;

// 可以直接使用字面量进行类型声明
let a: 10;
a = 10;
// a = 11; // 字面量只能赋值特定的值，如果赋值其他值，会报错

// 可以使用 | 来连接多个值
let b: "male" | "female";
b = "male";
b = "female";
// b = "hello"; // 报错

// 可以使用 | 来连接多个类型（联合类型）
let c: boolean | string;
c = true;
c = 'hello';
```

**any**

- any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测，使用TS时，不建议使用any类型。
- 声明变量如果不指定类型，也不在声明时赋值，则TS解析器会自动判断变量的类型为any （隐式的any），这种情况要避免。

```typescript
let d: any = 4;
d = 'hello';
d = true;

let a;
```

**unknown**

unknown和any的区别：

- any类型的值，可以赋值给其他类型的变量，而unknown类型的值，不可以赋值给其他类型的变量。
- 通俗理解：any不光霍霍自己，它也能霍霍别人，不仅可以自己的变量的类型检查关闭，还可以让其他变量类型检查关闭。
- 如果unknown想赋值给其他类型的变量，可以通过类型判断或者断言的方式。

```typescript
let notSure: unknown = 4;
notSure = 'hello';


let d;
let s:string;
// d的类型是any，它可以赋值给任意变量
// 不建议这样
// s = d;


// unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
// 如果想赋值给其他类型的变量，可以通过类型判断或者断言的方式
let e: unknown;
e = 'hello';
// 类型判断
if(typeof e === "string"){
    s = e;
}
// 类型断言，可以用来告诉解析器变量的实际类型
/*
* 语法：
*   变量 as 类型
*   <类型>变量
*
* */
s = e as string;
s = <string>e;
```

**void**

void表示函数没有返回值或者认为返回一个空值，在函数没有确定返回类型，也没有return值时，ts会自动将函数的返回类型定义为void，当然，也可以手动定义，可以是return，return null，return undefined。

```typescript
let unusable: void = undefined;

function fn(): void{
}
```

**never**

never永远不会有返回值，比如函数中跑出一个异常。

```typescript
function error(message: string): never {
  throw new Error(message);
}
```

文件位置：[src/chapter01/03_types.ts](../src/chapter01/03_types.ts)

**object（没啥用）**

- 定义object：`let obj: object = {};`
- 定义对象结构：`let b: {name: string, age?: number};`，`let c: {name: string, [propName: string]: any};`
- 定义函数结构：`let d: (a: number ,b: number)=>number;`

```typescript
let obj: object = {};

// object表示一个js对象，这种写法一般不用，因为没啥用
let a: object;
a = {};
a = function () {
};


// 定义对象结构
// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值,属性名:属性值}
// 在属性名后边加上?，表示属性是可选的，这里表示必须有string类型的name，age可有可无
let b: {name: string, age?: number};
b = {name: '孙悟空', age: 18};


// [propName: string]: any 表示任意类型的属性，propName可以换成其他任意的名字，这里表示一个key
// 表示必须有string类型的name，其他属性可以是任意类型，且可有可无
let c: {name: string, [propName: string]: any};
c = {name: '猪八戒', age: 18, gender: '男'};

// 定义函数结构
/*
*   设置函数结构的类型声明：
*       语法：(形参:类型, 形参:类型 ...) => 返回值
* */
let d: (a: number ,b: number)=>number;
d = function (n1, n2): number{
    return n1 + n2;
}
```

**array**

数组有两种定义方式：

- 类型[]
- Array<类型>

```typescript
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

/*
*   数组的类型声明：
*       类型[]
*       Array<类型>
* */
// string[] 表示字符串数组
let e: string[];
e = ['a', 'b', 'c'];

// number[] 表示数值数值
let f: number[];

let g: Array<number>;
g = [1, 2, 3];

// 定义任意类型的数组
let anyArray: any[];
anyArray = [1, '2', true];
```

**tuple元组**

```typescript
let x: [string, number];
x = ["hello", 10]; 
```

**enum**

```typescript
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;

/*
* enum 枚举
*
* */
enum Gender{
    Male,
    Female
}

let i: {name: string, gender: Gender};
i = {
    name: '孙悟空',
    gender: Gender.Male // 'male'
}
console.log(i.gender === Gender.Male);
```

**类型断言**

有些情况下，变量的类型对于我们来说是很明确，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式：

第一种

```typescript
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
```

第二种

```typescript
let someValue: unknown = "this is a string";
let strLength: number = (<string>someValue).length;
```

**附加**

结构声明中，除了可以使用`|`，还可以使用`&`，但是`&`一般不用来定义变量，而是用来定义对象的。

```typescript
// &表示同时
let j: { name: string } & { age: number };
j = {name: '孙悟空', age: 18};

```

类型的别名：

```typescript
// 类型的别名
let k: 1 | 2 | 3 | 4 | 5;
let l: 1 | 2 | 3 | 4 | 5;
// 可以简化为
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
```

文件位置：[src/chapter01/04_types.ts](../src/chapter01/04_types.ts)

## 3、编译选项

### 自动编译文件

编译文件时，使用 -w 指令后，TS编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。示例：

```powershell
tsc xxx.ts -w
```

### 自动编译整个项目

如果直接使用`tsc`指令，则可以自动将当前项目下的所有ts文件编译为js文件。但是能直接使用`tsc`命令的前提是，要先在项目根目录下创建一个ts的配置文件 `tsconfig.json`。`tsconfig.json`是一个JSON文件，添加配置文件后，只需只需 tsc 命令即可完成对整个项目的编译。

有了`tsconfig.json`（即使该文件为空），就可以直接执行`tsc`命令，编译所有文件，也可以使用`tsc -w`，监视所有文件变化。

### tsconfig.json配置选项

- 首先说明的是，tsconfig.json里面是可以写注释的。
- 一个小技巧：想要知道某个选项可以设置什么值，可以写一个错误的，但是编译，在终端中就会打印出可以填写的值。

**include：**

定义希望被编译文件所在的目录。默认值：["\*\*/\*"]。\** 表示任意目录，\* 表示任意文件。示例：

```json
"include":["src/**/*", "tests/**/*"]
```

上述示例中，所有src目录和tests目录下的文件都会被编译。

**exclude：**

定义需要排除在外的目录，默认值：["node_modules", "bower_components", "jspm_packages"]和outDir目录。示例：

```json
"exclude": ["./src/hello/**/*"]
```

上述示例中，src下hello目录下的文件都不会被编译

**extends：**

定义被继承的配置文件，示例：

```json
"extends": "./configs/base"
```

上述示例中，当前配置文件中会自动包含config目录下base.json中的所有配置信息。

**files：**

指定被编译文件的列表，只有需要编译的文件少时才会用到，示例：

```json
"files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "tsc.ts"
  ]
```

列表中的文件都会被TS编译器所编译。

**compilerOptions：**

编译选项是配置文件中非常重要也比较复杂的配置选项，在compilerOptions中包含多个子选项，用来完成对编译的配置。

### tsconfig.json中compilerOptions项目选项

**target：**

设置ts代码编译的目标版本，可选值：ES3（默认）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext

示例：

```json
"compilerOptions": {
    "target": "ES6"
}
```

如上设置，我们所编写的ts代码将会被编译为ES6版本的js代码。

**lib：**

指定代码运行时所包含的库（宿主环境），可选值：ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ......，默认情况下，不用写该属性。

示例：

```json
"compilerOptions": {
    "target": "ES6",
    "lib": ["ES6", "DOM"],
    "outDir": "dist",
    "outFile": "dist/aa.js"
}
```

**module：**

设置编译后代码使用的模块化系统，可选值：CommonJS、UMD、AMD、System、ES2020、ESNext、None

示例：

```typescript
"compilerOptions": {
    "module": "CommonJS"
}
```

**outDir：**

编译后文件的所在目录，默认情况下，编译后的js文件会和ts文件位于相同的目录，设置outDir后可以改变编译后文件的位置

示例：

```json
"compilerOptions": {
    "outDir": "dist"
}
```

设置后编译后的js文件将会生成到dist目录。

**outFile：**

将所有的文件编译为一个js文件，默认会将所有的编写在全局作用域中的代码合并为一个js文件，如果module制定了None、System或AMD则会将模块一起合并到文件之中

示例：

```json
"compilerOptions": {
    "outFile": "dist/app.js"
}
```

**rootDir：**

指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过rootDir可以手动指定根目录

示例：

```json
"compilerOptions": {
    "rootDir": "./src"
}
```

**allowJs：**

是否对js文件编译，如果要使用某些JS模块，可以将该属性设置为true

**checkJs：**

是否对js文件进行检查

示例：

```json
"compilerOptions": {
    "allowJs": true,
    "checkJs": true
}
```

**removeComments：**

编译后是否移除注释，默认值：false

**noEmit：**

不对代码进行编译，默认值：false，这个功能可以用来作为代码检查使用。

**noEmitOnError：**

当有错误时不生成编译后的文件，默认值：false。

**sourceMap：**

是否生成sourceMap，默认值：false

### 严格检查

**strict：**

启用所有的严格检查，默认值为true，设置后相当于开启了所有的严格检查

**alwaysStrict：**

总是以严格模式对代码进行编译，如果ts之间没有import和export，那么就会在JS中添加`"use strict"`；如果ts之间有import和export，那么JS也会有import和export，在JS有import和export的情况下，会自动进入严格模式，所以就不会再加`"use strict"`。

**noImplicitAny：**

禁止隐式的any类型。

**noImplicitThis：**

禁止类型不明确的this。

**strictBindCallApply：**

严格检查bind、call和apply的参数列表。

**strictFunctionTypes：**

严格检查函数的类型。

**strictNullChecks：**

严格的空值检查。

**strictPropertyInitialization：**

严格检查属性是否初始化。

### 额外检查

noFallthroughCasesInSwitch：检查switch语句包含正确的break

noImplicitReturns：检查函数没有隐式的返回值

noUnusedLocals：检查未使用的局部变量

noUnusedParameters：检查未使用的参数

### 高级

**allowUnreachableCode：**

检查不可达代码，可选值：true，忽略不可达代码；false，不可达代码将引起错误。

代码位置在`src/chapter01_part2`中。

## 4、webpack

通常情况下，实际开发中我们都需要使用构建工具对代码进行打包，TS同样也可以结合构建工具一起使用，下边以webpack为例介绍一下如何结合构建工具使用TS。

### 1、初始化项目

进入项目根目录，执行命令 ``` npm init -y```

主要作用：创建package.json文件

### 2、下载构建工具

```npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin html-webpack-plugin```

共安装了7个包：

- webpack：构建工具webpack
- webpack-cli：webpack的命令行工具
- webpack-dev-server：webpack的开发服务器
- typescript：ts编译器
- ts-loader：ts加载器，用于在webpack中编译ts文件
- html-webpack-plugin：webpack中html插件，用来自动创建html文件
- clean-webpack-plugin：webpack中的清除插件，每次构建都会先清除目录

### 3、根目录下创建webpack的配置文件webpack.config.js

html-webpack-plugin是一个网页模板插件，因为默认情况下，编译出来的只有JS，而JS不能直接在浏览器中运行，需要借助html文件，这个插件就是这个作用。如果直接实例化，html-webpack-plugin会自动提供一个html，可以在options参数中进行配置，title为标题，template为模板，模板是自己创建好的html，html-webpack-plugin会根据代码将编译好的css和js添加到这个模板中。

webpack-dev-server是一个html server插件，并且可以进行热更新，安装webpack-dev-server后，需要在package.json中添加一行script：`"start": "webpack serve --open"`。

clean-webpack-plugin是一个在打包时清除之前打包的内容的一个插件，直接实例化就可以，例子见下面的代码。

当在一个ts文件里面写`import { hi } from './m1';`，表示是要引入一个模块，但是默认情况下，webpack不知道引入的模块是什么文件，所以需要在webpack中配置一下，即`resolve.extensions`，配置好了，再编译就不会出错了。

output.environment.arrowFunction是表示Webpack打包时，是否使用箭头函数，如果要在IE中使用，就要将这个属性设置为false，因为IE的所有版本，都不支持箭头函数。这个设置的是Webpack打包时附加的代码是否使用箭头函数，而不是我们自己写的，我们自己写的箭头函数，可以通过babel来完成兼容性处理。

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    optimization:{
        minimize: false // 关闭代码压缩，可选
    },

    entry: "./src/index.ts",
    
    devtool: "inline-source-map",
    
    devServer: {
        contentBase: './dist'
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        environment: {
            arrowFunction: false // 关闭webpack的箭头函数，可选
        }
    },

    resolve: {
        extensions: [".ts", ".js"]
    },
    
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                   loader: "ts-loader"     
                },
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // 设置html的title
            //title: 'Title1',
            // 设置html模板
            //template: path.resolve(__dirname, 'public', 'index.html')
        }),
    ]

}
```

### 4、根目录下创建tsconfig.json，配置可以根据自己需要

```json
{
    "compilerOptions": {
        "target": "ES2015",
        "module": "ES2015",
        "strict": true
    }
}
```

### 5、修改package.json添加如下配置

```json
{
  ...略...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack serve --open chrome.exe"
  },
  ...略...
}
```

### 6、在src下创建ts文件

在src下创建ts文件，并在并命令行执行```npm run build```对代码进行编译，或者执行```npm start```来启动开发服务器

## 5、Babel

经过一系列的配置，使得TS和webpack已经结合到了一起，除了webpack，开发中还经常需要结合babel来对代码进行转换以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将babel引入到项目中。

安装依赖包：```npm i -D @babel/core @babel/preset-env babel-loader core-js```

共安装了4个包，分别是：

- @babel/core：babel的核心工具
- @babel/preset-env：babel的预定义环境
- @babel-loader：babel在webpack中的加载器
- core-js：core-js用来使老版本的浏览器支持新版ES语法

**修改webpack.config.js配置文件**

webpack的use中，有两种写法，如果不写配置，直接使用字符串就可以，如果写配置，可以像下面的代码实例使用对象的形式。

babel-loader中的options都是babel-loader的配置，具体如何配置，可以参考babel的网站。targets表示兼容的最低浏览器版本，corejs表示对于低版本没有的功能，会通过corejs来添加babel自己实现的功能，这里使用的是版本3；`"useBuiltIns": "usage"`表示的是按需引入，使用到了哪个功能，会打包哪个功能，这样可以减少包的体积，提高代码运行效率。

```javascript
...略...
module: {
    rules: [
        {
            test: /\.ts$/,
            use: [
                {
                    loader: "babel-loader",
                    options:{
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "targets":{
                                        "chrome": "58",
                                        "ie": "11"
                                    },
                                    "corejs":"3",
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                },
                {
                    loader: "ts-loader",

                }
            ],
            exclude: /node_modules/
        }
    ]
}
...略...
```

如此一来，使用ts编译后的文件将会再次被babel处理，使得代码可以在大部分浏览器中直接使用，可以在配置选项的targets中指定要兼容的浏览器版本。

注意：babel在做兼容性处理时，不会处理webpack打包时最外层的箭头函数，如果在IE上运行，需要在webpack中的output.environment.arrowFunction设置为false。

代码位置在`src/chapter01_part3`目录下。
