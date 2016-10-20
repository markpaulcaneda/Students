	function del(input)
				{
					document.getElementById("wew").innerHTML=input;
				}
				function num(val)
				{
					document.getElementById("wew").innerHTML+=val;
				}
				function ans() 
				{ 
					try 
					{ 
					  del(eval(document.getElementById("wew").innerHTML)) 
					} 
					catch(ans) 
					{
					  del('Error') 
					} 
				}