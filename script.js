var answers = ["Without a doubt", "You got it, dude!", "I would think so", "Most likely", "Of course", "You can bet on it", "I'm not sure right now", "That's a definite yes", "Hmmm... Ask again later", "Could you repeat the question?", "Not in a million years", "You wish", "I doubt it", "No way", "Of course not"];

document.getElementById("button").addEventListener("click", showAnswer);

function showAnswer(){
	var num = Math.floor(Math.random() * answers.length);
	document.getElementById("p").innerHTML = answers[num];
	document.getElementById("answer").classList.add("active");
	document.getElementById("button").style.display = "none";
	document.getElementById("button").style.visibility = "none";
	document.getElementById("replay").style.visibility = "visible";
}

document.getElementById("replay").addEventListener("click", reload);

function reload(){
	location.reload();
}