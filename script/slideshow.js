addLoadEvent(slideshow);
function slideshow(){
   var intro=document.getElementById("intro"); 
  var slideshow=document.createElement("div");
  slideshow.setAttribute("id","slide");
  var frame=document.createElement("img");
  frame.setAttribute("id","frame");
  frame.setAttribute("src","images/frame.gif");
  slideshow.appendChild(frame);
  var preview=document.createElement("img");
  preview.setAttribute("src","images/slideshow.gif");
  preview.setAttribute("id","preview");
  preview.style.position="absolute";
  preview.style.left="0px";
  preview.style.top="0px";
  slideshow.appendChild(preview);
  insertAfter(slideshow,intro);
  var links=document.getElementsByTagName("a");
  for(var i=0;i<links.length;i++){
    links[i].onmouseover=function(){
      var destination=this.getAttribute("href");
      if(destination.indexOf("index.htm")!=-1){
        moveMessage("preview",0,0,5);
       }
      if(destination.indexOf("music.htm")!=-1){
        moveMessage("preview",-300,0,5);
       }
      if(destination.indexOf("photos.htm")!=-1){
       moveMessage("preview",-150,0,5);
       }
       if(destination.indexOf("blog.htm")!=-1){
       moveMessage("preview",-450,0,5);
       }
       if(destination.indexOf("contact.htm")!=-1){
       moveMessage("preview",-600,0,5);
       }
     }
   }
 }
 