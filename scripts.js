

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

	console.log(element.textContent.trim());
	if(element.textContent.trim() == "Hello!"){
		console.log("yup");
		element.innerHTML = `<h2>${element.textContent.trim()}</h2>`;
		element.innerHTML += "<p>I'm Lauren, an aspiring web developer at New York University majoring in Computer Science, minoring in Web Programming and Applications, and looking to earn my MS degree in Computer Science.</p>"
	}
}
document.addEventListener("DOMContentLoaded", main);