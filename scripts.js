

function main(){
	divListener();
}
function divListener(){
	//Write listeners for when
	//the user hovers over a div, to flip it around
	let divs = document.querySelectorAll(".closed");
	for(let i = 0; i < divs.length; i++){
		divs[i].addEventListener("mouseover", hoverClosed);
		divs[i].addEventListener('mouseout', removeHoverClosed);
		divs[i].addEventListener('click', clickClosed);
	}
}
function clickClosed(evt){
	evt.preventDefault();
	openDiv(evt.currentTarget);
}
function removeHoverClosed(evt){
	evt.preventDefault();
	evt.currentTarget.style['background-color'] = "";
}
function hoverClosed(evt){
	evt.preventDefault();
	evt.currentTarget.style['background-color'] = "#6900CC";
}
function clickOpen(evt){
	evt.preventDefault();
	closeDiv(evt.currentTarget);
}
function closeDiv(element){

}
function openDiv(element){
	// let start = parseInt(element.getBoundingClientRect().width);
	// for(let i = start; i < document.getElementById("box-holder").getBoundingClientRect().width-5; i+= .1){
	// 	element.style.width = "" + i + "px";
	// }
	element.classList.remove("closed");
	element.classList.add("open");
	element.removeEventListener('click', clickClosed, false);
	element.removeEventListener('mouseover', hoverClosed, false);
	element.removeEventListener('mouseout', removeHoverClosed, false);
	element.style['background-color'] = "";
}
document.addEventListener("DOMContentLoaded", main);