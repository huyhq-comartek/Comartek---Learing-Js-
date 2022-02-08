//HOW TO COMPARE TWO OBJECTS

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

//Object 3
var object3 = {
    firstName: 'Quan',
    lastName: 'Hoang',
    age: 22
}

//Object 4
var object4 = {
    myFirstName: 'Huy',
    lastName: 'Hoang',
    age: 22
}

//FUNCTION COMPARE TWO OBJECTS
function objectComparison(x, y){

    //Compare type of data
    if(typeof x !== 'object' || typeof y !== 'object'){
        return false;
    }

    //Compare length of 2 objects
    if(Object.keys(x).length !== Object.keys(y).length){
        return false;
    }

    //Compare properties and values of 2 objects
    for(let i in x){

        //Compare properties of 2 objects
        if(x.hasOwnProperty(i) !== y.hasOwnProperty(i)) 
            return false

        //Compare values of 2 objects
        if(x[i] !== y[i]) 
            return false
    }

    return true;
}

//RESULT
//Compare two equal objects - return true
console.log('Compare two equal objects - return true')
console.log('   ','Object1', object1)
console.log('   ','Object2', object2)
console.log('Result',objectComparison(object1, object2))

//Compare two objects have different values - return false
console.log('Compare two objects have different values - return false')
console.log('   ','Object1', object1)
console.log('   ','Object3', object3)
console.log('    Result',objectComparison(object1, object3))

//Compare two objects have different properties - return false
console.log('Compare two objects have different properties - return false')
console.log('   ','Object1', object1)
console.log('   ','Object4', object4)
console.log('    Result',objectComparison(object1, object4))
