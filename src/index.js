import loadMainPage from './modules/mainPage';
import loadContactPage from './modules/contact';
import loadHomePage from './modules/home';
import loadMenuPage from './modules/menu';


function navBar() {
	const homeButton = document.getElementById('home');
	const contactButton = document.getElementById('contact');
	const menuButton = document.getElementById('menu');

	homeButton.addEventListener('click', loadHomePage);
	contactButton.addEventListener('click', loadContactPage);
	menuButton.addEventListener('click', loadMenuPage);

}
function init() {
	loadMainPage();
	loadHomePage();
	navBar();
}
init();
