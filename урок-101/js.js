const name = `Alex`

function greet(name) {
    return "Hello " + name;
}

console.log(greet(name));

// ==============================================================//

const numbers =   [1, 4, 5, 6, 9, 10, 11, 14, 16, 18];

function bigNumbers(arr){
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
        console.log(arr[i]);
    }
    }
}

    bigNumbers(numbers);

    // ===========================================//

    const firstNumber = 20
    const secondNumber = 10

    console.log(firstNumber *secondNumber)

    console.log(firstNumber -secondNumber)

    console.log(firstNumber +secondNumber)

    console.log(firstNumber /secondNumber)