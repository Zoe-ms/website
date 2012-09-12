addLoadEvent(picture);
addLoadEvent(insert);
function picture(){
if(!document.getElementsByTagName)  return false;
if(!document.getElementById)  return false;
if(!document.getElementById("picList")) return false;
var picList=document.getElementById("picList");
var links=picList.getElementsByTagName("a");
for(var i=0;i<links.length;i++){
  links[i].onclick=function(){
  return picShow(this);
    }
  }
}
function insert(){
 if(!document.createElement) return false;
 if(!document.createTextNode) return false;
  var placeholder=document.createElement("img");
  placeholder.setAttribute("id","placeholder");
  placeholder.setAttribute("src","images/slideshow/picture.jpg");
  placeholder.setAttribute("alt","Pictures");
  var discription=document.createElement("p");
  discription.setAttribute("id","discription");
  var text=document.createTextNode("Choose a picture");
  discription.appendChild(text);
  var picList=document.getElementById("picList");
  insertAfter(placeholder,picList);
  insertAfter(discription,placeholder);  
 }
function picShow(whichPic){
 if(!document.getElementById("placeholder"))  return true;
 var source=whichPic.getAttribute("href");
 var placeholder=document.getElementById("placeholder");
 placeholder.setAttribute("src",source);
 if(!document.getElementById("discription"))  return false;
 var text=whichPic.getAttribute("title");
 var discription=document.getElementById("discription");
 discription.firstChild.nodeValue=text;
 return false;
}
