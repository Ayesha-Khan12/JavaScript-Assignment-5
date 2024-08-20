
// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like 
// this: “Welcome to city of lights”

var city = prompt("Enter a City Name");
if(city == "Karachi"){
    alert("Welcome to City of Lights");
}
else{
    alert(`Welcome to ${city}`);
}


// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir.
//  If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("What is your Gender?");
if (gender == "Male" || gender ==  "male" || gender ==  "m") {
    alert("Good Morning Sir.");
}
else if (gender == "Female" || gender ==  "female" || gender ==  "f") {
    alert("Good Morning Ma'am.");
}   

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

var color = prompt("Write colors for road traffic signals.");
if(color == "RED" || color == "Red" || color == "red") {
    alert("Must Stop");
}
else if(color == "YELLOW" || color == "Yellow" || color == "yellow")
{
    alert("Ready to move");
}
else if(color == "GREEN" || color == "Green" || color == "green")
{
    alert("Move now");
}
else{
    alert("Please enter a right of traffic road signals");
}

// 4. Write a program to take input remaining fuel in car (in litres) from user.
//  If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

var fuel = prompt("How much fuel is left in the car? (in litres)");
if(fuel < 0.25){
    alert("Please refill the fuel in your car.");
}
else{
    alert("You have enough fuel in your car.");
}


// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs. 
var a = 4;
if (++a === 5) { alert("given condition for variable a is true"); }
// Displayed  alert var a

var b = 82;
if (b++ === 83) { alert("given condition for variable b is true"); }
//  not displayed alert var b

var c = 12;
if (c++ === 13) { alert("condition 1 is true"); }
//  not displayed 

if (c === 13) { alert("condition 2 is true"); }
//    displayed

if (++c < 14) { alert("condition 3 is true"); }
// not displayed 

if (c === 14) { alert("condition 4 is true"); }
// displayed

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) { alert("The cost equals"); }
//   displayed 

if (true) { alert("True"); }
//  displayed 

if (false) { alert("False"); }
//  not displayed 

if ("car" < "cat") { alert("car is smaller than cat"); }
//  not displayed 



// 6. Write a program to take input the marks obtained in three subjects & total marks.
// Compute & show the resulting percentage on your page.
// Take percentage & compute grade as per following table:

var subject1 = parseInt(prompt("Enter your marks for Subject 1:"));
var subject2 = parseInt(prompt("Enter your marks for Subject 2:"));
var subject3 = parseInt(prompt("Enter your marks for Subject 3:"));
var totalMarks = parseInt(prompt("Enter your Total Marks"));

var obtainedMArks = subject1 + subject2 + subject3;
var percentage = Math.round((obtainedMArks / totalMarks) * 100);

if (percentage >= 80) { 
    document.write("<h1>Marks Obtained</h1> </br> </br>");
    document.write(
        `Total marks : ${totalMarks} </br>`
       + `Marks obtained : ${obtainedMArks} </br>`
       + `Percecntage : ${percentage}% </br>`
       + `Grade : A-one` + `</br>`
       + `Remarks : Excellent </br>`
    )

}
else if (percentage >= 70) { 
    document.write("<h1>Marks Obtained</h1> </br> </br>");
    document.write(
        `Total marks : ${totalMarks} </br>`
       + `Marks obtained : ${obtainedMArks} </br>`
       + `Percecntage : ${percentage}% </br>`
       + `Grade : A` + `</br>`
       + `Remarks : Good </br>`
    );

}
else if (percentage >= 60) { 
    document.write("<h1>Marks Obtained</h1> </br> </br>");
    document.write(
        `Total marks : ${totalMarks} </br>`
       + `Marks obtained : ${obtainedMArks} </br>`
       + `Percecntage : ${percentage}% </br>`
       + `Grade : B` + `</br>`
       + `Remarks : You need to improve </br>`
    );

}
else{(percentage < 60) 
    document.write("<h1>Marks Obtained</h1> </br> </br>");
          document(
        `Total marks : ${totalMarks} </br>`
       + `Marks obtained : ${obtainedMArks} </br>`
       + `Percecntage : ${percentage}% </br>`
       + `Grade : Fail` + `</br>`
       + `Remarks : Sorry </br>`
    );
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
//  a. If user guesses the same number, show “Bingo! Correct answer”.
//  b. If the guessed number +1 is the secret number, show 
//  “Close enough to the correct answer”.

var number = prompt("To guess and enter the secret number.");
if(number == 4)
 {
        alert("Bingo! Correct answer");
    }
    else if(number == 1 || number == 2 || number == 3 || number == 5 || number == 6 || number == 7 || number == 8 || number == 9 || number == 10)
         {
        alert("Close enough to the correct answer");
    }
    else if(number == 0) {
        alert("Invalid Guess");
    }
    else {
        alert("Invalid Guess");
    }

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

var number = parseInt(prompt(" check whether the given number is divisible by 3"));
var devisible = number % 3;
if(devisible === 0){
    alert("It number divisible by 3");
}
else{
    alert("not divisible");
}

// 9. Write a program that checks whether the given input is an even number or an odd number.

var number = parseInt(prompt("Please enter a number:"));
var evenNumber = number % 2;
if(evenNumber === 0){
    alert("The number is even.");
}
else{
    alert("The number is odd.");
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = parseInt(prompt("Please enter the temperature in degrees Celsius:"));
if(temperature >= 40){
    alert("It is too hot outside.");
}
else if(temperature >=30){
    alert("The Weather today is Normal.");
}
else if(temperature >=20){
    alert("Today’s Weather is cool.");
}
else if(temperature >=10){
    alert("OMG! Today’s weather is so Cool.");
}
else {
    alert("It's quite cold today.");
}

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
var firstNumber = parseInt(prompt("Enter the first number:"));
var secondNumber = parseInt(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;
if(operation === '+'){
    result = firstNumber + secondNumber;
}
else if(operation === '-'){
    result = firstNumber - secondNumber;
}
else if(operation === '*'){
    result = firstNumber * secondNumber;
}
else if(operation === '/'){
    result = firstNumber / secondNumber;
}
else if(operation === '%'){
    result = firstNumber % secondNumber;
}
else{
    alert("Invalid!")
}
if (result !== undefined) {
    alert("The result is: " + result);
}