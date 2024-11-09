// JavaScript Document




	  
	  
 var press = 0;

function Press(ans,yourAns) {
	
	press++;
	
	for(i=1;i<=yourAns.length;i++){
	
	if ((press >= 3) && (document.getElementById("q" + i).value != ans[i])) {
		
		var Dialog = confirm("Do you want to see the correct answers to the questions?") 
		
		if (Dialog) {
		
		for(i=1;i<=yourAns.length;i++){
   
         document.getElementById("q" + i).value = ans[i];
		 document.getElementById("img" + i).src = "http://www.blairenglish.com/images/icons/tick.gif";
    document.getElementById("img" + i).style.height = "20px";
	document.getElementById("img" + i).style.width = "20px";
	document.getElementById("img" + i).style.marginRight = "10px";
  
		}
		}else{
			return;
		}
	}
	
}
}




 var press1 = 0;

function Press1(sAns,sYourAns) {
	
	press1++;
	
	for(i=1;i<=sYourAns.length;i++){
	
	if ((press1 >= 3) && (document.getElementById("s" + i).value != ans[i])) {
		
		var Dialog = confirm("Do you want to see the correct answers to the questions?") 
		
		if (Dialog) {
		
		for(i=1;i<=sYourAns.length;i++){
   
         document.getElementById("s" + i).value = sAns[i];
		 document.getElementById("imgS" + i).src = "http://www.blairenglish.com/images/icons/tick.gif";
    document.getElementById("imgS" + i).style.height = "20px";
	document.getElementById("imgS" + i).style.width = "20px";
	document.getElementById("imgS" + i).style.marginRight = "10px";
  
		}
		}else{
			return;
		}
	}
	
}
}




