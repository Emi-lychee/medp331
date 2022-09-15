const d = new Date();
let month = d.getMonth();
let hour = d.getHours();
let bb = document.querySelector('body');
let hb = document.querySelector('h1');
let fb = document.querySelector('footer');

let day = d.getDay();
let quote = document.querySelector('#quote');
let list = ["Trust yourself and think big!", "Hope you have a great week!", "You can do it!", "Dreams don't work unless you do!", "Wear your heart on your sleeve!", "Hope you have a great weekend!", "Recharging for productivity!"];

if (month == 0 || month ==1) {
	if (hour >= 7 && hour < 17) {
		bb.style.backgroundColor = '#fff5f9';
		hb.style.setProperty('background', 'lightcoral');
		fb.style.setProperty('background', 'lightcoral');
	} else {
		bb.style.backgroundColor = '#f5f5ff';
		hb.style.setProperty('background', '#8080f0');
		fb.style.setProperty('background', '#8080f0');
	}
} else if (month == 2 || month == 3) {
	if (hour >= 6 && hour < 19) {
		bb.style.backgroundColor = '#fff5f9';
		hb.style.setProperty('background', 'lightcoral');
		fb.style.setProperty('background', 'lightcoral');
	} else {
		bb.style.backgroundColor = '#f5f5ff';
		hb.style.setProperty('background', '#8080f0');
		fb.style.setProperty('background', '#8080f0');
	}
} else if (month == 4 || month == 5 || month == 6) {
	if (hour >= 5 && hour < 20) {
		bb.style.backgroundColor = '#fff5f9';
		hb.style.setProperty('background', 'lightcoral');
		fb.style.setProperty('background', 'lightcoral');
	} else {
		bb.style.backgroundColor = '#f5f5ff';
		hb.style.setProperty('background', '#8080f0');
		fb.style.setProperty('background', '#8080f0');
	}
} else if (month == 7 || month == 8) {
	if (hour >= 6 && hour < 19) {
		bb.style.backgroundColor = '#fff5f9';
		hb.style.setProperty('background', 'lightcoral');
		fb.style.setProperty('background', 'lightcoral');
	} else {
		bb.style.backgroundColor = '#f5f5ff';
		hb.style.setProperty('background', '#8080f0');
		fb.style.setProperty('background', '#8080f0');
	}
} else if (month == 9) {
	if (hour >= 7 && hour < 18) {
		bb.style.backgroundColor = '#fff5f9';
		hb.style.setProperty('background', 'lightcoral');
		fb.style.setProperty('background', 'lightcoral');
	} else {
		bb.style.backgroundColor = '#f5f5ff';
		hb.style.setProperty('background', '#8080f0');
		fb.style.setProperty('background', '#8080f0');
	}
} else if (month == 10 || month == 11) {
	if (hour >= 7 && hour < 16) {
		bb.style.backgroundColor = '#fff5f9';
		hb.style.setProperty('background', 'lightcoral');
		fb.style.setProperty('background', 'lightcoral');
	} else {
		bb.style.backgroundColor = '#f5f5ff';
		hb.style.setProperty('background', '#8080f0');
		fb.style.setProperty('background', '#8080f0');
	}
}

if (day == 0) {
	quote.innerHTML = list[day];
} else if (day == 1) {
	quote.innerHTML = list[day];
} else if (day == 2) {
	quote.innerHTML = list[day];
} else if (day == 3) {
	quote.innerHTML = list[day];
} else if (day == 4) {
	quote.innerHTML = list[day];
} else if (day == 5) {
	quote.innerHTML = list[day];
} else if (day == 6) {
	quote.innerHTML = list[day];
}

function change() {
	day = day + 1
	if (day >= 7) {
		day = 1
	}
	if (day == 0) {
		quote.innerHTML = list[day];
	} else if (day == 1) {
		quote.innerHTML = list[day];
	} else if (day == 2) {
		quote.innerHTML = list[day];
	} else if (day == 3) {
		quote.innerHTML = list[day];
	} else if (day == 4) {
		quote.innerHTML = list[day];
	} else if (day == 5) {
		quote.innerHTML = list[day];
	} else if (day == 6) {
		quote.innerHTML = list[day];
	}
}
