// let userName = prompt ("Ім'я?");
// let dateBirth = +prompt ("Рік народження?")
// let yearNow = 2021;
// let ageRetirement = 60;
// let one = " вийде на пенсію через ";
// let result = ((dateBirth + ageRetirement) - yearNow);
// let two = " років.";
// let three = " вже пенсіонер.";
// if ( result < 60 && result > 0) {
//     alert(userName + one + result + two); 
// }  else if ( result <= 0 ) {
//     alert(userName + three); 
// }


let userName = prompt ("Ім'я?");
let dateBirth = +prompt ("Рік народження?");
let yearNow = 2021;
let ageRetirement = 60;
let years = "років";  

function calcAge () {
    let age = yearNow - dateBirth;  
    return age
}
console.log(calcAge());

function yearsUntilRetirement (yes, no) {
    let yearsUntil = ageRetirement - calcAge();
    return yearsUntil
    console.log (
        '${userName} залишилося ${yearsUntil} ${years} до пенсії ' 
    );
    
}
console.log(yearsUntilRetirement());

