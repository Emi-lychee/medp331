function getInputValue() {
	let inputVal = document.getElementById('myInput').value;
	let fruit = inputVal;
	let picture = document.getElementById('pic');
	if (fruit === 'Apple' || fruit === 'apple') {
		document.getElementById('text').textContent = 'What type of apple?';
		document.getElementById('quote').textContent = 'Hint: Fuji? Green? Red?';
		picture.src = '';
	} else if (fruit === 'Fuji' || fruit === 'fuji') {
		document.getElementById('text').textContent = 'Fuji Apple!';
		document.getElementById('quote').textContent = 'This is one of the nine most popular apples in the US.';
		picture.src = 'files/A4/Apple_Fuji.jpg';
	} else if (fruit === 'Green' || fruit === 'green') {
		document.getElementById('text').textContent = 'Green Apple!';
		document.getElementById('quote').textContent = 'This is also known as the Granny Smith or Sour Apple.';
		picture.src = 'files/A4/Apple_Green.jpg';
	} else if (fruit === 'Red' || fruit === 'red') {
		document.getElementById('text').textContent = 'Red Apple!';
		document.getElementById('quote').textContent = 'This is also known as the Liberty Apple.';
		picture.src = 'files/A4/Apple_Red.jpg';
	} else if (fruit === 'Avocado' || fruit === 'avocado') {
		document.getElementById('text').textContent = 'Avocados!';
		document.getElementById('quote').textContent = 'You can make avocados ripen faster by putting it with an apple or banana for a few days.';
		picture.src = 'files/A4/Avocados.jpg';
	} else if (fruit === 'Banana' || fruit === 'banana') {
		document.getElementById('text').textContent = 'Bananas!';
		document.getElementById('quote').textContent = 'Did you know a banana is botanically a berry?';
		picture.src = 'files/A4/Bananas.jpg';
	} else if (fruit === 'Cantaloupe' || fruit === 'cantaloupe') {
		document.getElementById('text').textContent = 'Cantaloupe!';
		document.getElementById('quote').textContent = 'This fruit is 90% water.';
		picture.src = 'files/A4/Cantaloupe.jpg';
	} else if (fruit === 'Grape' || fruit === 'Grapes' || fruit === 'grape' || fruit === 'grapes') {
		document.getElementById('text').textContent = 'Grapes!';
		document.getElementById('quote').textContent = 'Grapes can become raisins.';
		picture.src = 'files/A4/Grapes.jpg';
	} else if (fruit === 'Kiwi' || fruit === 'kiwi') {
		document.getElementById('text').textContent = 'Kiwi!';
		document.getElementById('quote').textContent = 'This fruit is native to mainland China and Taiwan.';
		picture.src = 'files/A4/Kiwi.jpg';
	} else if (fruit === 'Orange' || fruit === 'orange') {
		document.getElementById('text').textContent = 'Orange!';
		document.getElementById('quote').textContent = 'Does this word come from the fruit or the color?';
		picture.src = 'files/A4/Orange.jpg';
	} else if (fruit === 'Papaya' || fruit === 'papaya') {
		document.getElementById('text').textContent = 'Papaya!';
		document.getElementById('quote').textContent = 'This fruit can grow up to 6-17.75 inches long and 4-11.75 inches in diameter.';
		picture.src = 'files/A4/Papaya.jpg';
	} else if (fruit === 'Pear' || fruit === 'pear') {
		document.getElementById('text').textContent = 'What type of pear?';
		document.getElementById('quote').textContent = 'Hint: California? Korean?';
		picture.src = '';
	} else if (fruit === 'California' || fruit === 'california') {
		document.getElementById('text').textContent = 'California Pear!';
		document.getElementById('quote').textContent = 'The majority of pears produced in California are found in the northern third of the state.';
		picture.src = 'files/A4/Pear_California.jpg';
	} else if (fruit === 'Korean' || fruit === 'korean') {
		document.getElementById('text').textContent = 'Korean Pear!';
		document.getElementById('quote').textContent = 'This is a fruit of many names: Asian Pear, Japanese Pear, Chinese Pear, Taiwanese Pear, Apple Pear, Zodiac Pear, Sand Pear.';
		picture.src = 'files/A4/Pear_Korean.jpg';
	} else if (fruit === 'Pineapple' || fruit === 'pineapple') {
		document.getElementById('text').textContent = 'Pineapple!';
		document.getElementById('quote').textContent = 'This fruit is indigenous to South America.';
		picture.src = 'files/A4/Pineapple.jpg';
	} else if (fruit === 'Pitaya' || fruit === 'pitaya') {
		document.getElementById('text').textContent = 'Pitaya!';
		document.getElementById('quote').textContent = 'Pitaya is the fruit of several different cactus species.';
		picture.src = 'files/A4/Pitaya.jpg';
	} else if (fruit === 'Plum' || fruit === 'plum') {
		document.getElementById('text').textContent = 'Plums!';
		document.getElementById('quote').textContent = 'Dried plums are called prunes.';
		picture.src = 'files/A4/Plums.jpg';
	} else if (fruit === 'Pomelo' || fruit === 'pomelo') {
		document.getElementById('text').textContent = 'Pomelo!';
		document.getElementById('quote').textContent = 'This fruit is eaten during the Mid-Autumn Festival, a traditional holiday celebrated in Chinese culture.';
		picture.src = 'files/A4/Pomelo.jpg';
	} else if (fruit === 'Strawberry' || fruit === 'Strawberries' || fruit === 'strawberry' || fruit === 'strawberries') {
		document.getElementById('text').textContent = 'Strawberries!';
		document.getElementById('quote').textContent = 'A strawberry is a multiple fruit consisting of tiny fruits, not a berry.';
		picture.src = 'files/A4/Strawberries.jpg';
	} else if (fruit === 'Tangerine' || fruit === 'tangerine') {
		document.getElementById('text').textContent = 'Tangerine!';
		document.getElementById('quote').textContent = 'This fruit is named after the place where they were first shipped to Tangier in Morocco, Europe.';
		picture.src = 'files/A4/Tangerine.jpg';
	} else if (fruit === 'Watermelon' || fruit === 'watermelon') {
		document.getElementById('text').textContent = 'Watermelon!';
		document.getElementById('quote').textContent = 'There are more than 1,000 varieties of watermelon.';
		picture.src = 'files/A4/Watermelon.jpg';
	} else {
		document.getElementById('text').textContent = 'Sorry, no picture available.';
		document.getElementById('quote').textContent = '';
		picture.src = '';
	}
}