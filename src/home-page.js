import restaurant from './images/restaurant.jpg';
import kitchen from './images/kitchen.jpg';
import food from './images/food.jpg';

export default function homePageLoad() {
const divContent = document.querySelector('.content');
const newPara = () => document.createElement('p');
const newBtn = () => document.createElement('button');
const newImg = () => document.createElement('img');

const header = document.createElement('header');
const h1 = document.createElement('h1');
h1.textContent = 'Restaurant™';
const headerNav = document.createElement('nav');

divContent.appendChild(header);
header.appendChild(h1);
header.appendChild(headerNav);
headerNav.appendChild(newBtn());
headerNav.firstElementChild.textContent = 'Home';
headerNav.firstElementChild.classList.add('home');
headerNav.appendChild(newBtn());
headerNav.children[1].textContent = 'Menu';
headerNav.children[1].classList.add('menu');
headerNav.appendChild(newBtn());
headerNav.lastElementChild.textContent = 'Contact';
headerNav.lastElementChild.classList.add('contact');

const main = document.createElement('main');
const mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv');
const mainParas = document.createElement('div');
mainParas.classList.add('mainParas')
const mainImgs = document.createElement('div');
mainImgs.classList.add('mainImgs');
const mainQuote = document.createElement('div');
mainQuote.classList.add('mainQuote')

divContent.appendChild(main);

main.appendChild(mainDiv);
mainDiv.appendChild(mainParas);
mainParas.appendChild(newPara());
mainParas.firstChild.textContent = "- Business hours -"
mainParas.appendChild(newPara());
mainParas.children[1].textContent = "Monday - Saturday";
mainParas.appendChild(newPara());
mainParas.children[2].textContent = "08:30am - 01:00am";
mainParas.appendChild(newPara());
mainParas.children[3].textContent = "- Happy hour -";
mainParas.appendChild(newPara());
mainParas.lastElementChild.textContent = "14:30pm - 16:00pm";

mainDiv.appendChild(mainImgs);
mainImgs.appendChild(newImg());
mainImgs.firstElementChild.setAttribute('src', restaurant);
mainImgs.firstElementChild.setAttribute('alt', "Image of restaurant's interior");
mainImgs.appendChild(newImg());
mainImgs.children[1].setAttribute('src', food);
mainImgs.children[1].setAttribute('alt', "Image of restaurant's food");
mainImgs.appendChild(newImg());
mainImgs.lastElementChild.setAttribute('src', kitchen);
mainImgs.lastElementChild.setAttribute('alt', "Image of restaurant's kitchen");

mainDiv.appendChild(mainQuote);
mainQuote.appendChild(newPara());
mainQuote.firstElementChild.textContent = '“So long as you have food in your mouth you have solved all questions for the time being.”';
mainQuote.appendChild(newPara());
mainQuote.lastElementChild.textContent = '- Franz Kafka';

const footer = document.createElement('footer');

divContent.appendChild(footer);
footer.appendChild(newPara());
footer.firstElementChild.textContent = 'Copyright © 2023 DragicevicS';
};
