import { without } from "lodash";

let array1 = [1,2,3,4,5,6,7,8,9];
console.log('answer :', without(array1, 3));

bgbody = document.getElementById("gradient");
colorList = document.querySelectorAll("input");
ptext = document.getElementsByClassName("bg-color")[0];
randomBtn = document.getElementsByTagName('button')[0];

function bgColorChange(){
	bgbody.style.background = "linear-gradient(to right, " + colorList[0].value + ", " + colorList[1].value + ")";
	ptext.textContent = bgbody.style.background + ";";
}

function randomColor(){
	var color1 = Math.floor(Math.random()*16777215).toString(16);
	var color2 = Math.floor(Math.random()*16777215).toString(16);

	if (color1.length < 6){color1 = "0" + color1;}
	else if (color2.length < 6){color2 = "0" + color2;}

	colorList[0].value = "#" + color1;
	colorList[1].value = "#" + color2;

	bgColorChange();
}

function colorAA(){
	var color1 = colorList[0].value;
	var color2 = colorList[1].value;
	bgColorChange();
}

colorList[0].addEventListener("input", colorAA);
colorList[1].addEventListener("input", colorAA);
randomBtn.addEventListener("click", randomColor);