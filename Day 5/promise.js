/** PROMISE */
/**
 * Promise có 3 trạng thái:
 * - Pending: Đang xử lý => Tình trạng này gây rò rỉ bộ nhớ
 * - Fulfilled: Thành công
 * - Rejetec: Thất bại
 */

const { default: axios } = require("axios")

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

//================================================//
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

//==========================================================//
// Animation
// Start animation
function startAnimation() {
    console.log(' Start animation ')
}
// End animation
function endAnimation() {
    console.log(' End Animation ')
}
//import axios
const axios = require('axios').default;

function Spinner(){
    startAnimation()
    return axios
        .get('https://jsonplaceholder.typicode.com/todos/1sfsdf')
        .then((data) => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(
            endAnimation
        )
}

Spinner()