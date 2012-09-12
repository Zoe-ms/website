addLoadEvent(focusLabels);
function focusLabels(){
 if(!document.getElementsByTagName) return false;
 var labels=document.getElementsByTagName("label");
 for(var i=0;i<labels.length;i++){
   if(!labels[i].getAttribute("for")) continue;
   labels[i].onclick=function(){
     var id=this.getAttribute("for");
     if(!document.getElementById) return false;
     var element=document.getElementById(id);
     element.focus();
    }
  }
 }