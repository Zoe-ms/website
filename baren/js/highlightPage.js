function highlightPage(){
if(!document.getElementById) return false;
if(!document.getElementsByTagName) return false;
 var nav=document.getElementById("nav");
 var links=nav.getElementsByTagName("a");
 for(var i=0;i<links.length;i++){
    var linkurl=links[i].getAttribute("href");
    var currenturl=window.location.href;
    if(currenturl.indexOf(linkurl)!=-1){
      links[i].parentNode.className="here";
      var linktext=links[i].lastChild.nodeValue.toLowerCase();
      document.body.setAttribute("id",linktext);
	  break;
     }
  }
 }

highlightPage();