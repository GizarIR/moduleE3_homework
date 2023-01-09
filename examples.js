// let myMap = new Map()

// myMap.set(1, "prop1")
// myMap.set(true, "prop2")
// myMap.set("1", 100000)

// for (let item of myMap){
//     console.log(`Key ${typeof item[0]}- ${item[0]}, value - ${item[1]}`)
// }

// // вариант 2

// let myMap2 = new Map();
// myMap2.set('key1', 'prop1');
// myMap2.set('key2', 'prop2');

// const keys = myMap2.keys()

// for (let key of keys) {
//   console.log(`Ключ - ${key}, значение - ${myMap2.get(key)}`)
// }

// Подсчет элементов в массиве
// const arr = [0, null, NaN, 0, 1, 2, 4, "str"];
// let even = odd = zero = 0;

// arr.forEach(function(item, index, array){
//     if (typeof item === 'number' && !isNaN(item)) {
//         if (item === 0) {
//             zero += 1;
//         } else if (item % 2 === 0) {
//             even += 1;
//         } else {
//             odd += 1;
//         }
//     }
// })
// console.log(`Нулей всего: ${zero}`)
// console.log(`Четных: ${even}`)
// console.log(`Нечетных: ${odd}`)

// Проверка равенства элементов массива
// const arr = [1, 2, 3, 3]
// let isEqual = true;
// let etalon=arr[0]

// for(let item of arr){
//     if (item!==etalon){
//         isEqual=false
//         break
//     }
// }
// console.log(isEqual)


// Проход по массиыву
// const arr = [0, null, NaN, 0, 1, 2, 4, "str"];
// console.log(`Длина массива: ${arr.length}`);
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
//     // console.log(typeof arr[i]);
//     if (typeof(arr[i]) == "number"){
//         if (!Number.isNaN(arr[i]))
//             sum += arr[i]
//         }    
    
//     // debugger;
// };
// console.log(`Сумма чисел массива ${sum}`)




/* ПРоверка является лм ввеленное чисорм и четным или нет */
// let v = prompt('Enter digit');
// v++
// if (!isNaN(v) && typeof(v) == 'number') {
//     v--
//     if (v%2 == 0){
//         console.log('Четное')
//     } else {
//       console.log('Нечетное')
//     } 
// } else {
//     console.log('Упс, кажется, вы ошиблись')
// }


// let x

// switch (typeof(x)) {
//   case 'number':
//     console.log('X-number');
//     break;
//   case 'string':
//     console.log('X-string');
//     break;
//   case 'boolean':
//     console.log('X-boolean');
//     break;
//   default:
//     console.log('X-other');
// }

