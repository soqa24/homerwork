
const admis = {
    john: {
        age: 18,
        isAdmin:true,
        webDeveloper: true
    },

    alex: {
        age:18,
        isAdmin: true,
        webDeveloper: true,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}

console.log(admis.alex)
admis.alex.sayHello('alex')

//===================================================================//


const users = [
    {
        name: 'alex',
        age: 20,
        isAdmin: true
    },
    {
        name: 'john',
        age: 30,
        isAdmin: false
    },
    {
        name: 'dasha',
        age: 19,
        isAdmin: true
    }
]

let simpleUserCount = 0;

for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        simpleUserCount++;
    }
}

console.log("Количество простых пользователей: " + simpleUserCount);