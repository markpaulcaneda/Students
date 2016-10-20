var screen = document.getElementById("Screen");

function seven(){
	screen.innerHTML += "7";
}
function eight(){
	screen.innerHTML += "8";
}
function nine(){
	screen.innerHTML += "9";
}
function divide(){
	screen.innerHTML += "/";
}
function four(){
	screen.innerHTML += "4";
}
function five(){
	screen.innerHTML += "5";
}
function six(){
	screen.innerHTML += "6";
}
function multiply(){
	screen.innerHTML += "*";
}
function one(){
	screen.innerHTML += "1"; 
}
function two(){
	screen.innerHTML += "2";
}
function three(){
	screen.innerHTML += "3";
}
function minus(){
	screen.innerHTML += "-";
}
function decimal(){
	if(screen.innerHTML===""){
		screen.innerHTML += "0.";
	}
	else {
		screen.innerHTML += ".";
	}
}
function zero(){
	screen.innerHTML += "0";
}
function equals(){
	if(screen.innerHTML===""){
		screen.innerHTML += "";
	}
	else {
		screen.innerHTML += "=" +eval(screen.innerHTML);
	}
}
function plus(){
	screen.innerHTML += "+";
}
function del(){
	screen.innerHTML = "";
}