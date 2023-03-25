//1
function getFruit(fruit) {
    return new Promise((resolve, reject) => {
    if (fruit === "watermelon") {
        setTimeout(() => {
        reject("Sorry, we're out of watermelons.");
        }, 2000);
    } else {
        setTimeout(() => {
        resolve(`Here is your ${fruit}`);
        }, 1000);
    }
    });
}

const userInput = prompt("Enter the name of the fruit:");

getFruit(userInput)
    .then((message) => console.log(message))
    .catch((error) => console.error(error));