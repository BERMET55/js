class user {
   firstname = "";
   lastname = "";
   birthdate= "";
   gender = "";

   cnstructor (name, surname, comingbirthdate,comingGender){
      this.firstname = name;
      this.lastname = surname;
      this.birthdate = birthdate;
      this.gender = comingGender;

   }
}



var user ={
    name:"Bermet",
    lastname:"Akylbekk kyzy Bermet",
    age:25,
    gender: "female"
}

var user2={
   firstname:"Afina",
   lastname:"Akylbek",
   birthdate:"1997.02.05",
   gender:"female"
} // создайте обьект пользаветеля
var book ={
   firstname:"MyHome",
   lastname:"Bye",
   DateOfIssue:"2022.09.09"
} // создайте обьект книги

console.log(user.lastname);
console.log(user.age);

user.lastname = "Akylbek kyzy"
console.log(user.lastname)


