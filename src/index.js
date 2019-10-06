import loadHomePage from './modules/home';
import loadMainPage from './modules/mainPage';
import loadMenuPage from './modules/menu';
import loadContactPage from './modules/contact';

init();

function navBar() {
	const homeButton = document.getElementById('home');
	const menuButton = document.getElementById('menu');
	const contactButton = document.getElementById('contact');

	homeButton.addEventListener('click', loadHomePage);
	menuButton.addEventListener('click', loadMenuPage);
	contactButton.addEventListener('click', loadContactPage);

}
function init() {
	loadMainPage();
	loadHomePage();
	navBar();
}
