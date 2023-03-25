//2
function arrayManipulation(arr, operationCallback, filterCallback) {
    const modifiedArray = arr.map(operationCallback);
    const filteredArray = modifiedArray.filter(filterCallback);
    return filteredArray;
}

function double(num) {
    return num * 2;
}

function isEven(num) {
    return num % 2 === 0;
}

const userInput = prompt('Enter an array of numbers separated by commas (e.g., 1,2,3):');
const inputArray = userInput.split(',').map(Number);

const result = arrayManipulation(inputArray, double, isEven);
console.log(result);