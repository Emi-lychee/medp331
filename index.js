const d = new Date();
let m = d.getMonth();
let h = d.getHours();

let bb = document.querySelector('body');
let hb = document.querySelector('h1');
let fb = document.querySelector('footer');

if (m == 0 || m ==1) {
	if (h >= 7 && h < 17) {
		bb.style.backgroundColor = '#fff5f9';
		hb.style.setProperty('background', 'lightcoral');
		fb.style.setProperty('background', 'lightcoral');
	} else {
		bb.style.backgroundColor = '#f5f5ff';
		hb.style.setProperty('background', '#8080f0');
		fb.style.setProperty('background', '#8080f0');
	}
} else if (m == 2 || m == 3) {
	if (h >= 6 && h < 19) {
		bb.style.backgroundColor = '#fff5f9';
		hb.style.setProperty('background', 'lightcoral');
		fb.style.setProperty('background', 'lightcoral');
	} else {
		bb.style.backgroundColor = '#f5f5ff';
		hb.style.setProperty('background', '#8080f0');
		fb.style.setProperty('background', '#8080f0');
	}
} else if (m == 4 || m == 5 || m == 6) {
	if (h >= 5 && h < 20) {
		bb.style.backgroundColor = '#fff5f9';
		hb.style.setProperty('background', 'lightcoral');
		fb.style.setProperty('background', 'lightcoral');
	} else {
		bb.style.backgroundColor = '#f5f5ff';
		hb.style.setProperty('background', '#8080f0');
		fb.style.setProperty('background', '#8080f0');
	}
} else if (m == 7 || m == 8) {
	if (h >= 6 && h < 19) {
		bb.style.backgroundColor = '#fff5f9';
		hb.style.setProperty('background', 'lightcoral');
		fb.style.setProperty('background', 'lightcoral');
	} else {
		bb.style.backgroundColor = '#f5f5ff';
		hb.style.setProperty('background', '#8080f0');
		fb.style.setProperty('background', '#8080f0');
	}
} else if (m == 9) {
	if (h >= 7 && h < 18) {
		bb.style.backgroundColor = '#fff5f9';
		hb.style.setProperty('background', 'lightcoral');
		fb.style.setProperty('background', 'lightcoral');
	} else {
		bb.style.backgroundColor = '#f5f5ff';
		hb.style.setProperty('background', '#8080f0');
		fb.style.setProperty('background', '#8080f0');
	}
} else if (m == 10 || m == 11) {
	if (h >= 7 && h < 16) {
		bb.style.backgroundColor = '#fff5f9';
		hb.style.setProperty('background', 'lightcoral');
		fb.style.setProperty('background', 'lightcoral');
	} else {
		bb.style.backgroundColor = '#f5f5ff';
		hb.style.setProperty('background', '#8080f0');
		fb.style.setProperty('background', '#8080f0');
	}
}