// JavaScript Document



var number = "";
var press = 0;

function checkAudioRecord(){
	
	if (!(window.webkitSpeechRecognition)) {
	
		
		for(i=1;i<=ans.length;i++) {
		
		document.getElementById("speaking" + i).style.backgroundColor = "black";
		
		}
	
}
}


function Score(numberid){
	
	number = numberid;
	press++;

var yourAns = document.getElementById('spell' + number).value



var removeButton = document.getElementById("inputB" + number);


setTimeout('Clicks(ans,yourAns,number)',1000);

yourAns = yourAns.trim();
yourAns = yourAns.toUpperCase();
   
  if(ans[number]!=yourAns){
    
	document.getElementById("spell_answer" + number).src = "../../../../images/icons/cross.gif";

  }
  else{
    
	if(number == 1) {
	
	
    document.getElementById("spell_answer" + number).src = "../../../../images/icons/tick.gif";
	document.getElementById("speakMessage").style.display = "inherit";
	press = 0;
	setTimeout('speechMessage()',1200);

	
	}else{
		
		    document.getElementById("spell_answer" + number).src = "../../../../images/icons/tick.gif";
	    press = 0;
	}



}
}

var spellMessageCounter = 0;

function requestSpellMess() {
	setTimeout('spellMessage()',6500);
	
}



function spellMessage() {
	
	spellMessageCounter ++;
	
	if(spellMessageCounter == 1){
	
document.getElementById("spellMessage").style.visibility = "visible";
	
	setTimeout('hideSpellMessage()',18000);
	
	}else{
		
		return;
	}
}


function speechMessage() {
	
	if (!(window.webkitSpeechRecognition)) {
		
						alert("Your browser doesn't support this speaking pronunciation test. Use the Google Chrome browser to do this test.");
		
		for(i=1;i<=ans.length;i++) {
		
		document.getElementById("speaking" + i).style.backgroundColor = "black";
		
		
		
		}


	}else{
	
	document.getElementById("speakMessage").style.visibility = "visible";
	
	
	
	setTimeout('hideSpeechMessage()',13000);
	}
}

function hideSpeechMessage() {
	document.getElementById("speakMessage").style.visibility = "hidden";
	
}

function hideSpellMessage() {
	document.getElementById("spellMessage").style.visibility = "hidden";
	
}



function Clicks(ans,yourAns,number) {
	
	
	
	var number = number;
	
	
	if ((press >= 3) && (document.getElementById("spell" + number).value.toUpperCase() != ans[number])) {
		
		var Dialog = confirm("Do you want to see the correct word/spelling?") 
		
		if (Dialog) {

        if (number == 1) {
         
		 document.getElementById("spell" + number).value = ans[number];
		 document.getElementById("spell" + number).style.fontSize = "90%";
		 document.getElementById("spell_answer" + number).src = "../../../../images/icons/tick.gif";
		 
	     press = 0;
		 speechMessage();
		 
		 

		 
		}else{

		 document.getElementById("spell" + number).value = ans[number];
		 document.getElementById("spell" + number).style.fontSize = "90%";
		 document.getElementById("spell_answer" + number).src = "../../../../images/icons/tick.gif";
		 
		 press = 0;

		
		}
		}
		}else{
			return;
		}
	}
	





var recognition = new webkitSpeechRecognition();
recognition.lang = "en-GB";

var textArea = document.getElementById("speaking" + number);

var interimResult = "";
var correctAnswer = "";
var numb = "";
var returnedAnswer = "";

		function startRec(number,correct) {
			correctAnswer = correct.toUpperCase();
			numb = number;
		  recognition.start();
		
			        recognition.onerror = function (event) { alert("There was a problem, please try again.");
		}
			
		}
		

        recognition.onresult = function (event) {
               
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
					returnedAnswer = event.results[i][0].transcript;
					returnedAnswer = returnedAnswer.toUpperCase();
                    document.getElementById("speaking" + numb).value = returnedAnswer;
					if (returnedAnswer == correctAnswer) {
						
					document.getElementById("speech_answer" + numb).src = "../../../../images/icons/tick.gif" 
					}else{
						
				document.getElementById("speech_answer" + numb).src = "../../../../images/icons/cross.gif";
}	
					
                } else {
                    alert("not working");
                }
            }
			
		
        }
		

		
		


//function that checks if the speaking answer is correct
function checkIfCorrect(reply, correct, image){
	var speech = reply;
	var answer = correct;
	var tick_cross = image;
	
	alert(correct);
	 if (speech == answer) {
		 
		 document.getElementById(audio_answer).src = "../../../../images/icons/tick.gif";
	 }else{
	
	document.getElementById(tick_cross).src = "../../../../images/icons/cross.gif";
}
}
