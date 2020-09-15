var game_dict = {
	"Age of Empires 2": "age_empires.jpg",
	"Anthem": "anthem.jpg",
	"Apex Legends": "apex_legends.jpg",
	"Batman: Arkham Asylum": "arkham_asylum.jpg",
	"Batman: Arkham City": "arkham_city.jpg",
	"Batman: Arkham Knight": "arkham_knight.jpg",
	"Call of Duty: Black Ops": "black_ops.jpg",
	"Bloodborne": "bloodborne.jpg",
	"Call of Cthulhu": "call_cthulhu.jpg",
	"Call of Duty: Modern Warfare 2": "cod_mw2.jpg",
	"Sherlock Holmes: Crimes & Punishments": "crimes_punishment.jpg",
	"Cuphead": "cuphead.jpg",
	"Dark Souls 3": "dark_souls_3.jpg",
	"Dead By Daylight": "dead_by_daylight.jpg",
	"Destiny 2": "destiny2.png",
	"Diner Dash": "diner_dash.png",
	"Fall Guys": "fall_guys.jpg",
	"Fortnite": "fortnite.jpg",
	"Grand Theft Auto 5": "gta_5.jpg",
	"Grand Theft Auto: San Andreas": "gta_andreas.png",
	"Hitman": "hitman.jpg",
	"Horizon Zero Dawn": "horizon_zero.jpg",
	"The Jackbox Party Pack": "jackbox.jpg",
	"Watch Dogs: Legion": "legion.jpg",
	"Life Is Strange": "life_strange.jpg",
	"Payday 2": "payday2.jpg",
	"PlayerUnknown's Battlegrounds": "pubg.jpg",
	"Resident Evil 2": "resident_evil2.jpg",
	"Resident Evil 4": "resident_evil4.jpg",
	"Resident Evil 5": "resident_evil5.jpg",
	"Resident Evil 7": "resident_evil7.jpg",
	"Sea of Thieves": "sea_thieves.jpg",
	"The Sinking City": "sinking_city.jpg",
	"Stardew Valley": "stardew_valley.jpg",
	"Terraria": "terraria.jpg",
	"Tetris": "tetris.jpg",
	"Until Dawn": "until_dawn.jpg",
	"Valorant": "valorant.jpg",
	"Watch Dogs": "watch_dogs.jpg",
	"World of Warships": "world_warships.jpg",
	"World of Warcraft": "wow.jpg",
	"Yomawari: Midnight Shadow": "yomawari.jpg",
	"Morrowind": "morrowind.jpg",
	"Arknights": "arknights.jpg",
	"Assassin's Creed": "assassins_creed.jpg",
	"Assassin's Creed 2": "assassins_creed2.jpg",
	"Assassin's Creed 3": "assassins_creed3.jpg",
	"Bioshock: Infinite": "bioshock_infinite.jpg",
	"Assassin's Creed: Black Flag": "black_flag.jpg",
	"Borderlands 3": "borderlands_3.jpg",
	"Catherine": "catherine.jpg",
	"Cooking Mama": "cooking_mama.jpg",
	"Death Stranding": "death_stranding.jpg",
	"Fallout 3": "fallout3.jpg",
	"Fallout 4": "fallout4.jpg",
	"Fire Emblem: Three Houses": "fire_emblem_houses.jpg",
	"For Honor": "for_honor.jpg",
	"Just Cause 3": "just_cause.jpg",
	"Kingdom Hearts": "kingdom_hearts.jpg",
	"Kingdom Hearts 2": "kingdom_hearts2.jpeg",
	"Kingdom Hearts 3": "kingdom_hearts3.jpg",
	"Left 4 Dead": "left_4_dead.png",
	"Little Nightmares": "little_nightmares.jpg",
	"Luigi Mansion 3": "luigi_mansion.jpg",
	"Mario Kart": "mario_kart.jpg",
	"Metal Gear Solid": "metal_gear.jpg",
	"Metal Gear Solid 3": "metal_gear3.jpg",
	"Metal Gear Solid 4": "metal_gear4.jpg",
	"Oblivion": "oblivion.jpg",
	"Assassin's Creed: Odyssey": "odyssey.jpg",
	"Order 1886": "order_1886.jpg",
	"Assassin's Creed: Origins": "origins.jpg",
	"Overwatch": "overwatch.jpg",
	"Persona 3": "persona3.jpg",
	"Persona 4": "persona4.jpg",
	"Persona 5": "persona5.png",
	"Hatsune Miku: Project Diva": "project_diva.jpg",
	"Sword Art Online": "sao.jpg",
	"Skyrim": "skyrim.png",
	"Sonic the Hedgehog": "sonic.jpg",
	"Splinter Cell": "splinter_cell.jpg",
	"Stanley Parable": "stanley_parable.jpg",
	"Super Mario Bros": "super_mario.jpg",
	"The Sims": "the_sims.jpg",
	"Thief": "thief.jpg",
	"Tomb Raider": "tomb_raider.jpg",
	"Uncharted 2": "uncharted2.jpg",
	"Uncharted 4": "uncharted4.jpg",
	"Undertale": "undertale.png",
	"Assassin's Creed: Unity": "unity.jpg",
	"Vampyr": "vampyr.jpg",
	"The Witcher 2": "witcher2.jpg",
	"The Witcher 3": "witcher3.jpg"
}
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
