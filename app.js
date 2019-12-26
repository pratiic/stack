//variables
let pushBtn = document.querySelector("#pushBtn");
let popBtn = document.querySelector("#popBtn");
let input = document.querySelector("#pushElement");
let container = document.querySelector("#main-box");
let stack = container.children;
let info = document.querySelector("#info");
let tos = 10;

//event listeners
pushBtn.addEventListener("click", pushItem);
popBtn.addEventListener("click", popItem);

//functions

//function for pushing an element
function pushItem() {
	if (input.value != "") {
		if (tos > 0) {
		tos--;
		stack[tos].style.visibility = "visible";
		stack[tos].innerHTML = "<span><b>" + input.value + "</b></span>";
		input.value = "";
		container.style.border = "3px solid #2196f3";
		container.style.borderTop = "none";
		pushMessage();
		}
		else {
			stackOverFlow();
		}
	}

}

//function for stack overflow
function stackOverFlow() {
	document.querySelector("#info").innerText = "STACK OVERFLOW";
	document.querySelector("#info").style.visibility = "visible";
	setTimeout(function() {
		document.querySelector("#info").style.visibility = "hidden";
	}, 1500);
}

//function for displaying push message
function pushMessage() {
	document.querySelector("#pushMessage").innerText = "PUSHED";
	document.querySelector("#pushMessage").style.visibility = "visible";
	setTimeout(function() {
		document.querySelector("#pushMessage").style.visibility = "hidden";
	}, 1000);
	document.querySelector("#popMessage").style.visibility = "hidden";
}

//function for poping an element
function popItem() {
	if (tos != 10) {
		stack[tos].style.visibility = "hidden";
		tos++;
		popMessage();
		container.style.border = "3px solid #4caf50";
		container.style.borderTop = "none";

	}
	else {
		stackUnderFlow();
	}
	
}

//function for stack underflow
function stackUnderFlow() {
	document.querySelector("#info").innerText = "STACK UNDERFLOW";
	document.querySelector("#info").style.visibility = "visible";
	setTimeout(function() {
		document.querySelector("#info").style.visibility = "hidden";
	}, 1000);
}

//function for displaying the pop message
function popMessage() {
	document.querySelector("#popMessage").innerText = "POPED";
	document.querySelector("#popMessage").style.visibility = "visible";
	document.querySelector("#pushMessage").style.visibility = "hidden";
	setTimeout(function() {
		document.querySelector("#popMessage").style.visibility = "hidden";
	}, 1000);
}

