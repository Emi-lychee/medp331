let myVideo = document.querySelector('video');
let playButton = document.querySelector('#play');
let seekBar = document.querySelector('#seek');
let pauseButton = document.querySelector('#pause');
let softerButton = document.querySelector('#softer');
let volumeBar = document.querySelector('#volume');
let louderButton = document.querySelector('#louder');
let fullButton = document.querySelector('#full');

function play() {
	myVideo.play();
}

function seek() {
	var time = myVideo.duration * (seekBar.value / 100);
	myVideo.currentTime = time;
}

function seekUpdate() {
	var value = (100 / myVideo.duration) * myVideo.currentTime;
	seekBar.value = value;
}

function seekPause() {
	myVideo.pause();
}

function seekPlay() {
	myVideo.play();
}

function pause() {
	myVideo.pause();
}

function softer() {
	myVideo.volume = myVideo.volume - 0.1;
	volumeBar.value = myVideo.volume
}

function videoVolume() {
	myVideo.volume = volumeBar.value;
}

function louder() {
	myVideo.volume = myVideo.volume + 0.1;
	volumeBar.value = myVideo.volume
}

function mute() {
	if (myVideo.muted == false) {
		myVideo.muted == true;
	} else {
		myVideo.muted == false;
	}
}

function full() {
	if (myVideo.requestFullscreen) {
		myVideo.requestFullscreen();
	} else if (myVideo.mozRequestFullScreen) {
		myVideo.mozRequestFullScreen();
	} else if (myVideo.webkitRequestFullscreen) {
		myVideo.webkitRequestFullscreen();
	}
}

playButton.addEventListener('click', play);
seekBar.addEventListener('change', seek);
myVideo.addEventListener('timeupdate', seekUpdate);
seekBar.addEventListener('mousedown', seekPause);
seekBar.addEventListener('mouseup', seekPlay);
pauseButton.addEventListener('click', pause);
softerButton.addEventListener('click', softer);
volumeBar.addEventListener('change', videoVolume)
louderButton.addEventListener('click', louder);
fullButton.addEventListener('click', full);