

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
	}
}

document.addEventListener("DOMContentLoaded", main);