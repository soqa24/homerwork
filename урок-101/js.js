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

    const num1 = 20 
    const num2 = 10
    const operator = 'plus'

function calculate(num1, num2, operator) {
    let result;

    if (operator === 'plus') {
    result = num1 + num2;
    } else if (operator === 'minus') {
    result = num1 - num2;
    } else if (operator === 'multiply') {
    result = num1 * num2;
    } else if (operator === 'divide') {
    if (num2 === 0) {
        return "Деление на ноль!";
    }
    result = num1 / num2;
    } else {
    return "Неизвестный оператор";
    }

    return result;
}
