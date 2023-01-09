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
  