// // 1. Есть обьект obj = { } Внутри него описываем методы copy, clear, doFunction. 
// // Организовать создание методов так, что бы можно было вызывать любые комбинации:
// //   --obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear()
// //   --doFunction(func, x, y); получает параметрами 2 числа и функцию, 
// //     которую нужно применить к x и y. Результат операции сохранять в obj.result
// //   --clear() очищает значение obj.result в 0
// // --copy(buffer) получает параметром название ключа buffer (string) и 
// //   добавляет его к obj Далее в любом порядке можно вызывать комбинации функций
// //   Создать метод target(property)- дальнейшие действия функций doFunction() и clear()
// //   будут изменять значение не result, а переданной property
// //   Пример: obj .doFunction(sum, 2, 4) .copy('some_name') 
// //   .target('another_some_name') .doFunction(mul, 6, 3)

// function sum(a, b) {
//     return a + b;
// }

// function mul(a, b) {
//     return a * b;
// }

// obj = {
//     result: 0,
//     target: "result",

//     copy: function(key) {
// 		this[key] = this[this.target];
// 		return this;
// 	},

//     clear: function() {
//         this[this.target] = 0;
//         return this;
//     }, 

//     doFunction: function(func, x, y) {
// 		this[this.target] = func(x, y);
// 		return this;
//     },

//     targ: function(str) {
// 		this.target = str;
// 		return this;
//     },

//     output: function() {
// 		console.log(this[this.target]);
// 		return this;
// 	}

// }

// obj.doFunction(sum, 2, 3).doFunction(mul, 2, 3).output().clear().output();
// obj.copy("some_name").targ("another_some_name").doFunction(sum, 2, 3).output();

//-----------------------------------------------------------------------------------

// // 2. Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

// function toCamelCase(str) {
//     return str
//       .split('_').map((word, index) => 
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
//   }

//   console.log(camelize('var_text_hello'));

//-----------------------------------------------------------------------------------

// // 3. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным 
// // текстом или нет. Функция первым параметром должна принимать текст элемента, 
// // а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

// function inArray(str, arr) {
// 	for (i = 0; i < arr.length; i++) {
// 		for (j = 0; j <= arr[i].length - str.length; j++) {
// 			if (arr[i].substring(j, j + str.length) === str) {
// 				return true;
// 			}
// 		}
// 	}

// 	return false;
// }

// console.log(inArray("foo", ["sjhfnaof", "affooasf", "dfhdfhdfh"]));

//--------------------------------------------------------------------
//--------------------------------------------------------------------

// // 1. Написать методы push, join, reverse самостоятельно. 
// // Их функциональность должна соответствовать стандартным методам массивов.
// // list.myPush(); list.myJoin(); list.myReverse();

// list = {
//     arr: [1, 2, 3, "asd", 8, "awd"],

//     myPush: function () {
//         for (i = 0; i < arguments.length; i++) {
//             this.arr[this.arr.length] = arguments[i];
//         }

//         return this.arr;
//     },

//     myJoin: function (sign) {
//         for (i = 0, str = ""; i < this.arr.length; i++) {
//             tmp = this.arr[i];

//             if (tmp === undefined || tmp === null) {
//                 tmp = "";
//             }

//             str += (i != this.arr.length - 1) ? tmp + sign : tmp;
//         }

//         return str;
//     },

//     myReverse: function () {
//         for (i = 0, j = this.arr.length - 1; i < j; i++, j--) {
//             tmp = this.arr[i];
//             this.arr[i] = this.arr[j];
//             this.arr[j] = tmp;
//         }

//         return this.arr;
//     },

//     output: function () {
//         console.log(this.arr);
//     }
// };

// list.output();
// console.log(list.myPush("qwe"));

// console.log(list.myJoin("^"));

// console.log(list.myReverse());

//--------------------------------------------------------------------------------------

// // 2. Задан обьект с любым количеством свойств. Одно из свойств является функция renderObject(), 
// // которая описана в window. При вызове метода obj.renderObject() -> выводит в document всё содержимое объекта, кроме самого метода renderObject
// // obj => { x:10, y: 20 }
// // obj.renderObject() -> x:10, y: 20

// function renderObject() {
//     for (key in this) {
//     	if (typeof this[key] != "function") {
//     		document.write(key + ": " + this[key] + "<br/>")
//     	}
// 	}
// }

// obj = {
// 	x: 10,
// 	y: 20,
// 	z: 30,

// 	renderObject: renderObject
// };

// obj.renderObject();

//-----------------------------------------------------------------------------------

// // 3. Реализовать объект с методами m1(), m2(), m3(). 
// // Должна быть возможность выполнять подобный код:
// // obj.m1().m2().m3();
// // obj.m2().m1().m3();
// // obj.m2().m1().m3().m1().m1();

// obj = {
// 	data: 1,

// 	m1() {
// 		this.data += 2;
// 		return this;
// 	},

// 	m2() {
// 		this.data += 4;
// 		return this;
// 	},

// 	m3() {
// 		this.data += 6;
// 		return this;
// 	},

// 	output() {
// 		console.log(this.data);
// 		return this;
// 	}
// };

// obj.m1().m2().m3().output();
// obj.m2().m1().m3().output();
// obj.m2().m1().m3().m1().m1().output();

//-----------------------------------------------------------------------------------

// // 4. в обьекте data существует метод addRecord, который аргументами получает любой набор объектов. 
// // Метод addRecord добавляет все свойства переданных объектов в data.
// data = {
//   addRecord: function() {
//     for(i = 0; i < arguments.length; i++) {
//         for(key in arguments[i]) {
//            this[key] = arguments[i][key];
//         }
//     }
//   },
//   p: 600,
//   str: 'hello',
//   y: -50,
// }

// data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
// console.log(data.x); // 50
// console.log(data.y) // 20
// console.log(data.z) // 30
// console.log(data.p) // 600
// console.log(data.str) // 'hello'

//-----------------------------------------------------------------------------------

// 5. В метод addRecord добавляется последний необязательный аргумент flag, 
// который указывает приоритет присвоения свойств с одинаковым названием. Если true - берется свойство из первоначального объекта this, 
// если false - берется свойство из arguments. По умолчанию flag = false;

data = {
    addRecord: function () {
        flag = arguments[arguments.length-1] === true ? 1 : 0;

        for (i = 0; i < arguments.length; i++) {
            for (key in arguments[i]) {
                if (flag && this.hasOwnProperty(key)) {
    				this[key] = this[key];
    			} else {
    				this[key] = arguments[i][key];
    			}
            }
        }
    },
    p: 600,
    str: 'hello',
    y: -50,
}

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50}, true);
console.log(data.x); // 50
console.log(data.y) // 20
console.log(data.z) // 30
console.log(data.p) // 600
console.log(data.str) // 'hello'