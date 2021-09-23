//1.

// const user = {
//     name: 'Ahmet',
//     school: 'Cumhuriyet Uni',
//     age: 22,
// };

// let name = user.name;
// let school = user.school;
// let age = user.age;

// console.log(name, school, age);

//2. (Yakışıklı Yöntem :))

// const user = {
//     name: 'Ahmet',
//     school: 'Cumhuriyet Uni',
//     age: 22,
// };

// // let { name, school, age, } = user; // Daha sonradan takma isim tarzında isimlendirebilirsin {name: isim} gibi
// let { name: isim, school: okul, age: yas } = user;

// console.log(isim, okul, yas);

//3.

// const user = {  // Obje içerisinde obje tanımlaması yapıldı
//     name: 'Ahmet',
//     school: 'Cumhuriyet Uni',
//     age: 22,
//     address: {
//         city: 'Istanbul',
//         country: 'Turkey',
//     },
// };

// let { name: isim, school: okul, age: yas, address: { city, country }, } = user; // Objenin içeriği atandı istenildiği zaman obje içerisindeki tek bir nesne alınabilinir.

// console.log(city, country);

function logUser({ name, address: { city } }) {
    console.log(name, city);
}

const params = {
    name: 'Ahmet',
    age: 20,
    address: {
        city: 'Istanbul',
        country: 'Turkey'
    }
};

logUser(params);