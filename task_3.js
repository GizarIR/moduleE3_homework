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
  