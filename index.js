// Write your solution in this file!
var customerName = 'bob' 
function returnBob() {
    return customerName;
};

function upperCaseCustomerName() {
    return customerName = 'BOB'
};

var bestCustomer
function setBestCustomer() {
    return bestCustomer = `not bob`
};

function overwriteBestCustomer() {
    return bestCustomer = `maybe bob`
};

const leastFavoriteCustomer = 'mike';

function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = returnBob();
};


console.log(returnBob())
