//HOW TO COMPARE TWO OBJECTS
console.log("\nCOMPARE TWO OBJECTS")

//CREATE OBJECTS
//Object 1
var object1 = {
    firstName: 'Huy',
    lastName: 'Hoang',
    age: 22
}

//Object 2 - exactly same as Object 1
var object2 = {
    firstName: 'Huy',
    lastName: 'Hoang',
    age: 22
}

//Object 3 - has same key but different value from Object 1
var object3 = {
    firstName: 'Quan',
    lastName: 'Hoang',
    age: 22
}

//Object 4 - has same value but different key from Object 1
var object4 = {
    myFirstName: 'Huy',
    lastName: 'Hoang',
    age: 22
}

//FUNCTION COMPARE TWO OBJECTS
function objectComparison(x, y) {

    //Compare type of data
    if (typeof x !== 'object' || typeof y !== 'object') {
        return false;
    }

    //Compare length of 2 objects
    if (Object.keys(x).length !== Object.keys(y).length) {
        return false;
    }

    //Compare properties and values of 2 objects
    for (let i in x) {

        //Compare properties of 2 objects
        if (x.hasOwnProperty(i) !== y.hasOwnProperty(i))
            return false

        //Compare values of 2 objects
        if (x[i] !== y[i])
            return false
    }

    return true;
}

//RESULT
//Compare two equal objects - return true
console.log('\nCompare two equal objects - return true')
console.log('   ', 'Object1', object1)
console.log('   ', 'Object2', object2)
console.log('    Result', objectComparison(object1, object2))

//Compare two objects have different values - return false
console.log('\nCompare two objects have different values - return false')
console.log('   ', 'Object1', object1)
console.log('   ', 'Object3', object3)
console.log('    Result', objectComparison(object1, object3))

//Compare two objects have different properties - return false
console.log('\nCompare two objects have different properties - return false')
console.log('   ', 'Object1', object1)
console.log('   ', 'Object4', object4)
console.log('    Result', objectComparison(object1, object4))






//FLOATING POINT
console.log("\n\nFLOATING POINT")

// NGUYÊN NHÂN GÂY LỖI FLOATING POINT
// VD con số 1.4: con số 1.4 sẽ không phải được ghép bởi 2 chữ số 
// 1 và 4 cùng dấu . ngăn cách như cách ta hiểu thông thường, mà 
// nó sẽ là:
// Math.pow(2,1) + Math.pow(2,-2) + Math.pow(2,-3) + Math.pow(2,-7) + ....
// Giá trị 1.4 mà ta hiểu, máy tính sẽ chỉ có thể hiểu là 1.3999999999,
// rất rất rất gần với 1.4 , nhưng không bao giờ bằng chính xác như vậy.

// EXAMPLE
console.log("\nCalculate: 0.1 + 0.2")
console.log("Original result:")
console.log('   ', 0.1 + 0.2) //KQ: 0.30000000000000004

//HOW TO SOLVE THIS PROBLEMS:
// You have a few options:

// 1. Use a special datatype for decimals, like "decimal.js" - Links: https://github.com/MikeMcl/decimal.js/
// import library from git
import Decimal from 'decimal.js';

console.log('\nUSE "decimal.js library":')
console.log('   ', new Decimal(-123.4567000e+2)) //KQ: Em chưa thực hiện thành công


// 2. Format your result to some fixed number of significant digits, like this: 
console.log('\nUSE ".toFixed(2)":')
console.log('   ', (0.1 + 0.2).toFixed(2)) //KQ: 0.30

// 3. Convert all your numbers to integers: Use Math methods floor, ceil, round, trunc
console.log('\nUSE "MATH methods":')
console.log('   ', Math.floor(0.1 + 0.2), 'use floor') //KQ: 0
console.log('   ', Math.ceil(0.1 + 0.2), 'use ceil') //KQ: 1
console.log('   ', Math.round(0.1 + 0.2), 'use round') //KQ: 0
console.log('   ', Math.trunc(0.1 + 0.2), 'use trunc') //KQ: 0





// SCOPE 

// Có 3 loại:

// -Global: Biến là biến global khi được khai báo toàn cục, không nằm trong khối mã
// hay function nào.
// -Code Block: Khối mã {} : let, const - không thể truy cập nếu ko nằm trong khối mã
// -Local Scope: Hàm : var, function - không thể truy cập ngoài các function nó được 
// khai báo (nếu let, const được khai báo trong local scope thì cũng ko thể truy cập 
// bên ngoài vì Hàm cũng có khối mã) 







// REFERENCE AND VALUE
console.log('\n\n\n\nREFERENCE & VALUE\n')
// Example:

// Danh sách học sinh
let studentList = [{
        ten: 'Hoàng Quân',
        xepLoai: 'Giỏi',
        lop: 'G'
    },
    {
        ten: 'Hoàng Huy',
        xepLoai: 'Giỏi',
        lop: 'G'
    },
    {
        ten: 'Thùy Linh',
        xepLoai: 'Khá',
        lop: 'A'
    },
    {
        ten: 'Hoàng Nam',
        xepLoai: 'Kém',
        lop: 'C'
    }
]

// Hàm in sinh viên
function classtifyStudent(array) {
    // In ra các học sinh có xếp loại giỏi
    console.log('\n   Học sinh giỏi:')
    array.forEach(value => {
        if (value.xepLoai === 'Giỏi') {
            console.log(`   + ${value.ten}, Lớp: ${value.lop}`)
        }
    });
    // In ra các học sinh có xếp loại khá
    console.log('\n   Học sinh khá:')
    array.forEach(value => {
        if (value.xepLoai === 'Khá') {
            console.log(`   + ${value.ten}, Lớp: ${value.lop}`)

        }
    });
    // In ra các học sinh có xếp loại kém
    console.log('\n   Học sinh kém:')
    array.forEach(value => {
        if (value.xepLoai === 'Kém') {
            console.log(`   + ${value.ten}, Lớp: ${value.lop}\n`)

        }
    });
}

//In ra danh sách sinh viên trước khi thay đổi 
console.log('Danh sách sinh viên trước khi thay đổi giá trị của sinh viên:')
classtifyStudent(studentList)

//Thay đổi giá trị sinh viên 1
studentList[0].xepLoai = 'Khá'

//In ra danh sách sinh viên sau khi thay đổi 
console.log('\nDanh sách sinh viên trước khi thay đổi giá trị của sinh viên: (Hoàng Quân giờ là học sinh khá)')
classtifyStudent(studentList)