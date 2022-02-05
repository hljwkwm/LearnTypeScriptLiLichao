// 声明一个变量a，同时指定它的类型为number
var a;
// a 的类型设置为了number，在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
// a = 'hello'; // 此行代码会报错，因为变量a的类型是number，不能赋值字符串
// 声明string类型
var b;
b = 'hello';
// b = 123; // 如果已经声明为string再赋值number，那么就会报错
// 声明完变量直接进行赋值
// let c: boolean = false;
// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
var c = false;
c = true;
// JS中的函数是不考虑参数的类型和个数的
// function sum(a, b){
//     return a + b;
// }
// console.log(sum(123, 456)); // 579
// console.log(sum(123, "456")); // "123456"，这样就会拼串，并不是我们想要的结果
// TS中可以对函数的参数个数和类型进行限定
// 冒号后面表示函数的返回值
function sum(a, b) {
    return a + b;
}
// 必须传两个参数，且这两个参数都是number，传错误类型的参数，或者多传少传，都是不可以的
var result = sum(123, 456);
