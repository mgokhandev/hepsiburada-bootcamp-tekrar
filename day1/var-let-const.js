// 1. Let tipindeki değişkenin içeriğini daha sonradan değiştirebiliyoruz. 
// let name = 'Gokhan';
// name = 'Dogan';
// console.log(name);

// 2.
// for (var i = 0; i < 5; i++) { 
//     console.log(i);
// }

// console.log("i'nin son degeri:", i); // Değişkenin let olması durumunda "i is not defined" hatası dönüyor, derste anlatıldı.

// 3.
// const pi = 3; 
// pi = 3.14;       // Yukarıda const olarak tanımlama yapıldığı için tekrardan tanımlama yapıldığında hata alınır
// console.log(pi);

// const users = ['Serhat', 'Gokhan', 'Ayse'];
// users.push('Mehmet'); // Array'e Mehmet'i ekledi
// // users = ['Mehmet']; // Const ile tanımlandığı için tekrardan tanımlama yapmada hata verir.

// console.log(users);

// 5. const tekrar tanımlama yapmaya izin vermez!

// const user = {
//     name: 'Gokhan',
//     surname: 'Dogan',
// };

// user = {
//     name: 'Ahmet',
//     surname: 'Kaya',
// };

// console.log(user);

// 6. Let için daha sonradan atama yapılabilir!

// let x = 10;
// let y = x;

// x = 15;

// console.log(x);
// console.log(y);

// 7. Const ile Obje tanımlama

// const user1 = {
//     name: 'Gokhan',
// };

// // const user2 = {...user1, name: 'Mehmet' };
// const user2 = Object.assign({}, user1, { name: 'Can' });

// console.log('user1', user1);
// console.log('user2', user2);