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
  