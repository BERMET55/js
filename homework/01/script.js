// Задача 01
// Пользователь вводит 2 числа, Вывести квадрат каждого числа


/*
prompt() - для получение данных от  пользователя
ParseInt()- Пероводит строковые данные в числовые
* - умнажение
** - возведение в степень
alert() - чтобы вывести результат

Как будем решать
Получить Первое число
Получить второе число

возвести в квадрат первое число и вывести квадрат первого числа
возвести в квадрат второе число и вывести квадрат второго числа
*/


// получили числа от пользователя
var firstNumberString = prompt ("Введите перврое число");
var secondNumberString = prompt ("Введите второе число");

// из строковых значений перевели в числовые
var firstNumber = parseInt(firstNumberString);
var secondNumber = parseInt(secondNumberString);

// возведение в квадрат два варианта:умножить на себя и возвести в 2 степень

var squareOfFirstNumber = firstNumber * firstNumber; 
var squareOfSecondNumber = secondNumber ** 2;

// выведение результата
alert(" Квадрат первого числа = " + squareOfFirstNumber);
alert ("Квадрат второго числа = " + squareOfSecondNumber);
