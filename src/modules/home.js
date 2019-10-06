function createHomeSection() {
	const about = document.createElement('section');
	about.classList.add('section');

	const title = document.createElement('h2');
	title.classList.add('section-title');
	title.textContent = 'Home';

	about.appendChild(title);

	const paragraph = document.createElement('p');
	paragraph.classList.add('section-description');
	paragraph.textContent =
	`Tamu Sana is a Modern Restaraunt based on the shores of Mombasa County which is a city in Kenya.
	The beaty of Tamu Sana is you get to enjoy your meals as you catch the waves from the comfort of
	your chair.
	As it is close to the ocean, you get fresher and moist sea foods hence why it is the number one
	spot in the area.`
	about.appendChild(paragraph);
	return about;
}

function setActiveButton(id) {
	const activeButton = document.querySelector('.tab.active');
	if (activeButton) activeButton.classList.remove('active');

	const homeButton = document.getElementById(id);
	homeButton.classList.add('active');
}

function loadHomePage() {
	const content = document.getElementById('tab-content');
	content.classList.add('flex-lay');
	content.classList.remove('grid-lay');

	content.textContent = '';

	const homeSection = createHomeSection();

	setActiveButton('home');

	content.appendChild(homeSection);
}
export default loadHomePage;
