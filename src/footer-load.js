export default function footerLoad() {
  const footer = document.querySelector('footer');
  const newPara = () => document.createElement('p');

  footer.appendChild(newPara());
  footer.firstElementChild.textContent = 'Copyright © 2023 DragicevicS';
};