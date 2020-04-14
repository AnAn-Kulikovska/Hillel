// // // 1. Создать двумерный массив, заполненный случайными числами в диапазоне от -42 до 38. 
// // // Найти найменьшее число и поменять его местами с первым в массиве.

// a = new Array(3);

// for (i = 0; i < a.length; i++) {
//     a[i] = new Array(3);

//     for (j = 0; j < a[i].length; j++) {
//         a[i][j] = Math.round(Math.random() * (42 + 36) - 42);
//     }
//     document.write(a[i] + '</br>');
// }
// console.log(a, 'a');
// document.write('<br></br>');

// min = 38;
// minIndex = 0;
// for (i = 0; i < a.length; i++) {

//     for (j = 0; j < a[i].length; j++) {
//         if (a[i][j] < min) {
//             min = a[i][j];
//             minIndex = j;
//         }
//     }
//     tmp = a[i][minIndex];
//     a[i][minIndex] = a[0][0];
//     a[0][0] = tmp;
//     document.write(a[i] + '</br>');
// }

// console.log(a, 'a');

//----------------------------------------------------------------------------------------------------------------

// // 2. Дан массив A размера N. Найти минимальный элемент из его элементов с четными номерами.

// n = +prompt('Input array length');
// a = new Array(n);

// for (i = 0; i < a.length; i++) {
//     a[i] = new Array(n);

//     for (j = 0; j < a[i].length; j++) {
//         a[i][j] = Math.round(Math.random() * (42 + 36) - 42);
//     }
// }

// console.log(a);

// min = 38;
// for(i = 0; i < a.length; i++) {
// 	for (j = 0; j < a[i].length; j++) {
// 		if ((i % 2 == 0) && (j % 2 == 0) && (a[i][j] < min)) {
// 			min = a[i][j];
// 		}
// 	}
// }

// console.log(min);

//----------------------------------------------------------------------------------------------------------------

// // 1. В одномерном массиве произвести такую замену:
// // 1 элемент поменять с 2
// // 3 элемент поменять с 4
// // 5 элемент поменять с 6 и тд Если массив непарный - последний элемент не трогать.

// arr = [1,2,3,4,5,6,7,8,9,10,11,12];
// tmp = 0;

// for(i = 1; i < arr.length; i += 2) {
//     tmp = arr[i];
//     arr[i] = arr[i-1];
//     arr[i-1] = tmp; 
// }

// console.log(arr);

//-----------------------------------------------------------------------------

// 2. В двумерном массиве A размером n на m. Заполнить случайными числами.
// Найти ряд, где сумма элементов наименьшая
// Найти ряд, где сумма элементов найбольшая
// Поменять ряды местами (1 и 2 пункт)
n = +prompt('n?');
m = +prompt('m?');

arr = new Array(n);

for (i = 0; i < n; i++) {
    arr[i] = new Array(m);

    for (j = 0; j < arr[i].length; j++) {
        arr[i][j] = Math.round(Math.random() * 100);
    }
    document.write(arr[i] + "</br>");
}
console.log(arr, 'arr');
document.write("<br></br>");

sumMin = 400;
sumMax = 1;
minIndex = 0;
maxIndex = 0;

for (i = 0; i < arr.length; i++) {
    sum = 0;

    for (j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }

    console.log(sum, arr[i]);
    document.write(sum + "   ---   " + arr[i] + "</br>");

    if (sum <= sumMin) {
        sumMin = sum;
        minIndex = i;
    }
    if (sum >= sumMax) {
        sumMax = sum;
        maxIndex = i;
    }

}

console.log(minIndex, "minIndex");
console.log(maxIndex, "maxIndex");

tmp = arr[minIndex];
arr[minIndex] = arr[maxIndex];
arr[maxIndex] = tmp;

console.log(arr);
