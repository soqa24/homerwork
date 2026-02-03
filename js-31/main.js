// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.
function calculateFinalPrice(basePrice, discountPercentage, taxRate) {
    // 1. Вычисляем сумму скидки
    const discountAmount = basePrice * (discountPercentage / 100);

    // 2. Вычисляем цену после применения скидки
    const priceAfterDiscount = basePrice - discountAmount;

    // 3. Вычисляем сумму налога
    const taxAmount = priceAfterDiscount * (taxRate / 100);

    // 4. Прибавляем налог к цене после скидки, чтобы получить итоговую цену
    const finalPrice = priceAfterDiscount + taxAmount;

    return finalPrice;
}

console.log(calculateFinalPrice(100, 10, 20));
// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".
function checkAccess(username, password) {
    // Проверяем, соответствует ли имя пользователя "admin" И пароль "123456"
    if (username === "admin" && password === "123456") {
        return "Доступ разрешен";
    } else {
        return "Доступ запрещен";
    }
}
console.log(checkAccess("admin", "123456"));
// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.
function getTimeOfDay(hour) {
    if (hour < 0 || hour > 23) {
        return "Некорректное время";
    }
    if (hour >= 0 && hour <= 5) {
        return "Ночь";
    } else if (hour >= 6 && hour <= 11) {
        return "Утро";
    } else if (hour >= 12 && hour <= 17) {
        return "День";
    } else if (hour >= 18 && hour <= 23) {
        return "Вечер";
    }
    // Этот return теоретически недостижим, если все диапазоны покрыты и проверен вход.
    // Но можно добавить для подстраховки, если вдруг логика изменится.
    return "Некорректное время";
}
console.log(getTimeOfDay(18))
// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".
function findFirstEven(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            return i;
        }}
    return "Чётных чисел нет";
}
console.log(findFirstEven(1, 10))
// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"