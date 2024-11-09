// database & functions for definitions retrieval
	var definition = new Array;

var definition1 = new Array;
	
definition[1]= "Dividend";
definition[2]= "Project Sponsor";
definition[3]= "Bull Market";
definition[4]= "Relocation Package";
definition[5]= "Retained Earnings";
definition[6]= "Share Scheme";
definition[7]= "Stakeholder";
definition[8]= "Standing Order";
definition[9]= "Zero-Sum Game";
definition[10]= "Time Off In Lieu";
definition[11]= "Preferred Stock";
definition[12]= "Common Stock";
definition[13]= "IPO";
definition[14]= "Secondary Offering";
definition[15]= "Follow on Business";
definition[16]= "Loss Leader";
definition[17]= "Severance Pay";
definition[18]= "Severance Package";
definition[19]= "Board of Directors";
definition[20]= "Line of Credit";
definition[21]= "Overdraft";
definition[22]= "Redemption Penalties";
definition[23]= "Annual Percentage Rate";
definition[24]= "Preferential Interest Rate";
definition[25]= "Split Interest Rate";
definition[26]= "Fixed Interest Rate";
definition[27]= "Variable Interest Rate";
definition[28]= "The Principal";
definition[29]= "Customs Duties";
definition[30]= "Excise Tax";
definition[31]= "Indirect Taxes";
definition[32]= "Inflation";
definition[33]= "Insurance Premium";
definition[34]= "Grace Period";


var urls = new Array;

urls[1] = "http://www.blairenglish.com/definitions/terms/dividend.html";
urls[2] = "http://www.blairenglish.com/definitions/terms/project-sponsor.html";
urls[3] = "http://www.blairenglish.com/definitions/terms/bull-market.html";
urls[4] = "http://www.blairenglish.com/definitions/terms/relocation-package.html";
urls[5] = "http://www.blairenglish.com/definitions/terms/retained-earnings.html";
urls[6] = "http://www.blairenglish.com/definitions/terms/share-scheme.html";
urls[7] = "http://www.blairenglish.com/definitions/terms/stakeholders.html";
urls[8] = "http://www.blairenglish.com/definitions/terms/standing-order.html";
urls[9] = "http://www.blairenglish.com/definitions/terms/zero-sum-game.html";
urls[10] = "http://www.blairenglish.com/definitions/terms/time-off-in-lieu.html";
urls[11] = "http://www.blairenglish.com/definitions/terms/preferred-stock.html";
urls[12] = "http://www.blairenglish.com/definitions/terms/common-stock.html";
urls[13] = "http://www.blairenglish.com/definitions/terms/IPO.html";
urls[14] = "http://www.blairenglish.com/definitions/terms/secondary-offering.html";
urls[15] = "http://www.blairenglish.com/definitions/terms/follow-on-business.html";
urls[16] = "http://www.blairenglish.com/definitions/terms/loss-leader.html";
urls[17] = "http://www.blairenglish.com/definitions/terms/severance-pay.html";
urls[18] = "http://www.blairenglish.com/definitions/terms/severance-package.html";
urls[19] = "http://www.blairenglish.com/definitions/terms/board-of-directors.html";
urls[20] = "http://www.blairenglish.com/definitions/terms/line-of-credit.html";
urls[21] = "http://www.blairenglish.com/definitions/terms/overdraft.html";
urls[22] = "http://www.blairenglish.com/definitions/terms/redemption-penalties.html";
urls[23] = "http://www.blairenglish.com/definitions/terms/annual-percentage-rate.html";
urls[24] = "http://www.blairenglish.com/definitions/terms/preferential-interest-rate.html";
urls[25] = "http://www.blairenglish.com/definitions/terms/split-interest-rate.html";
urls[26] = "http://www.blairenglish.com/definitions/terms/fixed-interest-rate.html";
urls[27] = "http://www.blairenglish.com/definitions/terms/variable-interest-rate.html";
urls[28] = "http://www.blairenglish.com/definitions/terms/the-principal.html";
urls[29] = "http://www.blairenglish.com/definitions/terms/customs-duties.html";
urls[30] = "http://www.blairenglish.com/definitions/terms/excise-tax.html";
urls[31] = "http://www.blairenglish.com/definitions/terms/indirect-taxes.html";
urls[32] = "http://www.blairenglish.com/definitions/terms/inflation.html";
urls[33] = "http://www.blairenglish.com/definitions/terms/insurance-premium.html";
urls[34] = "http://www.blairenglish.com/definitions/terms/grace-period.html";


var searchTerm;


function createCopyList() {
		for(i=1;i<=definition.length;i++){
  
   definition1[i] = definition[i].toLowerCase();
}
}


function findTerm(boxid){
	
	
	var searchTerm = document.getElementById(boxid).value;
	searchTerm = searchTerm.toLowerCase();
	var defin_SearchResults = document.getElementById('definSearchResults');
	var defin_SearchResultsBox = document.getElementById('definSearchResultsBox');
	var defin_SearchBoxText = document.getElementById('definSearchBoxText');
	var introParagraph = document.createElement('p');
	var lineBreak = document.createElement('br');
	
	
	 
	for(i=1;i<=definition.length;i++){
   
   
   
  if(searchTerm == definition1[i]){ 
    
  var remove = document.getElementById('definSearchBoxText');
  remove.innerHTML ="";
	var intro_text = document.createTextNode("There is a definition for your search. Click the below word/phrase to see the definition.");
    var header = document.createElement('h3');
	var header_text = document.createTextNode(definition[i]);
	var a = document.createElement('a');
	a.setAttribute('href', urls[i]);
	introParagraph.style.marginBottom = "15px";
	header.style.fontSize = "160%";
	
	introParagraph.appendChild(intro_text);
	a.appendChild(header_text);
	header.appendChild(a);
	defin_SearchBoxText.appendChild(introParagraph);
	defin_SearchBoxText.appendChild(header);
	defin_SearchBoxText.appendChild(lineBreak);
	defin_SearchResultsBox.style.display = "inherit";
	

	return;
	
  }
  }
 
  var remove = document.getElementById('definSearchBoxText');
  remove.innerHTML ="";
  var span = document.createElement('span');
  span.style.fontWeight = "bold";
  span.style.fontSize = "20px";
  var spanSearchTermName = document.createTextNode(searchTerm);
  span.appendChild(spanSearchTermName); 
  var intro_text1 = document.createTextNode("Unfortunately, we currently don't have a definition for ");
  var intro_text2 = document.createTextNode(". Sorry.");
  introParagraph.appendChild(intro_text1);
  introParagraph.appendChild(span);
  introParagraph.appendChild(intro_text2);
  defin_SearchBoxText.appendChild(lineBreak);
  defin_SearchBoxText.appendChild(introParagraph);
  defin_SearchBoxText.appendChild(lineBreak);
  defin_SearchResultsBox.style.display = "inherit";
  return;
}

function hideObject1() {  
 if (navigator.userAgent.indexOf("Firefox")!=-1)
 {
  document.getElementById("definSearchResultsBox").style.display = "none";}
  else {
  document.all["definSearchResultsBox"].style.display = "none";}  

 }
	


