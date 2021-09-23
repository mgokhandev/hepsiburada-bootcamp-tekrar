// 1.
// const users = ['Mehmet', 'Ahmet', 'Ayse', 'Fatma'];
// const users2 = ['Burak', ...users];

// console.log('users', users);
// console.log('users2', users2);

// 2.

// const user = {
//     name: 'Veli',
//     surname: 'Kali',
// };

// const new_user = {
//     ...user,
//     age: 38,
// };

// console.log(user);
// console.log(new_user);

// 3.

const users = [{
        name: 'Gokhan',
    },
    {
        name: 'Ali',
    },
    {
        name: 'Ayse',
    },
    {
        name: 'Aslı',
    },
];

const new_users = [...users, { name: 'Emine' }, 4, 'Test'];

console.log('users', users);
console.log('new_users', new_users);