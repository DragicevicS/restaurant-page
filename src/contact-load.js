export default function contactPageLoad() {
  const main = document.querySelector('main');
  main.textContent = '';
  const newPara = () => document.createElement('p');
  const newH2 = () => document.createElement('h2');
  const newDiv = () => document.createElement('div');
  
  const contactDiv = newDiv();
  contactDiv.classList.add('contact-div');
  main.appendChild(contactDiv);

  const infoDiv = newDiv();
  infoDiv.classList.add('info-div');
  contactDiv.appendChild(infoDiv);

  infoDiv.appendChild(newH2());
  infoDiv.firstElementChild.textContent = '~ Adress ~';
  infoDiv.appendChild(newPara());
  infoDiv.children[1].textContent = 'Onouea Villages';
  infoDiv.appendChild(newPara());
  infoDiv.children[2].textContent = 'Kiribati';
  infoDiv.appendChild(newH2());
  infoDiv.children[3].textContent = '~ Phone number ~';
  infoDiv.appendChild(newPara());
  infoDiv.children[4].textContent = '+686 11 48 68 488';
  infoDiv.appendChild(newH2());
  infoDiv.children[5].textContent = '~ Email ~'
  infoDiv.appendChild(newPara());
  infoDiv.children[6].textContent = 'kiribatirestaurant@yahoo.ki';
  infoDiv.appendChild(newH2());
  infoDiv.children[7].textContent = '~ Location ~'

  const mapDiv = newDiv();
  mapDiv.setAttribute('id', 'map');
  contactDiv.appendChild(mapDiv);
  mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13382.775436118909!2d-160.38624616532815!3d4.673020309382576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a1803ca4efae371%3A0x77e6f3e3a8ef5d45!2sOnouea%20Villages!5e0!3m2!1ssr!2srs!4v1682417391981!5m2!1ssr!2srs" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
};