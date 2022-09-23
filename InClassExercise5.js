function getInputValue() {
	let inputVal = document.getElementById('myInput').value;
	let character = inputVal;
	let picture = document.getElementById('picture');
	if (character === 'Ayaka' || character === 'ayaka') {
		document.getElementById('text').textContent = 'It is Ayaka!';
		document.getElementById('quote').textContent = '"A blade is like a tea-leaf. Only those who sample it many times can appreciate its true qualities."';
		picture.src = 'files/ICE5/Ayaka.jpg';
	} else if (character === 'Ayato' || character === 'ayato') {
		document.getElementById('text').textContent = 'It is Ayato!';
		document.getElementById('quote').textContent = '"Hmm... it looks like I mixed up my salt and my sugar. Savory Mizu Manjuu. Yes, this can work. I\'ll give them to Thoma."';
		picture.src = 'files/ICE5/Ayato.jpg';
	} else if (character === 'Jean' || character === 'jean') {
		document.getElementById('text').textContent = 'It is Jean!';
		document.getElementById('quote').textContent = '"I swear by this sword, victory shall be yours."';
		picture.src = 'files/ICE5/Jean.png';
	} else if (character === 'Kazuha' || character === 'kazuha') {
		document.getElementById('text').textContent = 'It is Kazuha!';
		document.getElementById('quote').textContent = '"The birdsong at daybreak is nature\'s gift to us. Let us go. Our journey begins anew."';
		picture.src = 'files/ICE5/Kazuha.png';
	} else if (character === 'Klee' || character === 'klee') {
		document.getElementById('text').textContent = 'It is Klee!';
		document.getElementById('quote').textContent = '"Do you wanna come fish blasting with me? I\'ll get grounded for a whole day, but it\'s way worth it coz the fish taste sooo goood!"';
		picture.src = 'files/ICE5/Klee.jpg';
	} else if (character === 'Xiao' || character === 'xiao') {
		document.getElementById('text').textContent = 'It is Xiao!';
		document.getElementById('quote').textContent = '"Once the snow is thick enough, we can eat it."';
		picture.src = 'files/ICE5/Xiao.jpg';
	} else if (character === 'Zhongli' || character === 'zhongli') {
		document.getElementById('text').textContent = 'It is Zhongli!';
		document.getElementById('quote').textContent = '"Osmanthus wine tastes the same as I remember... But where are those who share the memory?"';
		picture.src = 'files/ICE5/Zhongli.jpg';
	} else {
		document.getElementById('text').textContent = 'Sorry, no picture available.';
		document.getElementById('quote').textContent = '';
		picture.src = '';
	}
}