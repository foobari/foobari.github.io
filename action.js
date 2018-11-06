
var myVar1 = setInterval(myTimer1, 140);
var myVar2 = setInterval(myTimer1, 90);
var myVar3 = setInterval(myTimer2, 2100);
var myVar4 = setInterval(myTimer2, 2200);


function myTimer1() {
	$("h1")[0].textContent = "Hello, world!";
} 

function myTimer2() {
	$("h1")[0].textContent = "Hello, worldz!";
} 

