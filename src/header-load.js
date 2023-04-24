export default function headerLoad() {
  const header = document.querySelector('header');
  const newBtn = () => document.createElement('button');
  const h1 = document.createElement('h1');
  h1.textContent = 'Restaurant™';
  const headerNav = document.createElement('nav');

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
};