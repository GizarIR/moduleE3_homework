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

console.log('*************************************');
console.log('E3.7. Задание 4');
printRange(5, 15)

