// // 1. Вывести в консоль последовательность чисел в обратном порядке, используя рекурсивный вызов функиции
// // row (5) // 5 4 3 2 1

// function getReverseOrder(n) {

//     if(n == 1) {
//         return "1"
//     }
//     else {
//         return n + " " + getReverseOrder(n - 1);
//     }   

// }

// console.log(getReverseOrder(5));
//---------------------------------------------------------------------------------

// // 2. Написать рекурсивную функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
// // sumTo(1) = 1
// // sumTo(2) = 2 + 1 = 3
// // sumTo(3) = 3 + 2 + 1 = 6

// function sumTo(n) {

//     if (n == 1) {
//         return n;
//     } else {
//         return n + sumTo(n - 1);
//     }
// }

// console.log(sumTo(4));

//------------------------------------------------------------------------------

// // 3. Написать функция factorial(n) - которая при помощи рекурсии будет считать значение факториала числа n!

// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1;
// }

// console.log(factorial(5));
//------------------------------------------------------------------------------

// 4. Заполнить массив случайными числами: 
// new Array(new Array(4), new Array(3), new Array(new Array(6), new Array(new Array(3), new Array(3))));

mass = new Array(new Array(4), new Array(3), new Array(new Array(6), new Array(new Array(3), new Array(3))));

function fillArr(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] && arr[i].splice) {
            fillArr(arr[i]);
        } else {
            arr[i] = Math.random() * 10;
        }
    }

    console.log(arr);
}

fillArr(mass);