// Завдання 2
//
// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
//
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// Copy code
// <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// Copy code
// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. Присвойте значення отримані від цих виразів до змінних


function fetchTodoById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}


function fetchUserById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

const responses = await Promise.all([
    fetchTodoById('1'),
    fetchUserById('1'),
])
console.log(responses)

const firstResponse  = await Promise.race([
    fetchTodoById('1'),
    fetchUserById('1'),
])
console.log(firstResponse)