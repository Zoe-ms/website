var imgInfo = new Array();
var i = 0;
		
imgInfo[0] = "I'm a first year Master’s student in Computer Science at Stanford University. My concentration is Real-World Computing, which means I get to play with a little bit of everything. My academic interests include systems, graphics, and AI. Before Stanford, I was at Carnegie Mellon University, where I got a B.S. in Computer Science and a minor in Robotics. I was born in Wuhan, China, but grew up in San Francisco. I attended Lowell High School and was a member of the varsity Track and Field and Cross Country team.I am currently the co-founder and CEO of Baren Studio, LLC, a mobile software company based in San Francisco with offices in Wuhan, China.";
		
imgInfo[1] = "The system provides three categories of objects: user, graphics device interface (GDI), and kernel. The system uses user objects to support window management, GDI objects to support graphics, and kernel objects to support memory management, process execution, and interprocess communications (IPC). For information about creating and using a specific object, refer to the associated overview.";
		
imgInfo[2] = "Inspired by golden opportunities available on mobile platform in China and US, two Stanford Alumni founded Baren Studio. The name Baren originates from an ancient Chinese book. It is the name of a well received and extremely popular music in Warring States Period. We hope our software and games would be embraced by millions just like the music being love in ancient China. Currently we focus on mobile education software and games, aiming at making people’s life and study easier and enjoyable.";
		
imgInfo[3] = "Only the Senate can help at this point; the House last Friday voted for the money to be put into the popular program, and the House members have left on their summer recess. The Senate is scheduled to start its vacation by week's end.";
		
imgInfo[4] = "Obama officials scrambled last week to add money to the Car Allowance Rebate System (CARS), which is designed to get old, polluting vehicles off the road and scrapped while helping car dealers emerge from the recession. The $1 billion has led to the sale of 250,000 new vehicles.";
		
imgInfo[5] = "The Senate narrowly approved the initial money in June. But some lawmakers who voted for the plan, including Sens. Dianne Feinstein, D-Calif., and Susan Collins, R-Maine, have said the additional dollars should push consumers to buy more fuel-efficient vehicles and allow people to buy fuel-efficient used vehicles. Sen. Jeff Bingaman, D-N.M., has said he was concerned with the way the House paid for the extension, shifting $2 billion from a renewable energy loan program.";

var team_info = document.getElementById("team_info");

function changeInfo(){
		if(!document.getElementsByTagName)  return false;
		if(!document.getElementById)  return false;
		if(!document.getElementById("images")) return false;
		var imgList = document.getElementById("images");
		var infoList = imgList.getElementsByTagName("a");
		for(i = 0;i<infoList.length;i++){
				infoList[i].onmouseover = function(){
						info(this);
					}
			}
		
	}
function info(a){
		var imgList = document.getElementById("images");
		var infoList = imgList.getElementsByTagName("a");
		for(i = 0; i<infoList.length; i++){
			if(infoList[i] == a){
				team_info.innerHTML = imgInfo[i];
				break;
			}
		}
		
	}
function init(){
		team_info.innerHTML = imgInfo[0] ;
	}
	
	
init();
changeInfo();