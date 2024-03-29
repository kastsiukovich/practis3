// 1.Напишите функцию, которая возвращает сумму пропущенных чисел из заданного массива.


//sumMissingNumbers([4, 3, 8, 1, 2]) ➞ 18
// 5 + 6 + 7 = 18

//sumMissingNumbers([17, 16, 15, 10, 11, 12]) ➞ 27
// 13 + 14 = 27

//sumMissingNumbers([1, 2, 3, 4, 5]) ➞ 0
// Нет пропущенных номеров (т.е. все числа в [1, 5] присутствуют в списке)

//Числовой диапазон, который следует учитывать при поиске пропущенных чисел в массиве, - это последовательность последовательных чисел между минимальным и максимальным из чисел (включительно).


function sumMissingNumbers(arr) {
  var min = arr[0];
  var max = arr[0];
  var arrSum = 0;
  var intervalSum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    arrSum += arr[i];
  }
  for (var i = min; i <= max; i++) {
    intervalSum += i;
  }

  return intervalSum - arrSum;
}

// console.log(sumMissingNumbers([4, 3, 8, 1, 2]));
// console.log(sumMissingNumbers([17, 16, 15, 10, 11, 12]));
// console.log(sumMissingNumbers([1, 2, 3, 4, 5]));





// 2. Напишите функцию, которая принимает массив строк и возвращает массив только со строками, в которых есть числа. Если нет строк, содержащих числа, вернуть пустой массив.

/* numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"] 

Строки могут содержать пробелы или символы любого типа.
Попробуйте решить это без регулярного выражения.
*/
function numInStr(arr) {
  var numInStrNew = [];
  // var subStr = "";
  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    for (var str of arr[i]) {
      console.log(arr[i])
      if (typeof str == 'number') {
        // var numInStrNew = [];
        // subStr += arr[i];
        numInStrNew.push(arr[i]);
        // return subStr;
        // return numInStrNew;
      }

    }

    return numInStrNew;
  }
  // return subStr
  // return numInStrNew;
}
// console.log(numInStr(["1a", "a", "2b", "b"]));
// console.log(numInStr(["abc", "abc10"]));
// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
// console.log(numInStr(["this is a test", "test1"]))

// var ff = 's';
// var gg = 2;
// var ss = Number;
// console.log(typeof ff)
// console.log(typeof ff === typeof gg)
// console.log(typeof ff == typeof ss)
// console.log(typeof ff == 'number')

// var item = [1, 5, 6]
// console.log(item == includes(typeof Number))


/*  3.  Создайте функцию, которая принимает массив с объектами и возвращает сумму бюджетов людей.
 
 getBudgets([
   { name: "John", age: 21, budget: 23000 },
   { name: "Steve",  age: 32, budget: 40000 },
   { name: "Martin",  age: 16, budget: 2700 }
 ]) ➞ 65700
 
 getBudgets([
   { name: "John",  age: 21, budget: 29000 },
   { name: "Steve",  age: 32, budget: 32000 },
   { name: "Martin",  age: 16, budget: 1600 }
 ]) ➞ 62600 */



function getBudgets(arr) {
  var sumBudget = 0;

  for (var i = 0; i < arr.length; i++) {
    sumBudget += arr[i].budget;
    // console.log(arr[i].budget)
  }

  return sumBudget;
}

// console.log(getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve", age: 32, budget: 40000 },
//   { name: "Martin", age: 16, budget: 2700 }
// ]));


// console.log(getBudgets([
//   { name: "John", age: 21, budget: 29000 },
//   { name: "Steve", age: 32, budget: 32000 },
//   { name: "Martin", age: 16, budget: 1600 }
// ]));


/*  4.Напишите функцию, которая принимает массив объектов даты и возвращает «самую длинную полосу» (т. Е. Количество последовательных дней подряд).
 
longestStreak([
  {
    "date": "2021-04-18"
  },
  {
    "date": "2021-04-19"
  },
  {
    "date": "2021-04-20"
  },
  {
    "date": "2021-04-26"
  },
  {
    "date": "2021-04-27"
  },
  {
    "date": "2021-04-30"
  }
]) ➞ 3
 
 
Пустой массив должен возвращать 0.
 
*/
function longestStreak(arr) {
  var dateSum = [];
  var sum = [];
  for (var key in arr) {
    for (var i in arr[key]) {
      var date = arr[key][i].split("-");
      dateSum.push(Number(date[2]))
    }
  }
  for (var s in dateSum) {
    // console.log(++dateSum[s])
    if (dateSum[s] == dateSum[s]) {
      sum.push(dateSum[s])
    }
  }
  return sum
}
console.log(longestStreak([
  {
    "date": "2021-04-18"
  },
  {
    "date": "2021-04-19"
  },
  {
    "date": "2021-04-20"
  },
  {
    "date": "2021-04-26"
  },
  {
    "date": "2021-04-27"
  },
  {
    "date": "2021-04-30"
  }
]));





/* 5. Вам дана строка слов. Вам нужно найти слово "Nemo" и вернуть такую строку: «Я нашел Nemo в [номер слова по порядку]!».
 
Если вы не можете найти Немо, верните «Я не могу найти Nemo :(».
 
 
    findNemo("I am finding Nemo !") ➞ "Я нашел Nemo в 4!"
 
    findNemo("Nemo is me") ➞ "Я нашел Nemo в 1!"
    
    findNemo("I Nemo am") ➞ "Я нашел Nemo в 2!" */

function findNemo(str) {
  var arr = str.split(' ');

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'Nemo') {
      return '«Я нашел Nemo в ' + (i + 1) + ' !»';
    }
  }


  return '«Я не могу найти Nemo :(»';

}

// console.log(findNemo("I am finding Nemo !"));
// console.log(findNemo("Nemo is me"));
// console.log(findNemo("I Nemo am"));