// Your code here

const firstArr = ["frog", "secondSun", "Mr.", 20]

const createEmployeeRecord = (array) => {
   const foo = {
        "firstName" : array[0], 
        "familyName" : array[1], 
        "title" : array[2] , 
        "payPerHour" : array[3],
        "timeInEvents" : [],
        "timeOutEvents" : []
    }
    return foo;
}

console.log(createEmployeeRecord(firstArr))
const secondArr = ["dog", "Smith", "Ms.", 100]

const createEmployeeRecords = (arrOfArrs) => {
    const newEmployeeArr = arrOfArrs.map((arr) => {
        return createEmployeeRecord(arr);
    })
    // return newEmployeeArr;
    return newEmployeeArr
}

createEmployeeRecords([...firstArr, ...secondArr])