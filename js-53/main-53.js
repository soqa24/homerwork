// Задание 1.
// Дан массив пользователей:
const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false },
]
// Добавьте в конец массива двух пользователей:
const result = users.push({ name: 'Ann', age: 19, isAdmin: false },
    { name: 'Jack', age: 43, isAdmin: true })
console.log(users)
// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.
function getUserAverageAge(usersArray) {

    let totalAge = 0;

    usersArray.forEach(element => {
        totalAge += element.age;
    });

    return totalAge / usersArray.length;
}

console.log(getUserAverageAge(users));
// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.
function getAllAdmins(usersArray) {
    return usersArray.filter(user => user.isAdmin);
}

const admins = getAllAdmins(users);
console.log("Администраторы:", admins);
// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.
function first(arr, n){
    if (n == undefined || n == null){
        return [arr[0]];
    };
    if (n === 0){
        return [];
    };
    return arr.slice(0, n);
};
const baseArray = [10, 20, 30, 40, 50, 60, 70];
const nValue = parseInt(prompt("Введите число n для 4-ого задания:", "3"));
console.log(first(baseArray, nValue));