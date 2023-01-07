// Задача 02
//Дано целое положительное число N. Найти сумму квадратов всех натуральных чисел от 0 до N.

/*
prompt() - для получение данных от  пользователя
ParseInt()- Пероводит строковые данные в числовое
* -умножение
alert( )- xnj,s dsdtcnb htpekmnfn
count - count+1
count ++
*/

var NumberString = prompt("Введите первое число");
var N = parseInt(NumberString);

var squareSumm =0;

for(var count = 0; count<N;count++){
    if(count>0){
        var square = count* count;
        squareSumm = squareSumm + square;
    }
}
alert("Суммв квадрата до N=" +N+"равна ="+ squareSumm);