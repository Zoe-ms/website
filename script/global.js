function insertAfter(newElement,targetElement){
 var parent=targetElement.parentNode;
 if(parent.lastchild==targetElement){
    parent.appendChild(newElement);
  }else{
    parent.insertBefore(newElement,targetElement.nextSibling);
   }
}
function addLoadEvent(func){
var oldonload=window.onload;
if(typeof window.onload!="function"){
    window.onload=func;
  }else{
    window.onload=function(){
    oldonload();
    func(); 
    }
  }
}
function addClass(element,value){
 if(!element.className){
   element.className=value;
  }
  else{
    newClassName=element.className;
    newClassName+="";
    newClassName+=value;
    element.className=newClassName;
   }
}
function moveMessage(id,xfinal,yfinal,interval){
 var message=document.getElementById(id);
 if(message.movement) clearTimeout(message.movement);
 var xpos=parseInt(message.style.left);
 var ypos=parseInt(message.style.top);
 if(xpos==xfinal&&ypos==yfinal) return true;
 if(xpos<xfinal) {
   var dist=Math.ceil((xfinal-xpos)/10);
   xpos=xpos+dist;
  }
 if(xpos>xfinal) {
   var dist=Math.ceil((xpos-xfinal)/10);
   xpos=xpos-dist;
  }
 if(ypos<yfinal) {
   var dist=Math.ceil((yfinal-ypos)/10);
   ypos=ypos+dist;
  }
 if(ypos>yfinal) {
   var dist=Math.ceil((ypos-yfinal)/10);
   ypos=ypos-dist;
  }
 message.style.left=xpos+"px";
 message.style.top=ypos+"px";
 var repeat="moveMessage('"+id+"',"+xfinal+","+yfinal+","+interval+")";
 message.movement=setTimeout(repeat,interval);
}
addLoadEvent(highlightPage);
function highlightPage(){
if(!document.getElementById) return false;
if(!document.getElementsByTagName) return false;
if(!document.getElementById("navigation")) return false;
 var nav=document.getElementById("navigation");
 var links=nav.getElementsByTagName("a");
 for(var i=0;i<links.length;i++){
    var linkurl=links[i].getAttribute("href");
    var currenturl=window.location.href;
    if(currenturl.indexOf(linkurl)!=-1){
      links[i].className="here";
      var linktext=links[i].lastChild.nodeValue.toLowerCase();
      document.body.setAttribute("id",linktext);
     }
  }
 }
