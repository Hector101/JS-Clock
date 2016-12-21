
var secHand = document.querySelector(".sec");
var minHand = document.querySelector(".min");
var hrHand = document.querySelector(".hour");

function setTime(){
	//Instantiate the Date Object
	var now = new Date();
	//Set the different time units
	var sec = now.getSeconds();
	var min = now.getMinutes();
	var hr = now.getHours();
	//Get the degrees of each hand
	var secDegree = ((sec/60)*360)+90;
	var minDegree = ((min/60)*360)+90;
	var hrDegree = ((hr/60)*360)+90;
	secHand.style.transform = `rotate(${secDegree}deg)`;
	minHand.style.transform = `rotate(${minDegree}deg)`;
	hrHand.style.transform = `rotate(${hrDegree}deg)`;
}

setInterval(setTime, 1000);
setTime();