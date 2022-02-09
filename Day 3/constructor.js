//VD ve SPREAD
console.log('\n\nSPREAD\n');

const per1 = {
    name: 'Huy',
}

const per2 = {
    name: 'Nam',
}

const per3 = {
    name: 'Nhung',
}

const child1 = {
    name: 'Ngan',
}

const child2 = {
    name: 'Vu',
}

const child3 = {
    name: 'Khang',
}

per1.child = child2

child2.child = child3

/**
 * Thay cha cho thằng con, thằng con có vị trí trong ô nhớ ko đổi
 * nhưng lại nằm trong 2 thằng cha khác nhau có vị trí ô nhớ khác
 * nhau
 */
const per1x = {
    ...per1,
}

// in 2 đối tượng để quan sát 
console.log('Thay vỏ ngoài, nd không đổi: ');
console.log('per1 :', JSON.stringify(per1, null, 2))
console.log('per2 :', JSON.stringify(per1x, null, 2))

// 2 đối tượng không bằng nhau
console.log('\n2 đối tượng có ô nhớ khác nhau: ');
console.log('   per1 === per1x - trả về', per1 === per1x)

// tuy nhiên đối tượng con vẫn bằng nhau vì ô nhớ ko thay đổi
console.log('\n2 đối tượng có ô nhớ khác nhau: ');
console.log('   per1.child === per1x.child - trả về', per1.child === per1x.child)




// CONSTRUCTOR
console.log('\n\CONSTRUCTOR\n');

// VD:
function Intern(firstName, lastName, level) {
    this.firstName = firstName; //this ở đây là constructor Intern
    this.lastName = lastName;
    this.level = level;
    this.getName = function () {
        return `${this.lastName} ${this.firstName}` //this ở đây là intern1
    }
}

const intern1 = new Intern('Huy', 'Hoàng', 'beginner')

//thêm trường vào đối tượng
intern1.softSkill = 'Em có kĩ năng làm việc nhóm'

//thêm property vào constructor
Intern.prototype.job = 'Fullstack'





//THIS

// Từ khóa this trong Javascript đề cập đến đối tượng mà nó thuộc về
// Example:
// 1.
function Car(name, wheels, color) {
    this.name = name; //this ở đây là constructor Intern
    this.wheels = wheels;
    this.color = color;
    this.getFeature = function () {
        return `This car's name is ${this.name} and its color is ${this.color}` //this ở đây là mescedes
    }
}

const mescedes = new Intern('mescedes', 4, 'white')
// 2.
const person = {
    firstname: 'Huy',
    lastName: 'Hoang',
    fullname: function () {
        return `${this.firstname} ${this.lastName}`     // this ở đây là per1
    },
    child1: {
        firstname: 'Ngan',
        lastName: 'Hoang',
        fullname: function () {
            return `${this.firstname} ${this.lastName}`         //this ở đây là child1
        },
        child2: {
            firstname: 'Khanh',
            lastName: 'Hoang',
            fullname: function () {
                return `${this.firstname} ${this.lastName}`         //this ở đây là child2
            },
        }
    }
}

// Trong một phương thức, this tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu .)
console.log(person.child1.child2.fullname()) // 'Khanh Hoang' - this ở đây là child 2

// Đứng ngoài phương thức, this tham chiếu tới đối tượng global, khi này this là:  
// - Là window khi được chạy trên web
// - undefined khi chạy trong strict mode và khi không chạy trên web

// this là components khi handle events trên DOM
// VD: 
// const button = document.querySelector('#button')
// button.onclick(function(){
//   this.style.fontSize = '30px'      --- this ở đây là button
// })
