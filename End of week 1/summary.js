//FLOATING POINT
/**
 * NGUYÊN NHÂN GÂY LỖI FLOATING POINT
 * - Do bộ nhớ máy tính là có hạn, ta không thể lưu con số với độ chính xác tuyệt đối.
 */
// EXAMPLE
console.log(0.1 + 0.2) //KQ: 0.30000000000000004

// CÁCH GIẢI QUYẾT
/**
 * 1. Xử dụng thư viện ( Trong vd này là thư viện big.js)
 * @param number 
 * - Tính toán bằng các method : minus(-), plus(+), div(/), abs(|x|), ... 
 * - Sử dụng method valueOf() để xem kết quả trả về
 * @return kết quả trả về dưới dạng String
 * - Sử dụng Number() để biến kq về dạng number
 */
const bigJs = new Big(0.1) // Khai báo biến bằng thư viện
const resultOfUsingLib = bigJs.plus(0.2)
console.log(resultOfUsingLib.valueOf()); // "0.3" 
console.log(Number(resultOfUsingLib.valueOf())); // 0.3
/**
 * 2. Sử dụng toFixed() hoặc toPrecision()
 * @param number 
 * - toFixed(n) n là số chữ số sau dấu phẩy
 * - toPrecision n là tổng số chữ số
 */
const decimal = 123.45666666
console.log(decimal.toFixed(5)); // 123.45667
console.log(decimal.toPrecision(5)); // 123.46
/**
 * 3. Sử dụng các method của Math: floor, ceil, round, trunc
 */
console.log(Math.floor(0.1 + 0.2)) //KQ: 0
console.log(Math.ceil(0.1 + 0.2)) //KQ: 1
console.log(Math.round(0.1 + 0.2)) //KQ: 0
console.log(Math.trunc(0.1 + 0.2)) //KQ: 0

//=======================================================================//
/**NULL && UNDEFINED */
/**
 * - null là ko tồn tại, ko có giá trị
 * - Nó được gán cho biến để đại diện như là 1 biến ko có giá trị
 * - Kiểu dữ liểu của null là object
 */
var nullVal = null;
console.log(null); // null
console.log(typeof null); // object
/**
 * - undefined có nghĩa là không có giá trị
 * - Khi bạn chưa gán giá trị cho biến thì giá trị của nó là undefined
 * - Kiểu dữ liệu của undefined là undefined
 */
var undefinedVal;
console.log(undefinedVal); // undefined
console.log(typeof undefinedVal); // undefined
/**
 * So sánh undefined với null
 */
console.log(null == undefined); // true
console.log(null === undefined); // false

//=====================================================================//
/**
 * So sánh == và ===
 * - 2 dấu bằng "==" : Chuyển đổi về cùng kiểu để so sánh
 * - 3 dấu bằng "===" : So sánh cả kiểu dữ liệu và giá trị
 */
const emptyObject1 = {};
const emptyObject2 = {};
const comparationNum1 = 3;
const comparationNum2 = 3;
const comparationString = '3';
/**
 * Khi so sánh 2 object, JS sẽ thực hiện so sánh địa chỉ ô nhớ của chúng trước
 */
console.log(emptyObject1 == emptyObject2); //false
/**
 * Đối với các kiểu nguyên thủy, JS sẽ không so sánh địa chỉ ô nhớ
 */
console.log(JSON.stringify(emptyObject1) === JSON.stringify(emptyObject2)); //true
console.log(comparationNum1 === comparationNum2); //true
console.log(comparationNum1 === comparationString); //false
/**
 * Khi so sánh 2 dấu bằng, JS sẽ cố chuyển đổi 2 vế về cùng kiểu dữ liệu
 */
console.log(comparationNum1 == comparationString); //true
console.log(comparationNum1 === +comparationString); //true

//========================================================//


// Hàm kiểm tra một giá trị là object
function isObject(obj) {
	return obj != null && typeof obj === "object";
}
// Hàm so sánh sâu
function isDeepEqual(obj1, obj2) {
	const keys1 = Object.keys(obj1);
	console.log("keys1", keys1); // keys1 [ 'y', 'metadata' ]
	const keys2 = Object.keys(obj2);

	// nếu số lượng keys khác nhau thì chắc chắn khác nhau
	if (keys1.length !== keys2.length) {
		return false;
	}

	for (const key of keys1) {
		const val1 = obj1[key];
		const val2 = obj2[key];
		console.log(val1, val2);

		// kiểm tra xem hai giá trị có cùng là object hay không
		const areObjects = isObject(val1) && isObject(val2);

		// nếu cùng là object thì phải gọi đệ quy để so sánh 2 object
		if (areObjects && !isDeepEqual(val1, val2)) {
			return false;
		}

		// nếu không cùng là object thì so sánh giá trị
		if (!areObjects && val1 !== val2) {
			return false;
		}
	}
	return true;
}

let point1 = {
	y: 1,
	y: 2,
	meta: {
		type: "point",
		age: 12
	}
};
let point2 = {
	x: 1,
	y: 2,
	meta: {
		type: "point",
		age: 13
	}
};

console.log("so sánh 2 object ", isDeepEqual(point1, point2));

//=====================================================================//
/**
 * So sánh tốc độ các vòng lặp
 * - Vòng lặp For thông thường là nhanh nhất do số lần lặp được cung cấp từ trước
và không cần phải tiền xử lý trước khi lặp như vòng lặp forEach, forin hay forof
 */
/**
 * Hàm tính toán thời gian thực thi
 * @param title - Tiêu đề in ra trước khi thực hiện callback
 * @param callback - Callback cần tính toán thời gian thực thi
 * @return - Thời gian cần để thực thi callback
 */
function getExecutionTime(title, callback) {
	console.info(title);
	const start = Date.now();
	callback();
	const end = Date.now();
	return end - start;
}
/**
 * Các biến dùng chung cho các test case
 */
const n = 300000;
const arr = Array.from({
	length: n
}, (_, i) => i + 1);
let sum, j;

/**
 * Các hàm test case
 */
function testNormalFor() {
	sum = 0;
	for (let i = 0; i < n; i++) {
		sum += arr[i];
	}
}

function testForin() {
	sum = 0;
	for (i in arr) {
		sum += arr[i];
	}
}

function testForof() {
	sum = 0;
	for (i of arr) {
		sum += i;
	}
}

function testForeach() {
	sum = 0;
	arr.forEach((v) => (sum += v));
}

function testWhileloop() {
	sum = 0;
	j = 0;
	while (j < n) {
		sum += arr[j++];
	}
}

function testDoWhile() {
	sum = 0;
	j = 0;
	do {
		sum += arr[j++];
	} while (j < n);
}

console.log(getExecutionTime('Normal for caculating...', testNormalFor));
console.log(getExecutionTime('For in caculating...', testForin));
console.log(getExecutionTime('For of caculating...', testForof));
console.log(getExecutionTime('For each caculating...', testForeach));
console.log(getExecutionTime('While loop caculating...', testWhileloop));
console.log(getExecutionTime('Do while loop caculating...', testDoWhile));

//=====================================================================//
/** SCOPE */
/**
 * Có 3 loại:
 * -Global: Biến là biến global khi được khai báo toàn cục, không nằm trong khối mã
 * hay function nào, có thể truy cập từ mọi nơi trong code
 * -Code Block: Khối mã {} : let, const - biến được khai báo với let, const trong 1
 * khối mã không thể truy cập bên ngoài khối mã đó
 * -Local Scope: Hàm : var, function - không thể truy cập ngoài các function nó được 
 * khai báo (nếu let, const được khai báo trong local scope thì cũng ko thể truy cập 
 * bên ngoài vì Hàm cũng có khối mã) 
 */
/** Loại 1: */
const scopeEg = 2 
{
	console.log('scopeEg: ', scopeEg); // 2
}
/** Loại 2: */
{
	const scopeEg1 = 3;
	console.log('scopeEg1 trong khối mã: ', scopeEg1); // 3
}
// Gọi biến ngoài block sẽ gây lỗi Reference Error
// console.log('scopeE1 ngoài khối mã: ', scopeEg1);  // Uncomment để thấy lỗi
/** Loại 3: */
function scopeEg2() {
	var scopeEg2x = 4;
	console.log('scopeEg2x trong function: ', scopeEg2x);
}
// Gọi biến ngoài function sẽ gây lỗi Reference Error
// console.log('scopeEg2x ngoài function: ', scopeEg2x);  // Uncomment để thấy lỗi

//==================================================//
/** So sánh tham chiếu và tham trị 
 * - Tham chiếu: 2 đối tượng cùng chiếu đến một ô nhớ
 * - Tham trị: 2 biến khác ô nhớ nhưng giá trị giống nhau
 */
//Tham chiếu
const object1 = {};
const object2 = object1;
object2.data = 'data';
console.log(object1); //{ data: 'data' }
console.log(object2); //{ data: 'data' }
//Tham trị
const num1 = 1;
let num2 = num1;
num2++;
console.log(num1);
console.log(num2);

//===================================================//
/** Closure */
/** 
 * Closure là gì ?
 * - Là một hàm có thể ghi nhớ nơi nó được tạo ra và truy cập được
 * biến ở ngoài phạm vi của nó
 * - Closure có tính ứng dụng là giúp code ngắn gọn hơn
 * - Lưu ý: Biến được tham chiếu (refer) trong closure sẽ ko đc
 * xóa khỏi bộ nhớ khi hàm cha thực hiện xong 
 */
function createCounter() {
	let counter = 0

	function increase() {
		return ++counter
	}

	return increase
}

const counter1 = createCounter()
console.log(counter1()) // 1
console.log(counter1()) // 2
console.log(counter1()) // 3

//===================================================//
/** Bitwise Operator */
/** 
 * & - AND 
 * - Đặt mỗi bit thành 1 nếu cả hai bit là 1 
 * */
console.log(5 & 1); // 1 - Lí do: 0101 & 0001 => KQ: 0001
/** 
 * | - OR 
 * - Đặt mỗi bit thành 1 nếu một trong hai bit là 1
 * */
console.log(5 | 1); // 1 - Lí do: 0101 | 0001 => KQ: 0101
/** 
 * ~ - NOT 
 * - Đảo ngược tất cả các bit
 * */
console.log(~5); // 10 - Lí do: ~0101 => KQ: 1010
/** 
 * << - Zero fill left shift 
 * - Trượt sang trái bằng cách đẩy các số 0 từ bên phải và 
 * để các bit ngoài cùng bên trái rơi ra
 * */
console.log(5 << 1); // 10 - Lí do: 0101 << 1 => KQ: 1010
/** 
 * ^ - XOR
 * - Đặt mỗi bit thành 1 nếu chỉ một trong hai bit là 1
 * */
console.log(5 ^ 1); // 4 - Lí do: 0101 ^ 0001 => KQ: 0100
/** 
 * >> - Signed right shift 
 * - Trượt sang phải bằng cách đẩy các bản sao của bit ngoài cùng 
 * bên trái vào bên trái và để các bit ngoài cùng bên phải rơi ra
 * */
console.log(5 >> 1); // 2 - Lí do: 0101 >> 1 => KQ: 0010
/** 
 * >>> - Zero fill right shift 
 * - Trượt sang phải bằng cách đẩy các số 0 từ bên trái và 
 * để các bit ngoài cùng bên phải rơi ra
 * */
console.log(5 >>> 1); // 2 - Lí do: 0101 >>> 1 => KQ: 0010

//================================================================//
/** THIS */
/** Từ khóa this trong Javascript đề cập đến đối tượng mà nó thuộc về */
// Example:
// 1.
function Car(name, wheels, color) {
	this.name = name; //this ở đây là constructor Car
	this.wheels = wheels;
	this.color = color;
	this.getFeature = function () {
		return `This car's name is ${this.name} and its color is ${this.color}` //this ở đây là mescedes
	}
}

const mescedes = new Car('mescedes', 4, 'white')
// 2.
const person = {
	firstname: 'Huy',
	lastName: 'Hoang',
	fullname: function () {
		return `${this.firstname} ${this.lastName}` // this ở đây là per1
	},
	child1: {
		firstname: 'Ngan',
		lastName: 'Hoang',
		fullname: function () {
			return `${this.firstname} ${this.lastName}` //this ở đây là child1
		},
		child2: {
			firstname: 'Khanh',
			lastName: 'Hoang',
			fullname: function () {
				return `${this.firstname} ${this.lastName}` //this ở đây là child2
			},
		}
	}
}

// Trong một phương thức, this tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu .)
console.log(person.child1.child2.fullname()) // 'Khanh Hoang' - this ở đây là child 2

// Đứng ngoài phương thức, this tham chiếu tới đối tượng global, khi này this là:  
// - Là window khi được chạy trên web
// - undefined khi chạy trong strict mode và khi không chạy trên web
console.log('this khi ở global: ', this);

// this là components khi handle events trên DOM
// VD: 
const button = document.querySelector('#button')
button.onclick = function () {
	console.log(this); // <button id="button">Click here</button>
}

/** Apply, call, bind */

//============================================================//
/** Es6 */
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

let greeting1 = "say Hi";
//let greeting1 = "say Hello instead"; // error: Identifier 'greeting' has already been declared

// tuy nhiên let có thể đc khai báo lại khi ở trong một scope khác
let greeting2 = "say Hi"; 
{
    let greeting2 = "say Hello instead";
    console.log(greeting2); // "say Hello instead"
}
console.log(greeting2); // "say Hi"

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
    const hello1 = "say Hello";
    console.log(hello1); // "say Hello"
}
//console.log(hello1) // hello is not defined

// const không thể updated hay khai báo lại
const greeting3 = "say Hi";
// greeting3 = "say Hello instead"; // error: Assignment to constant variable. 

const greeting4 = "say Hi";
//const greeting4 = "say Hello instead"; // error: Identifier 'greeting' has already been declared

// tuy nhiên const có thể đc khai báo lại khi ở trong một scope khác

// Với object có chút khác biệt
const greetingObj = {
    message: "say Hi",
    times: 4
}

// Chúng ta ko thể:
/*
greetingObj = {
    words: "Hello",
    number: "five"
} */ // error:  Assignment to constant variable.

// Nhưng có thể:
greetingObj.message = "say Hello instead"; // Không xảy ra lỗi

/**
 * Hoisting of const:
 * khai báo const sẽ được đưa lên đầu scope 
 * nếu biến chưa được gắn giá trị thì sẽ gặp lỗi Reference Error
 */

//==========================================================//
/** Arrow Function */
// Hàm Arrow cho phép chúng ta cú pháp hàm ngắn gọn hơn
const aSum = (a, b) => a + b

// Với hàm cần thực hiện nhiều công việc, ta cần thêm {}
const aSum1 = (a, b) => {
	a++
	return a + b
}

// Hàm chỉ có 1 tham số truyền vào có thể bỏ dấu ()
const aLog = log => console.log(log)

// Khi hàm trả về một object, thêm dấu ngoặc () bên ngoài object
const aObj = (a, b) => ({
	a: a,
	b: b
})
console.log(aObj(1, 2)) // { a: 1, b: 2 }

// Arrow Function ko áp dụng được cho Constructor
const aCourse = (name, price) => {
	this.name = name
	this.price = price
}
// Uncomment 2 dòng code dưới để xem kq
// const jsACourse = new aCourse('Javascript', 1000000)
// console.log(jsACourse) // Uncaught TypeError: aCourse is not a constructor at ...

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
console.log(`This is syntax of Template string`) // This is syntax of Template string

// Thêm biến: sử dụng ${}
const myName = 'Huy'
const tempateString = 'Hà Đông'
console.log(`Tôi là ${myName}, tôi sống ở ${tempateString}`) // Tôi là Huy, tôi sống ở Hà Đông

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
const {
	name: name1,
	age: age1
} = info
console.log(name1, age1) // Huy 22

// bỏ qua một giá trị
const [d, , f] = characters
console.log(d, f) // 1 3

// ...rest trong destructuring
const [g, ...restOfArray] = characters
console.log(g, restOfArray) // 1 [ 2, 3 ]

const {
	name: name2,
	...restOfObject
} = info
console.log(name2, restOfObject) // Huy  { age: 22 }

//===========================================================//
/** Async Await */
/**
 * Hàm Async được khai báo với từ khóa async, lúc này có thể sử dụng từ khóa await trong hàm đó
 * Từ khóa async await cho các hàm bất đồng bộ, các promise được viết gọn gàng hơn
 */
function resolveAfter2Seconds() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolved')
		}, 2000)
	})
}
async function asyncCall() {
	console.log('calling')
	const result = await resolveAfter2Seconds()
	console.log(result) // expected output: "resolved"
}
asyncCall()

//=======================================================//
/** Class */
/** 
 * Constructor của ES6 có cú pháp rõ ràng và dễ nhìn hơn
 * - body của class được thực thi trong strict mode
 */
class Animal {
	constructor(name, legs) {
		this.name = name
		this.legs = legs
	}
	getName() {
		return this.name
	}
	getLegs() {
		return this.legs
	}
}

const Dog = new Animal('Dog', 4)

console.log(Dog.getName()); // Dog

/**
 * Hoisting
 * class phải được tạo trc khi sử dụng
 */

// Kế thừa trong class ES6
class Animal1 {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log(`${this.name} makes a noise.`);
	}
}

class Dog1 extends Animal1 {
	constructor(name) {
		super(name); // gọi constructor và truyền tham số
	}

	speak() {
		console.log(`${this.name} barks.`);
	}
}

let dog = new Dog1('Mitzie');
dog.speak(); // Mitzie barks.
console.log('dog instanceof Animal1: ', dog instanceof Animal1); // true

//==================================================================//
/** Default, Rest, Spread */
/** 
 * - Default cho phép bạn gán giá trị cho tham số truyền vào
 * - Hàm sẽ lấy giá trị đc gán cho tham số nếu vị trí của tham số đó
 * ko có giá trị truyền vào hoặc được truyền vào undefined
 */
function multiply(a, b = 1) {
	return a * b;
}

console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5
/**
 * - Rest: cú pháp của tham số rest cho phép chấp nhận các đối số chưa
 * được khai báo thành một array
 */
function sum1(...theArgs) {
	return theArgs.reduce((previous, current) => {
		return previous + current;
	});
}
console.log(sum1(1, 2, 3)); // 6
console.log(sum1(1, 2, 3, 4)); // 10
/**
 * - Spread: bỏ dấu [] và rải các phần tử 
 */
function sum2(x, y, z) {
	return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum2(...numbers)); //6

console.log(sum2.apply(null, numbers)); // 6

/** PROMISE */
/**
 * Promise có 3 trạng thái:
 * - Pending: Đang xử lý => Tình trạng này gây rò rỉ bộ nhớ
 * - Fulfilled: Thành công
 * - Rejetec: Thất bại
 */

// VD:
const promise1 = new Promise((resolve, reject) => {
	resolve('Successfully!')
})
promise1
	.then((data) => {
		console.log(data) // Successfully
	})
	.catch((err) => {
		console.log(err) // chạy vào catch khi có reject()
	})
	.finally(() => {
		console.log('Finish here!') // Finish here!
	})

/**
 * Cách hoạt động của Promise:
 * - Promise có thể có nhiều then
 * - Trường hợp then ko trả về 1 promise thì các then sẽ chạy đồng thời
 * - Còn trả về promise thì sẽ chạy lần lượt
 * - Bất kì then nào reject() thì sẽ dừng chạy tại then đó và trả lỗi về catch()
 */
promise1
	.then(() => {
		return new Promise((resolve) => {
			resolve('lan 1')
		})
	})
	.then((data) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				console.log(data) // sau 2s in ra: lan 1
				resolve('lan 2')
			}, 2000);
		})
	})
	.then((data) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				console.log(data) // sau 7s in ra: lan 2 
				resolve('lan 3')
			}, 5000);
		})
	})
	.then((data) => {
		console.log(data) // sau 7s in ra: lan 3
	})
	.catch((err) => {
		console.log(err) // chạy vào catch khi 1 then có reject()
	})

// Promise method
// Promise.resolve - luôn chạy vào then, ko chạy vào catch
const promise2 = Promise.resolve('You won')
promise2
	.then((data) => {
		console.log(data) // You won
	})
	.catch((err) => {
		console.log(err)
	})

// Promise.reject - luôn chạy vào catch, ko chạy vào then
const promise3 = Promise.reject('You lose')
promise3
	.then((data) => {
		console.log(data)
	})
	.catch((err) => {
		console.log(err) // You lose
	})

/**
 * Promise.all()
 * - Trả về một promise khi tất cả các promise truyền vào được hoàn thành
 * - Promise trả về sẽ là resolve nếu tất cả promise truyền vào đều trả về resolve
 * - Promise trả về sẽ là reject nếu 1 promise truyền vào trả về reject
 */
const promiseAll1 = Promise.resolve(3);
const promiseAll2 = 42;
const promiseAll3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 3000, 'foo')
})

Promise.all([promiseAll1, promiseAll2, promiseAll3])
	.then((values) => {
		console.log(values) // expected output: Array [ 3, 42, 'foo' ]
	})
	.catch((error) => {
		console.log(error) // in ra lỗi nếu reject
	})

/**
 * Promise.allSettled()
 * - Trả về một promise resolve dù tất cả promise truyền vào trả về resolve hay là reject,
 *   cùng 1 data là 1 mảng miêu tả đầu ra của từng promise, gồm có { status: ..., value: ... }
 */
const promiseAllSettled = [promiseAll1, promiseAll2, promiseAll3]
Promise.allSettled(promiseAllSettled)
	.then((results) => results.forEach((result) => console.log(result.status))); // fulfilled fulfilled fulfilled

/**
 * Promise.any()
 * - Trả về promise resolve nhanh nhất
 * - Nếu tất cả promise truyền vào là rejected thì promise trả về sẽ là rejected
 */
const promiseAny1 = Promise.reject(0)
const promiseAny2 = new Promise((resolve) => setTimeout(resolve, 1000, 'fast'))
const promiseAny3 = new Promise((resolve) => setTimeout(resolve, 5000, 'slow'))

const promiseAny = [promiseAny1, promiseAny2, promiseAny3]

Promise.any(promiseAny).then((value) => console.log(value)) // fast

/**
 * Promise.race()
 * - Trả về promise truyền vào mà chạy nhanh hơn, bất kể promise đó fulfilled or rejected
 */
const promiseRace1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 5000, 'one')
});

const promiseRace2 = new Promise((resolve, reject) => {
	setTimeout(reject, 1000, 'two')
});

// Promise trả về reject nhanh hơn
Promise.race([promiseRace1, promiseRace2])
	.then((value) => {
		console.log(value)
	})
	.catch((error) => {
		console.log(error) // two
	})