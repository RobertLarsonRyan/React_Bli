//function to record audio with the broswer for the pronun tests 

var recognition = new webkitSpeechRecognition();
recognition.lang = "en-GB";



var interimResult = "";
var correctAnswer = "";
var Qnumber = 0;


		function startRec(number,correct) {
		Qnumber = number;
			var correct = correct;
			correctAnswer = correct.toLowerCase();
		  recognition.start();
		
			        recognition.onerror = function (event) { alert("Connect a microphone to your computer to do this speaking test");
		}
			
		}
		

        recognition.onresult = function (event) {
               
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    document.getElementById("speaking" + Qnumber).value = event.results[i][0].transcript;
					if (event.results[i][0].transcript == correctAnswer) {
						
					document.getElementById("audio_answer" + Qnumber).src = "../../../../../images/icons/tick.gif" 
					}else{
						
				document.getElementById("audio_answer" + Qnumber).src = "../../../../../images/icons/cross.gif";
}	
					
                } else {
                    alert("not working");
                }
            }
			
		
        }
		

//function to say if speech test works
function showObjectAudio1s(number){
  var number = number;
  
  
  
 
   sendAudioEvent1();
   if (!(window.webkitSpeechRecognition)) {
	   
	   	   if (!document.getElementById("newSpan" + number)) {
		                
					var para = document.createElement("span");
					para.style.color = "red";
					para.style.fontSize = "11px"
					para.setAttribute("id", "newSpan" + number);
					var element = document.getElementById('table' + number);
					element.appendChild(para);
					var text = document.createTextNode("This speech test doesn't work on your browser. Use the Google Chrome browser (except on iOS/Apple) to do this test. Sorry.");
					
					para.appendChild(text);
						
						
						document.getElementById("p" + number).style.visibility = "visible";
						document.getElementById("speaking" + number).style.backgroundColor = "black";

}else{
		   document.getElementById("p" + number).style.visibility = "visible";
						document.getElementById("speaking" + number).style.backgroundColor = "black";
	   }				 
				
						
						
  }else {
	  document.getElementById("p" + number).style.visibility = "visible";
	  
  
}
}
 

 
 


//function that checks if the speaking answer is correct
function checkIfCorrect(reply, correct, image){
	var speech = reply;
	var answer = correct;
	var tick_cross = image;
	 if (speech == answer) {
		 
		 document.getElementById(tick_cross).src = "../../../../images/icons/tick.gif";
	 }else{
	
	document.getElementById(tick_cross).src = "../../../../images/icons/cross.gif";
}
}



 function hideObject(number){
  var number = number;  
 if (navigator.userAgent.indexOf("Firefox")!=-1)
 {
  
  document.getElementById("n" + number).style.visibility = "hidden";}
  else {
  
  document.all["n" + number].style.visibility = "hidden";}  

 }
 

 function hideObjectAudio1s(number){
  var number = number;  
 if (navigator.userAgent.indexOf("Firefox")!=-1)
 {
  
  document.getElementById("p" + number).style.visibility = "hidden";}
  else {
  
  document.all["p" + number].style.visibility = "hidden";}  

 }

//function that changes the z-index of the info & audio boxes
 var boxOpen = 1;
function changeZindex(element) {
	
	boxOpen++;
	
	var boxID = element;
	var increase = document.getElementById(boxID).style.zIndex = boxOpen;

}

//function that sends an event to google analytics for audio box opening
function sendAudioEvent1() {
	
}
      


