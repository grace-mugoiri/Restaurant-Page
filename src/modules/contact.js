function setActiveButton(id) {
	const activeButton = document.querySelector('.tab.active');
	if (activeButton) activeButton.classList.remove('active');

	const homeButton = document.getElementById(id);
	homeButton.classList.add('active');
}

function createSection(name, data) {
	const section = document.createElement('section');
	section.classList.add('section');

	const title = document.createElement('h2');
	title.classList.add('section-title');
	title.textContent = name;
	section.appendChild(title);

	data.forEach(d => {
		const para = document.createElement('p');
		para.classList.add('section-description');
		para.textContent = d;
		section.appendChild(para)
	});
	return section;
}

function loadContactPage() {
	const content = document.getElementById('tab-content');
	content.classList.add('flex-lay');
	content.classList.remove('grid-lay');
	content.textContent = '';
	setActiveButton('contact');

	const phoneNumber = createSection('Phones', [
		'0720 000 000',
		'0730 000 000'
	]);

	const addressNumber = createSection('address', [
		'Nairobi, Kenya'
	]);

	content.appendChild(phoneNumber);
	content.appendChild(addressNumber);
}

export default loadContactPage;
