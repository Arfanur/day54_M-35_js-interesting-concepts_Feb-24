// const a = 'Alim Uddin';
// const b = 23;
// const c = true;
// // null
// undefined

// primitive
// non-primitive

// const nums = [23, 12, 33, 55];
// console.log(typeof nums);
// console.log(Array.isArray(nums));

// function triple(x){
// function triple(x, y, z) {
//     x = 111;
//     y = 222222;
//     z = 333;
// }
// console.log(typeof triple);
// console.log(triple.length);

// const num1 = 3;
// const num2 = 5;
// const num3 = 7;
// triple(num1, num2, num3);
// console.log(num1, num2, num3);  // 3 5 7
// console.log(typeof null);   // object

function triple(x, y, z) {
    x.age = 8888;
    // y = 222222;
    // z = 333;
}
const myObj = { name: 'kuddus', age: 17 };
triple(myObj);
console.log(myObj);