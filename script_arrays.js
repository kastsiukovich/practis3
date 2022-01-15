//1. Создайте функцию, которая принимает массив чисел или букв и возвращает строку.

/*arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"*/

// вар1
function arrayToString(arr) {
    var newStr = arr.split('');
    return newStr;
}
console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]))

// вар 2
function arrayToString(arr) {
    var resultStr = '';
    for (var i = 0; i < arr.length; i++) {
        resultStr += arr[i];
    }
    return resultStr;
}

// console.log(arrayToString([1, 2, 3, 4, 5, 6]));
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));