import axios from "axios";

// console.log('Veri çekme işlemi başlıyor...')

// // axios('https://jsonplaceholder.typicode.com/users')
// //     .then((res) => res.data)
// //     .then(users => console.log(users));

// axios('https://jsonplaceholder.typicode.com/posts/1')
//     .then((res) => res.data)
//     .then((post) => {
//         console.log('Post Yüklendi!', post);


//         console.log('User yükleniyor...');

//         axios(`https://jsonplaceholder.typicode.com/users/${post.userId}`).then((res) => {
//             console.log('User yüklendi...', res.data);
//         });
//     });

// Async / Await
// async function getData() {


//     console.log('Post yükleniyor...');
//     const { data: post } = await axios('https://jsonplaceholder.typicode.com/posts/20');

//     console.log('User yükleniyor...')
//     const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${post.userId}`);

//     console.log('Todos yükleniyor...')
//     const { data: todos } = await axios(`https://jsonplaceholder.typicode.com/todos?userId=${post.userId}`);

//     console.log(post);
//     console.log(user);
//     console.log(todos);
// }

// getData();

// //Anonim Fonksiyon

// (() => {
//     console.log('Selam')
// })();


// Anonim Foksiyon'da try - catch

(async() => {
    try {
        const { data: post } = await axios('https://jsonplaceholder.typicode.com/posts/20');
        const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        const { data: todos } = await axios(`https://jsonplaceholder.typicode.com/todos?userId=${post.userId}`);

        console.log('post', post);
        console.log('user', user);
        console.log('todos', todos);
    } catch (err) {
        console.error(err.message);
    }
})();