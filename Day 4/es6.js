/** ES6 */

/** let & const */

/**
 * let 
 * là cách khai báo biến thông dụng 
 * là sự cải tiến so với 'var' ở ES5
 */
// let có phạm vi khối mã ({...}) . VD:
{
    let hello = "say Hello";
    console.log(hello); // "say Hello"
}
console.log(hello) // hello is not defined

// let có thể update nhưng ko thể khai báo lại
let greeting = "say Hi";
greeting = "say Hello instead"; // Đoạn code này hoạt động mà ko sinh lỗi

let greeting = "say Hi";
let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

// tuy nhiên let có thể đc khai báo lại khi ở trong một scope khác
let greeting = "say Hi"; 
{
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"

/**
 * Giải thích :
 * Nguyên nhân là do khi dùng let, 2 biến giống tên nhau ở 2 scope khác nhau
 * thì được coi như 2 biến khác nhau
 */

/**
 * Hoisting of let:
 * khai báo let sẽ được đưa lên đầu scope 
 * nếu biến chưa được gắn giá trị thì sẽ gặp lỗi Reference Error
 */

/**
 * const
 * Các biến được khai báo với const có giá trị không đổi
 * Giá trị khởi đầu bắt buộc phải được gắn cho biến khi khai báo với const
 */

// const có phạm vi khối mã (giống với let)
{
    const hello = "say Hello";
    console.log(hello); // "say Hello"
}
console.log(hello) // hello is not defined

// const không thể updated hay khai báo lại
const greeting = "say Hi";
greeting = "say Hello instead"; // error: Assignment to constant variable. 

const greeting = "say Hi";
const greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
// tuy nhiên const có thể đc khai báo lại khi ở trong một scope khác

// Với object có chút khác biệt
const greeting = {
    message: "say Hi",
    times: 4
}

// Chúng ta ko thể:
greeting = {
    words: "Hello",
    number: "five"
} // error:  Assignment to constant variable.

// Nhưng có thể:
greeting.message = "say Hello instead"; // Không xảy ra lỗi

/**
 * Hoisting of const:
 * khai báo const sẽ được đưa lên đầu scope 
 * nếu biến chưa được gắn giá trị thì sẽ gặp lỗi Reference Error
 */


//====================================================//
/** Arrow Function */

// Hàm Arrow cho phép chúng ta cú pháp hàm ngắn gọn hơn
const sum = (a, b) => a + b

// Với hàm cần thực hiện nhiều công việc, ta cần thêm {}
const sum = (a, b) => {
    a++
    return a + b
}

// Hàm chỉ có 1 tham số truyền vào có thể bỏ dấu ()
const log = log => console.log(log)

// Khi hàm trả về một object, thêm dấu ngoặc () bên ngoài object
const obj1 = (a, b) => ({a: a, b: b})
console.log(obj1(1, 2)) // { a: 1, b: 2 }

// Arrow Function ko áp dụng được cho Constructor
const Course = (name, price) => {
    this.name = name
    this.price = price
}

const jsCourse = new Course('Javascript', 1000000)
console.log(jsCourse) // Uncaught TypeError: Course is not a constructor at ...



//====================================================//
/** Enhanced Object Literals */

// Định nghĩa key: value cho Object
const name = 'Javascript'
const price = 100000

const course = {
    name, 
    price
}

console.log(course); // { name: 'Javascript', price: 100000 }

// Định nghĩa method cho Object

const course1 = {
    name, 
    price,
    getName() {
        return this.name;
    }
}

console.log(course1.getName()) // Javascript

// Định nghĩa key cho Object dưới dạng biến
const fieldName = 'name'
const fieldPrice = 'price'

const course2 = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 'price'
}

console.log(course2) // { name: 'Javascript', price: 100000 }




//====================================================//
/** Template Strings */

// Syntax
`This is syntax of Template string`

// Thêm biến: sử dụng ${}
const myName = 'Huy'
const tempateString = 'Hà Đông'
console.log(`Tôi là ${myName}, tôi sống ở ${tempateString}`)  // Tôi là Huy, tôi sống ở Hà Đông

// Để in ${}, sử dụng forwardslash '\'
console.log(`Cách in \${} là thêm '\\' vào trước nó`) // Cách in ${} là thêm '\' vào trước nó

// Có thể xuống dòng ko cần dùng đến '\n'
console.log(`line 1  
line 2
line 3
line 4`)    

/**
 *  line 1
 *  line 2
 *  line 3
 *  line 4
 */




//====================================================//
/** Destructuring */

// 2 loại là object Destructuring và array Destructuring
const characters = [1, 2, 3]
const [a, b, c] = characters
console.log(a, b, c) // 1 2 3

const info = {
    name: 'Huy',
    age: 22
}
const { name: name1, age: age1 } = info
console.log(name1, age1) // Huy 22

// bỏ qua một giá trị
const [d, , f] = characters
console.log(d, f) // 1 3

// ...rest trong destructuring
const [g, ...rest] = characters
console.log(g, rest) // 1 [ 2, 3 ]

const { name: name2, ...rest } = info
console.log(name2, rest) // Huy  { age: 22 }


//====================================================//
/** Promise */
const promise = new Promise(
    function(resolve, reject) {
        setTimeout(() => {
            // resolve()
            reject('co loi')
        }, 5000)
    }
)

promise
    .then(() =>
        console.log('thanh cong')   // thanh cong
    )
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Done!');   // Done!
    })


//====================================================//
/** Async + Await */

//====================================================//
/** Class */
