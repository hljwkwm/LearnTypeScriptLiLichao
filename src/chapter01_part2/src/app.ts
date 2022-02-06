import { hi } from './m.js'
let a = 10;
// 这是一个注释
console.log(hi);
console.log(a);

// a = 'hello';

function fn(a: number, b: number){
    return a + b;
}

// 如果不指定this，那么就是不明确的this，这里已指定为Window
function fn2(this: Window){
    alert(this);
}

// box1可能为空值，可用strictNullChecks做检查
let box1 = document.getElementById('box1');

// 两种判断空值的办法
// 通过if判断
// if(box1 !== null){
//     box1.addEventListener('click', function (){
//         alert('hello');
//     });
// }

// 通过?.判断
box1?.addEventListener('click', function (){
    alert('hello');
});

