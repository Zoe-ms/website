function subnav(){
	
		var mainnav=document.getElementById("nav");
		var links=mainnav.getElementsByTagName("li");
		for(var i=0;i<3;i++){
				links[i].onmouseover = function(){
					show(this);
					}
			}
	}
function show(whichnav){
	
		var id;
	    var main=document.getElementById("nav");
		var pagelinks=main.getElementsByTagName("li");
		for(var i=0;i<pagelinks.length;i++){
				if(pagelinks[i]==whichnav){
					id=i;
					}
			}
	
		var subnav=document.getElementById("sub"+id);
		subnav.style.display="block";
		var left=whichnav.offsetLeft;
		subnav.parentNode.style.left=left+'px';
		
		subnav.onmouseover=function(){
				this.style.display="block";
			}
		subnav.onmouseout=function(){
				this.style.display="none";
			}				
		whichnav.onmouseout=function(){
				subnav.style.display="none";
			}		
	}
subnav();