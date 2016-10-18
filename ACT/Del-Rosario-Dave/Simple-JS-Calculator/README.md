# Simple JS Calculator
<html>
<head>
 <title>Html calculator</title>
</head>

<body background="images.jpg">
 
 <form name="calculator" >
 <br><br><br><br><br><br><br><br>
 <div id="name" name="idname">
<center>
<table border="20" bordercolor="#3399CC" bgcolor="#000099">
<tr>
<td>
<input type="reset" value="C"><input type="textfield" readonly id="" name="ans" value="" style="color:#330000">
<br>
<center>
 <input type="button" value="+" onClick="document.calculator.ans.value +='+'">
 <input type="button" value="-" onClick="document.calculator.ans.value +='-'">
 <input type="button" value="*" onClick="document.calculator.ans.value +='*'">
 <input type="button" value="/" onClick="document.calculator.ans.value +='/'">
 <br><hr />
 <input type="button" value="1" onClick="document.calculator.ans.value +='1'">
 <input type="button" value="2" onClick="document.calculator.ans.value +='2'">
 <input type="button" value="3" onClick="document.calculator.ans.value +='3'">
 <input type="button" value="4" onClick="document.calculator.ans.value +='4'">
 <br><hr />
 <input type="button" value="5" onClick="document.calculator.ans.value +='5'">
 <input type="button" value="6" onClick="document.calculator.ans.value +='6'">
 <input type="button" value="7" onClick="document.calculator.ans.value +='7'">
 <input type="button" value="8" onClick="document.calculator.ans.value +='8'">
 <br><hr />
 <input type="button" value="9" onClick="document.calculator.ans.value +='9'">
 <input type="button" value="0" onClick="document.calculator.ans.value +='0'">
 <input type="button" value="." onClick="document.calculator.ans.value +='.'">	
 <input type="button" value="=" onClick="document.calculator.ans.value = eval(document.calculator.ans.value)">
</center>




