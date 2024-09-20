alert("laiba azeem");

//no 2
myname = "laiba azeem";
alert ( "Hi! I'm " +myname);
console.log("My name is " +"  "+ myname)

//no3
var a = 4
var b = 2
var result = (a++ + --b - --a + b++ + a + b);
console.log("The result of this equation is :" +result)

//no4
var institude = prompt("enter your interst of any website");
var timing = prompt("whats your watching timing if match so you allowed!");
var assigment = prompt("wtach movies and seriece?");
var attendence = 80;
if(
    institude === "netflix" &&
    timing === "7" &&
    assigment === "yes" &&
    attendence >= 80
)
{
    alert("your are allowed")
} 
else{
    alert("not allowed")
}