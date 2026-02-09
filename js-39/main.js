// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
let person = {
    name: "Alex",
    age: 19,
};
console.log(person);
// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
function isEmpty(obj) {
    for (let key in obj) {
        //Если мы смогли войти сюда, значит тут что-то есть
        return false; 
    }
    //Если мы дошли досюда, значит тут пусто
    return true;
}
let data = {};
console.log(isEmpty(data)); // Выведет: true т.к. пустно

let user = { name: "Ivan" };
console.log(isEmpty(user)); // Выведет: false т.к. не пустно

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.
let task = {
    title: "Интересный заголовок",
    description: "Интересное описание",
    isCompleted: true
};

function cloneAndModify(obj, modifications) {
    return { ...obj, ...modifications };
}

let newTask = cloneAndModify(task, { isCompleted: false });

for (let key in newTask) {
    console.log(key + " = " + newTask[key]);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.
const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

function callAllMethods(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            obj[key]();
        }
    }
}

callAllMethods(myObject);

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);
