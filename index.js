const returnFirstTwoDrivers = function(arr){
    let array = []
    for (let i=0; i<2; i++){
        array.push(arr[i])
    }
    return array
    }

const returnLastTwoDrivers = function(arr){
        return arr.slice(-2)
    }

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(number) {
    return function(fare){
       return number * fare
    }
}

const fareDoubler = fare => fare * 2
const fareTripler = fare => fare * 3

const selectDifferentDrivers = function (arrayOfDrivers, func) {
    return func(arrayOfDrivers)
}