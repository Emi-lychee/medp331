let myVideo = document.querySelector('video');
let playButton = document.querySelector('#play');
let pauseButton = document.querySelector('#pause');

function play() {
	myVideo.play();
}

function pause() {
	myVideo.pause();
}

playButton.addEventListener('click', play);
pauseButton.addEventListener('click', pause);