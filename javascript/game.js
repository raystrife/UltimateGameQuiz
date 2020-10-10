var game_key = Object.keys(game_dict);
var multiple_choice = [];
var answer = "";
var life_count = 3;
var score_count = 0;

var options = document.querySelectorAll(".option");
var image = document.getElementById("game_image");
var life = document.querySelector("#life span");
var result = document.querySelector("#result");
var score = document.querySelector("#score span");
var continue_click = document.getElementById("continue_click")


function pickMultipleChoice() {
	var i = 0;
	while(i < 5) {
		var random_key = Math.floor(Math.random() * game_key.length);
		var game_name = game_key[random_key];
		if (multiple_choice.includes(game_name)) {
			continue;
		}
		else {
			multiple_choice.push(game_name);
			options[i].textContent = game_name;
			i++;
		}
	}
}

function pickAnswer() {
	var random_index = Math.floor(Math.random() * multiple_choice.length);
	answer = multiple_choice[random_index];
}

function changeImage() {
	var image_source = game_dict[answer];
	image.src = "images/" + image_source;
}

continue_click.addEventListener("click", function(){
	multiple_choice = [];
	pickMultipleChoice()
	pickAnswer()
	changeImage()
	result.textContent = "";
	continue_click.style.display = "none";

	for(var x = 0; x < options.length; x++) {
		options[x].style.background = "black";
		options[x].style.borderColor = "green";
	}
})

pickMultipleChoice()
pickAnswer()
changeImage()
continue_click.style.display = "none";

for(var x = 0; x < options.length; x++) {
	options[x].addEventListener("click", function() {
		var pickedChoice = this.textContent;
		if (pickedChoice == answer) {
			this.style.background = "green";
			this.style.borderColor = "green";
			result.textContent = "CORRECT!";
			result.style.color = "green";
			score_count++;
			score.textContent = score_count;
			continue_click.style.display = "block";	
		}
		else {
			this.style.background = "red";
			this.style.borderColor = "red";
			life_count--;
			if (life_count <= 0) {
				localStorage.setItem("userScore", score_count);
				window.location = "retry.html"
			}
			else {
				life.textContent = life_count;
				result.textContent = "FALSE!";
				result.style.color = "red";
			}
		}
	})
}
