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
