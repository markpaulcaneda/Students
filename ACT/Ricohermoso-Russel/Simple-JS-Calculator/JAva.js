function q(val) {
	document.getElementById("d").value=val;
}

function r(val) {
	document.getElementById("d").value+=val;
}

function e() { 
	try { 
  		q(eval(document.getElementById("d").value)) 
} 
	catch(e) 
{
  		q('....SYNTAX ERROR....') 
} 
}
  