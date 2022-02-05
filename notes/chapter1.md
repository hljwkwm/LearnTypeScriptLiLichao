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







