

function main(){
	divListener();
}
function divListener(){
	//Write listeners for when
	//the user hovers over a div, to flip it around
	let divs = document.querySelectorAll(".closed");
	for(let i = 0; i < divs.length; i++){
		divs[i].addEventListener("mouseover", function(evt){
			evt.preventDefault();
			divs[i].style['background-color'] = "#6900CC";
		});
		divs[i].addEventListener('mouseout', function(evt){
			evt.preventDefault();
			divs[i].style['background-color'] = "#350066";
		});
		divs[i].addEventListener('click', function(evt){
			evt.preventDefault();
			openDiv(divs[i]);
		});
	}
}
function openDiv(element){
	// let start = parseInt(element.getBoundingClientRect().width);
	// for(let i = start; i < document.getElementById("box-holder").getBoundingClientRect().width-5; i+= .1){
	// 	element.style.width = "" + i + "px";
	// }
	element.classList.remove("closed");
	element.classList.add("open");
	
}
document.addEventListener("DOMContentLoaded", main);