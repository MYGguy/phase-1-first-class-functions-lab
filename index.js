const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(names) {
    return names.slice(0, 2)
};

// console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function(names) {
    return names.slice(names.length - 2, names.length)
}

// console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// console.log(selectingDrivers[0](drivers));

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

// console.log(fareDoubler(16));

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(names, selection) {
    if (selection === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(names);
    } else if (selection === returnLastTwoDrivers) {
        return returnLastTwoDrivers(names);
    }
}

// console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));