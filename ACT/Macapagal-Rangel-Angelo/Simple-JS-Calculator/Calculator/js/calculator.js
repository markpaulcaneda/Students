(function() {

	window.onload = function() {

var result
= document.getElementById("result");
var ads7 = document.getElementById("ads7");
var ads8 = document.getElementById("ads8");
var ads9 = document.getElementById("ads9");
var adsCls = document.getElementById("adsCls");
var ads4 = document.getElementById("ads4");
var ads5 = document.getElementById("ads5");
var ads6 = document.getElementById("ads6");
var adst = document.getElementById("ads*");
var ads3 = document.getElementById("ads1");
var ads2 = document.getElementById("ads2");
var ads1 = document.getElementById("ads3");
var adsp = document.getElementById("ads+");
var ads0 = document.getElementById("ads0");
var adsperiod = document.getElementById("ads.");
var adse = document.getElementById("ads=");
var adsi = document.getElementById("ads-");
var adsd = document.getElementById("ads/");
var adsc = document.getElementById("ads%");
var adsBackspace = document.getElementById("adsBackspace");
var adsm = document.getElementById("ads(");

ads7.onclick = function(){
    result.innerHTML += "7";	
};
ads8.onclick = function(){
	result.innerHTML += "8";
};
ads9.onclick = function(){
	result.innerHTML += "9";
};
adsCls.onclick = function(){
	result.innerHTML = "";
};
ads4.onclick = function(){
	result.innerHTML += "4";
};
ads5.onclick = function(){
	result.innerHTML += "5";
};
ads6.onclick = function(){
	result.innerHTML += "6";
};
adst.onclick = function(){
	result.innerHTML += "*";
};
ads1.onclick = function(){
	result.innerHTML += "1";
};
ads2.onclick = function(){
	result.innerHTML += "2";
};
ads3.onclick = function(){
	result.innerHTML += "3";
};
adsp.onclick = function(){
	result.innerHTML += "+";
};
ads0.onclick = function(){
	result.innerHTML += "0";
};
adse.onclick = function(){
	var adse = eval(result.innerHTML);
	result.innerHTML = adse;
};
adsperiod.onclick = function(){
     result.innerHTML += "."; 
};
adsi.onclick = function(){
	result.innerHTML += "-";
};
adsd.onclick = function(){
	result.innerHTML += "/";
};
adsc.onclick = function(){
    var adsc = eval(result.innerHTML);
    result.innerHTML = adsc;
};
adsBackspace.onclick = function deleteChar(input) {
	result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length -1)

}

}
}());

var modal = document.getElementById('id01');


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
adsd.onclick = function(){
	result.innerHTML += "%";
};