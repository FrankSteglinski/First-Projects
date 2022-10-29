function myBirthYearFunc() {
    console.log("I was born in " + 1980);
}
myBirthYearFunc();
//Predicted Output: "I was born in 1980"
//Actual Output: "I was born in 1980"

function myBirthYearFunc(birthYearInput) {
    console.log("I was born in " + birthYearInput);
}
myBirthYearFunc(1999);
//Predicted Output: "I was born in birthYearInput"
//Actual Output: Literally nothing. "I was born in 1999"

function add(num1, num2) {
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
add(1, 2);
//Predicted Output: 
    //"Summing Numbers!"
    //"num1 is: num1"
    //"num2 is: num2"
    //num1 + num2
//Actual Output: 
    //"Summing Numbers!"
    //"num1 is: 1"
    //"num2 is: 2"
    //3