setTimeout(function(){document.getElementById("grey").style.display = "block"}, 3000);


var non = document.getElementById('non');
	non.onclick = function (){
		document.getElementById("grey").style.display = "none";
	}; 
var oui = document.getElementById('oui');
	oui.onclick = function (){
		document.getElementById("grey").style.display = "none";
	}; 

var magenta = document.getElementById('magenta').getElementsByTagName('button');
var blue = document.getElementById('blue').getElementsByTagName('button');
var green = document.getElementById('greentitle').getElementsByTagName('button');
var changedpolice = document.getElementById('changedpolice').getElementsByTagName('button');

magenta[0].onclick = function(){
	document.querySelector('body').style.backgroundColor = "magenta";
	document.getElementById('magenta').style.backgroundColor = "green";
}

blue[0].onclick = function(){
	var p = document.querySelector('body').getElementsByTagName('p');
		for(var i = 0; i < p.length; i++){
			p[i].style.color = "blue";
		}
}

function greentitle () {
	document.getElementsByTagName('h1').style.color="green"
}
		

changedpolice[0].onclick = function(){
	var p = document.getElementById('body').getElementsByTagName('p');
		for(var i = 0; i < p.length; i++){
			p[i].style.fontFamily= "papyrus";
		}
	var h1 = document.getElementById('body').getElementsByTagName('h1');
		for(var i = 0; i < h1.length; i++){
			h1[i].style.fontFamily = "Comic Sans";
		}
	var h2 = document.getElementById('body').getElementsByTagName('h2');
		for(var i = 0; i < h2.length; i++){
			h2[i].style.fontFamily = "Comic Sans";
		}
	var h3 = document.getElementById('body').getElementsByTagName('h3');
		for(var i = 0; i < h3.length; i++){
			h3[i].style.fontFamily = "Comic Sans";
		}
	
}