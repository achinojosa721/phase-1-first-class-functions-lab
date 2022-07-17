// Code your solution in this file!
const returnFirstTwoDrivers  = (x) => x.slice(0,2);
const returnLastTwoDrivers  = (x)=>x.slice(2,5);


const selectDifferentDrivers = (arrayOfDrivers, driversToReturn) => {
    return driversToReturn(arrayOfDrivers)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = (x) => {
    return function(fare) { return x * fare}
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);



