// object表示一个js对象，这种写法一般不用，因为没啥用
var a;
a = {};
a = function () {
};
// 定义对象结构
// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值,属性名:属性值}
// 在属性名后边加上?，表示属性是可选的，这里表示必须有string类型的name，age可有可无
var b;
b = { name: '孙悟空', age: 18 };
// [propName: string]: any 表示任意类型的属性，propName可以换成其他任意的名字，这里表示一个key
// 表示必须有string类型的name，其他属性可以是任意类型，且可有可无
var c;
c = { name: '猪八戒', age: 18, gender: '男' };
// 定义函数结构
/*
*   设置函数结构的类型声明：
*       语法：(形参:类型, 形参:类型 ...) => 返回值
* */
var d;
d = function (n1, n2) {
    return n1 + n2;
};
/*
*   数组的类型声明：
*       类型[]
*       Array<类型>
* */
// string[] 表示字符串数组
var e;
e = ['a', 'b', 'c'];
// number[] 表示数值数值
var f;
var g;
g = [1, 2, 3];
// 定义任意类型的数组
var anyArray;
anyArray = [1, '2', true];
/*
*   元组，元组就是固定长度的数组
*       语法：[类型, 类型, 类型]
* */
var h;
h = ['hello', 123];
/*
* enum 枚举
*
* */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male // 'male'
};
console.log(i.gender === Gender.Male);
// &表示同时
var j;
j = { name: '孙悟空', age: 18 };
var k;
var l;
var m;
k = 2;
