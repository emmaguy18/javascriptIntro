//console.log("Hello");
//console.log("Hello Again");
//alert("this is an alert");
//console.log("after alert");
//console.log("this is a string");
//console.log(10);
//console.log("10");
//console.log( (1*2) - (10-4) );

//console.log("string 1" + "string 2");

var variable1= "string data type";
console.log(variable1);
variable1+="something else";
console.log(variable1);

//var question= prompt("what is your name?");
// var question2= prompt ("what is your age?");
// console.log(question);
// console.log(question2);
// console.log("hello " +question+ " your age is "+question2);

// var question1= prompt ("what is your name?");
// var question2= prompt("what is your fav colour?");
// var question3= prompt ("what is your fav animal?");
// console.log(question1);
// console.log(question2);
// console.log(question3);
// console.log("hello " +question1+ " you like the colour " +question2+ " and your favourite animal is " +question3);

//document.write("<h2 class='red'>"+question+"</h2>");

var question1= prompt ("what is your name?");
// document.write("<h2 class='red'>what is your name?</h2>");
// document.write("<h3>"+question1+"</h3>");
// document.getElementById("pageContainer").innerHTML = "<h2>what is your name?</h2>";
// document.getElementById("pageContainer").innerHTML += "<h3>"+question1+"</h3>";
// document.getElementById("heading").innerText ="hello " +question1;
document.getElementById("yourName").innerText= question1;

var question2= prompt ("what is your fav colour?");
// document.write("<h2>what is your fav colour?</h2>");
// document.write("<h3>"+question2+"</h3>");
document.getElementById("favColour").innerText= question2;
//
var question3= prompt ("what is your favourite place?");
// document.write ("<h2>what is your favourite place</h2>");
// document.write("<h3>"+question3+"</h3>");
document.getElementById("favPlace").innerText= question3;

var question4= prompt ("what is your eye colour?");
// document.write ("<h2>what is your eye colour</h2>");
// document.write("<h3>"+question4+"</h3>");
document.getElementById("eyeColour").innerText= question4;
