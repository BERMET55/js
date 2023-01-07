

function ageCategorization(ageInFunctionString){
   
   var ageInFunction = parseInt(ageInFunctionString); // пероводим в integer
   
   if (ageInFunction >= 16 && ageInFunction <= 22) 
   {
      alert ("Вы еще юны")
   }
   else if (ageInFunction > 22) 
   {
      alert ("Вы совсем молоды")
   }
   
   else if(ageInFunction < 16) 
   {
      alert("Привет, подросток")
   }
}

var howManyTimesString = prompt("Сколько раз будем определять возраст?");
var howManyTimes = parseInt(howManyTimesString);
var finalMessage ="";

for(var counter=0; counter < howManyTimes; counter++){
   var myAgeString = prompt("Введите ваш возраст"+ (counter+1) +"раз");
   ageCategorization(myAgeString)
   finalMessage = finalMessage + (counter+1) +" раз:возраст"+ myAgeString +". ";
}

alert(finalMessage)
