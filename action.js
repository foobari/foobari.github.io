
var myVar1 = setInterval(myTimer1, 140);
var myVar2 = setInterval(myTimer1, 90);
var myVar3 = setInterval(myTimer2, 2100);
var myVar4 = setInterval(myTimer2, 2200);


function myTimer1() {
	$("h1")[0].textContent = "3thumbs_o\u00fc";
} 

function myTimer2() {
	$("h1")[0].textContent = "_3thumbs_o\u00fc";
} 

