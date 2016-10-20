(function(){

	window.onload = function(){


		var show = document.getElementById("result");
		var one = document.getElementById("p1");
		var c = document.getElementById("clear");
		var two = document.getElementById("p2");
		var three = document.getElementById("p3");
		var a = document.getElementById("p");
		var b = document.getElementById("m");
		var d = document.getElementById("d");
		var Answer = document.getElementById("A");
		var four = document.getElementById("p4");
		var five = document.getElementById("p5");
		var six = document.getElementById("p6");
		var seven = document.getElementById("p7");
		var eight = document.getElementById("p8");
		var nine = document.getElementById("p9");
		var zero = document.getElementById("p0");
		var n = document.getElementById("0");
		var del = document.getElementById("s");

		one.onclick = function()
		{
			answer.innerHTML += "1";
		};

		c.onclick = function(){
			answer.innerHTML = "";
		};	

		two.onclick = function(){
			answer.innerHTML += "2";
		};

		three.onclick = function(){
			answer.innerHTML += "3";
		};

		a.onclick = function(){
			answer.innerHTML += "+";
		};

		b.onclick = function(){
			answer.innerHTML += "-";
 		};

 		d.onclick = function(){
 			answer.innerHTML += "/";
 		};

 		Answer.onclick = function(){
 			var eq = eval(answer.innerHTML)
 			answer.innerHTML = eq;
 		};

 		four.onclick = function(){
 			answer.innerHTML += "4";
 		};

 		five.onclick = function(){
 			answer.innerHTML += "5";
 		};

 		six.onclick = function(){
 			answer.innerHTML += "6";
 		};

 		seven.onclick = function(){
 			answer.innerHTML += "7";
 		};

 		eight.onclick = function(){
 			answer.innerHTML += "8";
 		};

 		nine.onclick = function(){
 			answer.innerHTML += "9";
 		};

 		zero.onclick = function(){
 			answer.innerHTML += "0";
 		};

 		n.onclick =function(){
 			answer.innerHTML += "*";
 		};

 		del.onclick = function(){
 			answer.innerHTML = "";
 		}
 	







		





	}





}());
