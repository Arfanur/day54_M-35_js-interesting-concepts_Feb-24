/* 
Primitive Data types
1. number
2. string
3. boolean
4. undifined
5. null
6. symbol

non-primitive
1. object

 */

let a = 'hello';
let b = a;
// console.log(a, b);
a = 'gello';
// console.log(a, b);

const x = { job: 'web developer' };
const y = x;
console.log(x, y);
x.job = 'front end developer';
console.log(x, y);