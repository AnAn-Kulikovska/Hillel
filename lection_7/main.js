// // 0. Cоздать конвертер-функцию которая получает на вход массив вида: 
// // mass = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]]; а на выходе получим переобразованый массив: [1,2,3,3.1,4,5,6,7,8]

// mass = [[1, 2, 3, [3.1]], 4, [5, 6, [7, 8]]];

// function convertArray(arr) {
//     var res = [];

//     for (var i = 0; i < arr.length; i++) {
//         if (!Array.isArray(arr[i])) {
//             res.push(arr[i]);
//         } else {
//             res = res.concat(convertArray(arr[i]));
//         }
//     }

//     return res;
// }
// console.log(convertArray(mass));

//---------------------------------------------------------------------------------------------------

// // 1. Создать объект с такой структурой: obj = { a: 10, b: 12, c: { f: 13 } }
// // Написать функцию convert(obj), он получает аргументом obj. 
// // Функция должна вернуть новый объект: newObj = { a: 10, b: 12, f: 13 }

// var obj = { a: 10, b: 12, c: { f: 13 } };

// function convert(oldObj, clone) {

//     for (var prop in oldObj) { 
//         // if (oldObj.hasOwnProperty(prop)) { 
//             if (typeof oldObj[prop] === "object") 
//                 convert(oldObj[prop], clone); 
//             else
//                 clone[prop] = oldObj[prop]; 
//         // }
//     }

//    return clone;
// }

// var newObj = {};

// console.log(convert(obj, newObj));

//---------------------------------------------------------------------------------------------------------------------

// // 2. Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта и возвращает новый, 
// // который состоит из свойство обоих обьектов (склеить). Если свойство повторяется, то взять значение второго обьекта
// // assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }
// // assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }

// function assignObjects(obj1, obj2){
//     var obj3 = {};
//     for (var attr in obj1) { 
//         obj3[attr] = obj1[attr];       
//     }
//     for (var attr in obj2) { 
//         obj3[attr] = obj2[attr]; 
//     }
//     return obj3;
// }

// console.log(assignObjects({ x: 10, y: 20 }, { z: 30 }));
// console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));
// console.log(assignObjects({ x: 10 }, { x: 20, y: 30, z: 30 }));

// первое, что пришло в голову


// function assignObjects(obj1, obj2) {
//     var obj3 = {};

//     for (var key in obj2) {
//         obj3[key] = key in obj2 ? obj2[key] : obj1[key];
//     }

//     return obj3;
// }

// console.log(assignObjects({ x: 10, y: 20 }, { x: 20, y: 30, z: 30 }));

// усовершенствованная ф-я

//----------------------------------------------------------------------------------------------

// // 3. Адаптировать функцию assignObjects() под неопределенное количество объектов. assignObjects(obj1, obj2, ....., objn);

// function assignObjects() {
//     var newObj = {};

//     for (var i = 0; i < arguments.length; i++) {
//         if (typeof arguments[i] === "object") {

//             for (key in arguments[i]) {
//                 newObj[key] = key in arguments[i] ? arguments[i][key] : arguments[i + 1][key];
//             }

//         }
//     }

//     return newObj;
// }

// console.log(assignObjects({ x: 10, y: 20 }, { x: 20, y: 30, z: 30 }, { a: 10, b: 20 }, { a: 100 }, { b: 300 }));

//---------------------------------------------------------------------------------------------------------------------

// 4.Имеем функцию getPerson(name, from, to) которая возвращает объект {name: name, age: Math.random()}
// Создать массив из 5 таких объектов.
// Найти средний возраст и самого старшего человека.
// Создать массив уникальных имен.

function getPerson(name, from, to) {
    var person = {
        name: name,
        age: Math.round(Math.random() * (to - from) + from)
    }
    return person;
}

function createPersonsArray(len) {
    for (var i = 0, arr = []; i < len; i++) {
        arr.push(getPerson(prompt('enter the name'), 20, 30
        ));
    }
    return arr;
}
var persons = createPersonsArray(5);

console.log(persons);

function getMiddleAge(arr) {
    var middleAge = 0;
    for (var i = 0; i < arr.length; i++) {
        var len = arr.length
        if (typeof arr[i] == 'object') {
            for (let key in arr[i]) {
                if (typeof arr[i][key] == 'number') {
                    middleAge = (middleAge + arr[i][key]);
                }
            }
        }
    }
    console.log(middleAge / len);
}

getMiddleAge(persons);

var max = persons.reduce((prev, cur) => {
    if (prev.age > cur.age) {
        return prev
    }
    return cur
})

console.log(max.age)

var unique = persons.reduce((acc, elem) => acc.add(elem.name), new Set());

console.log(Array.from(unique));