const form = document.querySelector('form');
const topInput = document.getElementById('top-text');
const bottomInput = document.getElementById('bottom-text');
const imgURL = document.getElementById('img');
const memeContainer = document.getElementById('meme-container');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	let meme = document.createElement('div');
	let img = document.createElement('img');
	let topText = document.createElement('h1');
	let bottomText = document.createElement('h1');
	let button = document.createElement('button');

	button.innerText = 'Delete This Meme';
	button.classList.add('button');
	bottomText.innerText = bottomInput.value;
	bottomText.classList.add('bottom-text');
	bottomText.classList.add('text');
	topText.classList.add('text');
	topText.innerText = topInput.value;
	img.setAttribute('src', imgURL.value);

	meme.appendChild(topText);
	meme.appendChild(img);
	meme.appendChild(bottomText);
	meme.appendChild(button);
	meme.classList.add('meme');
	memeContainer.appendChild(meme);
	clearInputs();
});

memeContainer.addEventListener('click', function(e) {
	let thingClicked = e.target;
	if (thingClicked.innerText === 'Delete This Meme') {
		thingClicked.parentElement.remove();
	}
});

function clearInputs() {
	bottomInput.value = '';
	topInput.value = '';
	imgURL.value = '';
}
