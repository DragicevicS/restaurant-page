import headerLoad from './header-load.js';
import footerLoad from './footer-load.js';
import homePageLoad from './home-page.js';
import menuPageLoad from './menu-page.js';
import contactPageLoad from './contact-load.js';
import './style.css';

headerLoad();
footerLoad();

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact');

const homeLoad = () => {
  homePageLoad();
  const homeBtn = document.querySelector('.home');
  homeBtn.style.backgroundColor = '#282A3A';
};
homeLoad();

homeBtn.addEventListener('click', () => {
  homePageLoad();
  menuBtn.style.backgroundColor = 'black';
  contactBtn.style.backgroundColor = 'black';
  homeBtn.style.backgroundColor = '#282A3A';
});

menuBtn.addEventListener('click', () => {
  menuPageLoad();
  homeBtn.style.backgroundColor = 'black';
  contactBtn.style.backgroundColor = 'black';
  menuBtn.style.backgroundColor = '#282A3A';
});

contactBtn.addEventListener('click', () => {
  contactPageLoad();
  homeBtn.style.backgroundColor = 'black';
  menuBtn.style.backgroundColor = 'black';
  contactBtn.style.backgroundColor = '#282A3A';
});






