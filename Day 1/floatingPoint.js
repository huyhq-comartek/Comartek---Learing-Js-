// NGUYÊN NHÂN GÂY LỖI FLOATING POINT
// VD con số 1.4: con số 1.4 sẽ không phải được ghép bởi 2 chữ số 
// 1 và 4 cùng dấu . ngăn cách như cách ta hiểu thông thường, mà 
// nó sẽ là:
// Math.pow(2,1) + Math.pow(2,-2) + Math.pow(2,-3) + Math.pow(2,-7) + ....
// Giá trị 1.4 mà ta hiểu, máy tính sẽ chỉ có thể hiểu là 1.3999999999,
// rất rất rất gần với 1.4 , nhưng không bao giờ bằng chính xác như vậy.

//EXAMPLE 
console.log("ORIGINAL RESULT:")
console.log('   ',0.1 + 0.2)     //KQ: 0.30000000000000004

//HOW TO SOLVE THIS PROBLEMS:
// You have a few options:

// 1. Use a special datatype for decimals, like "decimal.js" - Links: https://github.com/MikeMcl/decimal.js/
// import library from git
import Decimal from './node_modules/decimal.js/decimal.mjs'

var x = new Decimal(0.1 + 0.2)

console.log('USE "decimal.js library":')
console.log('   ',x)     //KQ: Em chưa thực hiện thành công


// 2. Format your result to some fixed number of significant digits, like this: 
console.log('USE ".toFixed(2)":')
console.log('   ',(0.1 + 0.2).toFixed(2))  //KQ: 0.30

// 3. Convert all your numbers to integers: Use Math methods floor, ceil, round, trunc
console.log('USE "MATH methods":')
console.log('   ',Math.floor(0.1 + 0.2))   //KQ: 0
console.log('   ',Math.ceil(0.1 + 0.2))    //KQ: 1
console.log('   ',Math.round(0.1 + 0.2))   //KQ: 0
console.log('   ',Math.trunc(0.1 + 0.2))   //KQ: 0