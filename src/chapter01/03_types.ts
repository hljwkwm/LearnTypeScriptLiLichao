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


// any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// let d: any;

// 声明变量如果不指定类型，也不在声明时赋值，则TS解析器会自动判断变量的类型为any （隐式的any）
// 这种情况要避免
let d;
d = 10;
d = 'hello';
d = true;


// unknown 表示未知类型的值
let e: unknown;
e = 10;
e = "hello";
e = true;

let s:string;
// d的类型是any，它可以赋值给任意变量
// 不建议这样
// s = d;


// unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
// 如果想赋值给其他类型的变量，可以通过类型判断或者断言的方式
e = 'hello';
// 类型判断-
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


// void 用来表示空，以函数为例，就表示没有返回值的函数，可以return，return null，return undefined。
function fn(): void{
}


// never 表示永远不会返回结果
function fn2(): never{
    throw new Error('报错了！');
}
