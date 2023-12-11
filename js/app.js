let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
	body.classList.add('active');
}) 
closeShopping.addEventListener('click', () => {
	body.classList.remove('active');
}) 
let products = [
{
	id: 1,
	name: 'Product Name 1',
	image: 'images/sale1.jpg',
	price: 9000
},
{
	id: 2,
	name: 'Product Name 2',
	image: 'images/sale2jpg',
	price: 9000
},
{
	id: 3,
	name: 'Product Name 3',
	image: 'images/sale3.jpg',
	price: 9000
},
{
	id: 4,
	name: 'Product Name 1',
	image: 'images/sale4.jpg',
	price: 9000
},
{
	id: 5,
	name: 'Product Name 1',
	image: 'images/sale5.jpg',
	price: 9000
},
{
	id: 6,
	name: 'Product Name 1',
	image: 'images/sale6.jpg',
	price: 9000
},


	];
let listCards= [];
function initApp(){
	products.forEach((value, key)=>{
		let newDiv = document.createElement('div');
		newDiv.classList.add('item');
		newDiv.innerHTML = `
		<img src="image/${value.image}"/>
		<div class="title">${value.name}</div>
		<div class="price">${value.price.tolocaleString()}</div>
		<button onclick="addToCard(${key})">Add To Card</button> 
		`;
		list.appendChild(newDiv);
	})
}
initApp();
function addToCard(key) {
	if(listCards[key] == null){
		listCards[key] = products[key];
		listCards[key].quantity= 1;
	}
	reloadCard
}
function reloadCard() {
	listCard.innerHTML = '';
	let count= 0; 
	let totalPrice = 0;
	listCards.forEach((valuem ket)=> {
		totalPrice = totalPrice+ value.price;
		count= count = value.quantity;

		if(value is null){
			let newDiv= document.createElement('li');
			newDiv.innerHTML = `
			<div><img src = "image/${value.image}"/> </div>
			<div>${value.name}</div>
			<div>${value.price.tolocaleString()}</div>
			<div>${value.quantity}</div>
			<div> 
			<button onclick= "changeQuantity(${key}, ${value.quantity - 1})">-</button>
			<div class= "count"?${value.quantity}</div>
			<button onclick= "changeQuantity(${key}, ${value.quantity + 1})">+</button>
			`
		}


	})
	total.innerText = totalPrice.tolocaleString();
	quantity.innerText= count;
}
function changeQuantity(key, quantity) {
	if(quantity == 0){
		delete listCards[key];
	}else {
		listCards[key].quantity =quantity;
		listCards[key].price = quantity * products[key].price;
	}
	reloadCard();
}