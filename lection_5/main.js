// // 1. Написать функицию которая вернет произведение переданных фактических аргументов.

// function mul() {
// 	for (i = 0; i < arguments.length; i++) {
//         res = 1;
// 		if (isNaN(arguments[i])) {
// 			return false;
// 		}
// 		res *= arguments[i];
// 	}

// 	return res;
// }

// console.log(mul(1, 2, 3, 4, 5, 6));

// // 2. Функция должна вернуть массив из центральных элементов переданных массивов.

// a = [1, 2, 3];
// b = [1, 2, 3, 4, 5, 6];
// c = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// function getCentral(arr) {
//     if (arr.length % 2 === 0) {
//         centerElem = 2;
//     }
//     if (arr.length % 2 !== 0) {
//         centerElem = 1;
//     }
//     return arr.splice(Math.ceil(arr.length / 2) - 1, centerElem);
// }

// // console.log(getCentral(a));

// function pushCenrals () {
//     centrals = [];

//     for (i = 0; i < arguments.length; i++) {
//         centrals = centrals.concat(getCentral(arguments[i]));
//     }
//     return centrals;
// }

// console.log(pushCenrals(a, b, c, d));

//---------------------------------------------------------------------------------------

// // 3. Написать функцию, которая получает 3 аргумента: два числа и функцию. 
// // Произвести вызов переданной функции с двумя аргументами числами. doFunction(2, 3, power);
// // в ответе должны получить 8, как 2 в степени 3.

// function doFunction(a, b, callbackFunc) {
//     return callbackFunc(a, b);
// }

// function power(a, b) {
//     return a ** b;
// }

// console.log(doFunction(2, 3, power));

// // 4.  Из п.3 реализовать функции sum, div, mul, power

// function sum(a, b) {
//     return a + b;
// }

// console.log(doFunction(2, 3, sum));

// function div(a, b) {
//     return a / b;
// }

// console.log(doFunction(3, 2, div));

// function mul(a, b) {
//     return a * b;
// }

// console.log(doFunction(2, 3, mul));

// console.log(doFunction(16, -23, mul)); // 16*(-23)

//-------------------------------------------------------------------------------

// // 5. Реализовать функцию copy(list) по копированию массива.

// function getCopy(arr) {
//     return arr.slice();
// }

// copy = getCopy([1, 2, 3, 4, 5]);

// console.log(copy);

// ------------------------------------------------------------------------------

// // 6. Предусмотреть возможность передачи вторым аргументом функции. 
// // При копировании массива - функция применится к каждому элементу копируемого массива. 
// // newL = copy(list, function(value){return value*10;})

// function mul(value) {
//     return value * 10;
// }

// function getMulCopy(list, callback) {
//     arr = [];
//     for (i = 0; i < list.length; i++) {
//         if (typeof callback === "function") {
//             arr[i] = callback(list[i]);
//         } else {
//             arr[i] = list[i];
//         }
//     }
//     return arr; 
// }

// console.log(getMulCopy([1, 2, 3, 4, 5], mul));

//---------------------------------------------------------------------------------------------

// // 1. Написать функцию заполнения массива. Имя произвольное.

// function fillArray(arr, arrLength) {
//     for (i = 0; i < arrLength; i++) {
//         arr.push(Math.round(Math.random() * (10 - 1) + 1));
//     }
//     return arr;
// }

// newArr = [];
// fillArray(newArr, 10);
// // console.log(newArr);

//-------------------------------------------------------------------------------------------------------------------

// // 2. написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. 
// // Тот массив, сумма которого большая - должен вернутся функцией.

// function sumArg (arr) {
// 	for (i = 0; i < arr.length; i++) {
//         sum = 0;
// 		if (typeof arr[i] === "number") {
// 			sum += arr[i];
// 		}	
// 	}
// 	return sum;
// }

// function getCompared (a, b) {
// 	if (sumArg(a) > sumArg(b)) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// }

// console.log(getCompared([1, 2, "a", 3, 4, "b"], [1, 2, 3, 4, 5, 6]));

// // 3. Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. 
// // В переменной знак может быть: +, -, *, /, %, ^. 
// // Вывести результат математического действия, указанного в переменной znak.

// function doMath(x, znak, y) {
//     res = 0;
//     switch(znak) {
// 		case '+':
// 	    	res = x + y;
// 	    	break;

// 		case '-':
// 			res = x - y;
// 			break;

// 		case '*':
// 	    	res = x * y;
// 	    	break;

// 		case '/':
// 			res = x / y;
// 			break;

// 		case '%':
// 	    	res = x % y;
// 	    	break;

// 		case '^':
// 			res = x ** y;
// 			break;

// 		default:
// 			res = "Неверный знак " + znak;
// 			break;
// 	}

// 	return res;
// }

// console.log(doMath(3, "+", 2));
// console.log(doMath(3, "-", 2));
// console.log(doMath(3, "*", 2));
// console.log(doMath(3, "/", 2));
// console.log(doMath(3, "%", 2));
// console.log(doMath(3, "^", 2));
// console.log(doMath(3, ":", 2));

//----------------------------------------------------------------------------------------------------

// // 4. Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
// // 'func("hello world", ['l', 'd'])' вернет нам "heo wor"

// function del (str, simbols) {
// 	for(i = 0; i < simbols.length; i++) {
// 		reg = new RegExp(simbols[i], "g");
// 		str = str.replace(reg, "");
// 	}
// 	return str;
// }

// console.log(del("hello world", ["l","d"]));

//----------------------------------------------------------------------------------------------------

// 5. напиши функцию filter, которая принимает функцию-предикат и массив. 
// Возвращает она массив значений, для которых предикат вернет true.
// var input = [1, 2, 3, 4, 5, 6];
// function isEven(x) { return x % 2 == 0; } // проверяет на четность
// console.log(filter(input, isEven)); // [2, 4, 6]

var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(x) { 
    return x % 2 == 0; 
}

function filter (input, callback) {
    arr = [];

    for(i = 0; i < input.length; i++) {
        if (callback(input[i])) {
			arr.push(input[i]);
		}
    }

    return arr;
}

console.log(filter(input, isEven)); 