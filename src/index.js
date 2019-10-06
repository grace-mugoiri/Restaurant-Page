import loadHomePage from './modules/home';
import loadMainPage from './modules/mainPage';

init();

function navBar() {
	const homeButton = document.getElementById('home');

	homeButton.addEventListener('click', loadHomePage);

}
function init() {
	loadMainPage();
	loadHomePage();

	navBar();
}
