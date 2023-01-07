// Задача 06:
//Даны 3 вещественных числа a,b,c. Существует ли треугольник со сторонами a,b,c.

// Пользователь вводит предложение,
// Надо вывести предложение где все буквы заглавные.

// a+b> И a +c >;


*/
 
var thirdNumber = parseInt(thirdNumberString);


var triangleExist = false;

if (firstNumber >0 && secondNumber >0 && thirdNumber > 0){
    if(firstNumber +secondNumber > thirdNumber
        && firstNumber + thirdNumber > secondNumber
        && secondNumber + thirdNumber > firstNumber)
{
    triangleExist + true;
}
} 

if(triangleExist){
    alert("Треугольник существует");
}else
alert ("Треугольник существует");