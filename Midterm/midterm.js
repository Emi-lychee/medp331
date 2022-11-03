// Select topic
var x, i, j, l, ll, selectElement, a, b, c;

x = document.getElementsByClassName("custom-select");
l = x.length;

for (i = 0; i < 1; i++) {
	selectElement = x[i].getElementsByTagName("select")[0];
	ll = selectElement.length;
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
	x[i].appendChild(a);
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < ll; j++) {
		c = document.createElement("DIV");
		c.innerHTML = selectElement.options[j].innerHTML;
		c.addEventListener("click", function(e) {
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function(e) {
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}

function closeAllSelect(element) {
	var x, y, i, xl, yl, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
		if (element == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}

document.addEventListener("click", closeAllSelect);

// Search bar results
function getInputValue() {
	let searchTopic = document.getElementById("GenshinSearch").value;
	let display = document.getElementById("results");
	if (searchTopic == "choose") {
		display.innerHTML = "<br>Please select a topic.";
	} else if (searchTopic == "characters") {
		getCharacter();
	} else if (searchTopic == "weapons") {
		getWeapon();
	} else if (searchTopic == "enemies") {
		getEnemy();
	}
}

function getCharacter() {
	let character = document.getElementById("search").value;
	let characterResult = "https://genshin-app-api.herokuapp.com/api/characters/info/" + character + "?infoDataSize=minimal";
	let display = document.getElementById("results");
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		let data = JSON.parse(xhttp.responseText);
		if (!data.error) {
			let portraitImageURL = data.payload.character.portraitImageURL;
			let name = data.payload.character.name;
			let title = data.payload.character.title;
			let element = data.payload.character.element;
			let weapon = data.payload.character.weaponType;
			let gender = data.payload.character.gender;
			let birthday = data.payload.character.birthday;
			let rarity = data.payload.character.rarity;
			display.innerHTML = "<img src=" + portraitImageURL + ">" + "<p>Name: " + name + "<br>Title: " + title + "<br>Element: " + element + "<br>Weapon: " + weapon + "<br>Gender: " + gender + "<br>Birthday: " + birthday + "<br>Rarity: " + rarity + "</p>";
		} else {
			display.innerHTML = data.message + "<br>Please check your topic, capitalization, or spelling.";
		}
	}
	xhttp.open("GET", characterResult, true);
	xhttp.send();
}

function getWeapon() {
	let weapon = document.getElementById("search").value;
	let weaponResult = "https://genshin-app-api.herokuapp.com/api/weapons/info/" + weapon + "?infoDataSize=minimal";
	let display = document.getElementById("results");
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		let data = JSON.parse(xhttp.responseText);
		if (!data.error) {
			let iconUrl = data.payload.weapon.iconUrl;
			let name = data.payload.weapon.name;
			let weaponType = data.payload.weapon.weaponType;
			let baseAtk = data.payload.weapon.baseAtk;
			let rarity = data.payload.weapon.rarity;
			display.innerHTML = "<img src=" + iconUrl + ">" + "<p>Name: " + name + "<br>Weapon Type: " + weaponType + "<br>Base Attack: " + baseAtk + "<br>Rarity: " + rarity + "</p>";
		} else {
			display.innerHTML = data.message + "<br>Please check your topic, capitalization, or spelling.";
		}
	}
	xhttp.open("GET", weaponResult, true);
	xhttp.send();
}

function getEnemy() {
	let enemy = document.getElementById("search").value;
	let enemyResult = "https://genshin-app-api.herokuapp.com/api/enemies/info/" + enemy;
	let display = document.getElementById("results");
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		let data = JSON.parse(xhttp.responseText);
		if (!data.error) {
			let iconUrl = data.payload.enemy.iconUrl;
			let name = data.payload.enemy.name;
			let family = data.payload.enemy.family;
			display.innerHTML = "<img src=" + iconUrl + ">" + "<p>Name: " + name + "<br>Family: " + family + "</p>";
		} else {
			display.innerHTML = data.message + "<br>Please check your topic, capitalization, or spelling.";
		}
	}
	xhttp.open("GET", enemyResult, true);
	xhttp.send();
}

// Go to top button
let topButton = document.getElementById("topButton")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		topButton.style.display = "block";
	} else {
		topButton.style.display = "none";
	}
}

function topFunction() {
	document.documentElement.scrollTop = 0;
}
