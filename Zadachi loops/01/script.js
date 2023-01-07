//Пользователь вводит произвольное число N. 
//Далее программа просит ввести N раз числа на каждый ввод, выводится alert с сообщением что число четное (если делится на 2 без остатка) или нечетное.
/*
prompt() - для получение данных от  пользователя
ParseInt()- Пероводит строковые данные в числовые
if - условие - если
else if- условие - или же если
% - остаток деления это деление в результате выводится остаток деления
/- просто деление

alert() - чтобы вывести результат


*/ 
var numsArray =[0,2,3,4,5,6,7,8,9,10,11];
var chetnyeChisla = 0;
var nechetnyeChisla = 1;

for( var count= 0; count < numsArray; count= count+1);
{
if(numsArray[count]% 2== 0) { 
    chetnyeChisla = chetnyeChisla + numsArray[count];
}
// 
else if(numsArray[count]% 2 ==1){
    nechetnyeChisla = nechetnyeChisla*numsArray[count];
}
}
alert("Сумма четных чисел =" + chetnyeChisla+" Сумма нечетных чисел =" + nechetnyeChisla);
