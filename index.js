// Code your solution in this file!


let drivers = [`Antonia`, `Nuru`, `Amari`, `Mo`]


const returnFirstTwoDrivers = function () {
  return drivers.slice(0, 2);

};

const returnLastTwoDrivers = function () {
  return drivers.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function (number) {
    return num * number
  }

};

const fareDoubler = function (number) {
  return number * 2
};

const fareTripler = function (number) {
  return number * 3
};


function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers)
}

// function selectDifferentDrivers(drivers, func) {
//   return function func(returnFirstTwoDrivers) { }

// };

//multiply the fare TIMES ITSELF, not by 4
//one mistake was trying to push an anonymous function
// function createFareMultiplier(num1) {
//   return function () {
//     num1 * num1
//   }
// };































// const returnFirstTwoDrivers = function (drivers) {
//     return drivers.slice(0, 2)
// };

// const returnLastTwoDrivers = function (drivers) {
//     return drivers.slice(-2)
// }


// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


// function createFareMultiplier(num) {
//     return function(number) {
//         return num * number
//     }

// }

// function fareDoubler(num){
//     return num * 2
//   }

//   function fareTripler(num) {
//     return num * 3
//   }


//   function selectDifferentDrivers(arrayOfDrivers, func){
//     return func(arrayOfDrivers)
//   }
