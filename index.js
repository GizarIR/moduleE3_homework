// E3.2. Функции без параметров. Задание 1

function getCount(arr){ 
  console.log('*************************************');
  console.log('E3.2. Функции без параметров. Задание 1')
  let even = odd = zero = 0
  arr.forEach(function(item, index, array){
    if ((!isNaN(item)) && (typeof item === 'number')){
      if (item === 0){
        zero += 1
      } else if (item % 2 === 0){
        even += 1
      } else {
        odd += 1
      };
    };
  });
  console.log(`Нулей:    ${zero}`)
  console.log(`Четных:   ${even}`)
  console.log(`Нечетных: ${odd}`)
}

const myArr = [0, null, NaN, 0, 1, 2, 4, "str"];
getCount(myArr);


// E3.4. Задание 2
/* Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, 
то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1. */

const checkSimpleNumber = function(num){
  console.log('*************************************');
  console.log('E3.4. Задание 2');
  if ((isNaN(num)) || (typeof num !== 'number')){
    return console.log('Функция получила не число')
  };
  if ( num > 1000){
    return console.log('Число больше 1000')
  };
  if (num < 2){
    return console.log(`${num} меньше 2`)
  } else {
    let limit = Math.sqrt(num);
    let i = 2;
    while ( i<=limit ) {
      if (num % i === 0){
        return console.log(`${num} составное число`)
      };
      i++;
    }
    return console.log(`${num} простое число`)
  }
}

checkSimpleNumber(29)
checkSimpleNumber(44)


// E3.5. Задание 3
/* Написать функцию, которая принимает число как аргумент и возвращает функцию,
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.*/ 

function getSumFunc(a){
  console.log('*************************************');
  console.log('E3.5. Задание 3');
  return function(b){
    return b + a
  }
}

const resultFunc = getSumFunc(4)
console.log(`сумма чисел будет ${resultFunc(2)}`)


// E3.7. Задание 4
/*Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить
 в консоль, начиная от первого и заканчивая вторым. Используйте setInterval. */

function printRange(min, max){
  let item=min
  const interavalID = setInterval(function(){
    console.log(item)
    if (item==max) {
      clearInterval(interavalID)
    }
    item++
  }, 1000, item)
}

printRange(5, 15)


// E3.8 Задание 5.
/* Напишите функцию, которая принимает два натуральных числа x и n и 
возвращает x в степени n. Иначе говоря, умножает x на себя n раз и 
возвращает результат.
Используйте Arrow Function синтаксис*/

const pow_1 = (x, n) => {console.log(`${Math.pow(x, n)}`)}
const pow_2 = (x, n) => {
  let result = 1
  for (let i = 1; i <= n; i++){
    result *= x 
  }
  return result
}

console.log('*************************************');
console.log('E3.8. Задание 5');
pow_1(3, 3)
let result = pow_2(3, 3)
console.log(result)

pow_1(5, 2)
result = pow_2(5, 2)
console.log(result)

pow_1(123, 100)
console.log(`${pow_2(123, 100)}`)

console.log('\n*************************************');
console.log('E3.7. Задание 4');