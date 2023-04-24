import restaurant from './images/restaurant.jpg';
import kitchen from './images/kitchen.jpg';
import food from './images/food.jpg';

export default function homePageLoad() {
  const main = document.querySelector('main');
  main.textContent = '';
  const newPara = () => document.createElement('p');
  const newImg = () => document.createElement('img');

  const mainDiv = document.createElement('div');
  mainDiv.classList.add('mainDiv');
  const mainParas = document.createElement('div');
  mainParas.classList.add('mainParas')
  const mainImgs = document.createElement('div');
  mainImgs.classList.add('mainImgs');
  const mainQuote = document.createElement('div');
  mainQuote.classList.add('mainQuote');

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
};
