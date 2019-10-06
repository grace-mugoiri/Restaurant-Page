function setButtonActive(id) {
	const activeButton = document.querySelector('.tab.active');
	if (activeButton) activeButton.classList.remove('active');

	const homeButton = document.getElementById(id);
	homeButton.classList.add('active');
}
function createFood(src, text, price, alt) {
	const food = document.createElement('div');
	food.classList.add('food');
	const img = document.createElement('img');
	img.setAttribute('src', src);
	img.setAttribute('alt', alt);

	const description = document.createElement('div');
	description.classList.add('description');

	const foodName = document.createElement('h3');
	foodName.textContent = text;

	const foodPrice = document.createElement('h2');
	foodPrice.textContent = price;

	description.appendChild(foodName);
	description.appendChild(foodPrice);

	food.appendChild(img);
	food.appendChild(description);
	return food;
}

function loadMenuButton() {
	const content = document.getElementById('tab-content');
	content.classList.add('grid-lay');
	content.classList.remove('flex-lay');

	content.textContent = '';
	setButtonActive('menu');

	const foods = [
		createFood(
			'https://i.ytimg.com/vi/L1arsLxKgeg/maxresdefault.jpg',
			'Githeri',
			'Kshs 300',
			'githeri'
		),
		createFood(
			'https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg',
			'ugali/mboga',
			'Kshs 200',
			'Ugali Mboga'
		),
		createFood(
			'https://i.ytimg.com/vi/mfnu2Y3w1c8/maxresdefault.jpg',
			'pilau',
			'Kshs 700',
			'Beef Pilau'
		),
		createFood(
			'https://netstorage-tuko.akamaized.net/images/0fgjhs6l0cfs0lpse.jpg',
			'bhajia',
			'Kshs 400',
			'Bhajias'
		),
		createFood(
			'https://www.mygorgeousrecipes.com/wp-content/uploads/2019/01/Indian-Chicken-Curry-with-Coconut-Milk-u0.jpg',
			'chicken curry',
			'Kshs 1020',
			'Rice Chicken Curry'
		),
		createFood(
			'https://i.ytimg.com/vi/jX6Wanu0PkU/maxresdefault.jpg',
			'kienyeji',
			'Kshs 900',
			'Kienyeji Beef'
		)
	];
	foods.forEach((food) => {
		content.appendChild(food);
	});
}
export default loadMenuButton;
