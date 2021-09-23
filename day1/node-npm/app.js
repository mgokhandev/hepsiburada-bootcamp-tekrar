import axios from "axios";

console.log('Veri çekme işlemi başlıyor...')

// axios('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.data)
//     .then(users => console.log(users));

axios('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => res.data)
    .then((post) => {
        console.log('Post Yüklendi!', post);


        console.log('User yükleniyor...');

        axios(`https://jsonplaceholder.typicode.com/users/${post.userId}`).then((res) => {
            console.log('User yüklendi...', res.data);
        });
    });