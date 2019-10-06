function createheader(id, text) {
	const header = document.createElement('header');
	header.setAttribute('id', id);

	const logo = document.createElement('h1');
	logo.textContent = text;
	header.appendChild(logo);
	return header;
}

function createButton(id, text) {
	const button = document.createElement('button');
	button.setAttribute('id', id);

	const span = document.createElement('span');
	span.textContent = text;
	button.appendChild(span);
	button.classList.add('tab');
	return button;
}

function createNav(id) {
	const nav = document.createElement('nav');
	nav.setAttribute('id', id);

	const homeButton = createButton('home', 'home');

	nav.appendChild(homeButton);
	return nav;
}

function createMainLoad(id) {
	const main = document.createElement('main');
	main.setAttribute('id', id);
	return main;
}
function createFooter(id, text) {
	const footer = document.createElement('footer');
	footer.setAttribute('id', id);

	const h3 = document.createElement('h3');
	h3.textContent = text;

	footer.appendChild(h3);
	return footer;
}

function loadMainPage() {
	const content = document.getElementById('content');

	const header = createheader('header', 'Tamu Sana Lounge');
	content.appendChild(header);

	const nav = createNav('nav');
	content.appendChild(nav);

	const tabContent = createMainLoad('tab-content');
	content.appendChild(tabContent);

	const footer = createFooter('footer', 'Epitomy Of Happiness');
	content.appendChild(footer);

}
export default loadMainPage;
