export default function menuPageLoad() {
  const main = document.querySelector('main');
  main.textContent = '';
  const newPara = () => document.createElement('p');
  const newDiv = () => document.createElement('div');
  const newH2 = () => document.createElement('h2');
  
  let row = 0;

  const menuDiv = newDiv();
  menuDiv.classList.add('menu-div');
  
  main.appendChild(menuDiv);
  
  const appetizerMenu = [
    ['~ Shrimp Remoulade / Shrimp Cocktail', '16.00'],
    ['~ Spicy Lobster', '19.00'],
    ['~ Baked Escargot', '16.00'],
    ['~ Seared Ahi Tuna', '17.00'],
    ['~ Prosciutto Wrapped Mozzarella', '14.00']
  ];

  const appetizerDiv = newDiv();
  appetizerDiv.classList.add('food');
  menuDiv.appendChild(appetizerDiv);
  appetizerDiv.appendChild(newH2());
  appetizerDiv.firstElementChild.textContent = '~ Appetizers ~';

  for (let i=0; i < appetizerMenu.length * 2; i++) {
    appetizerDiv.appendChild(newPara());
    appetizerDiv.children[i+1].textContent = appetizerMenu[row][0];
    appetizerDiv.appendChild(newPara());
    appetizerDiv.children[i+2].textContent = appetizerMenu[row][1];
    i++;
    row++;
  };

  row = 0;

  const saladSoupMenu = [
    ['~ Spinach Salad', '10.00'],
    ['~ Caprese Salad', '7.50'],
    ['~ French Onion Soup', '5.00'],
    ['~ Lobster Bisque', '8.00']
  ];
  
  const saladSoupDiv = newDiv();
  saladSoupDiv.classList.add('food')
  menuDiv.appendChild(saladSoupDiv);
  saladSoupDiv.appendChild(newH2());
  saladSoupDiv.firstElementChild.textContent = '~ Salads and Soups ~';
  
  for (let i=0; i < saladSoupMenu.length * 2; i++) {
    saladSoupDiv.appendChild(newPara());
    saladSoupDiv.children[i+1].textContent = saladSoupMenu[row][0];
    saladSoupDiv.appendChild(newPara());
    saladSoupDiv.children[i+2].textContent = saladSoupMenu[row][1];
    i++;
    row++;
  };

  row = 0;
  
  const steakCutsMenu = [
    ['~ Filet Mignon, 8 ounce', '38.00'],
    ['~ Filet Mignon, 12 ounce', '49.00'],
    ['~ Rib Eye Steak 18 ounce', '39.00'],
    ['~ Porterhouse for Two', '40.00'],
    ['~ Classic New York Sirloin', '36.00']
  ];

  const steakCutsDiv = newDiv();
  steakCutsDiv.classList.add('food');
  menuDiv.appendChild(steakCutsDiv);
  steakCutsDiv.appendChild(newH2());
  steakCutsDiv.firstElementChild.textContent = '~ Steak Cuts ~';
  
  for (let i=0; i < steakCutsMenu.length * 2; i++) {
    steakCutsDiv.appendChild(newPara());
    steakCutsDiv.children[i+1].textContent = steakCutsMenu[row][0];
    steakCutsDiv.appendChild(newPara());
    steakCutsDiv.children[i+2].textContent = steakCutsMenu[row][1];
    i++;
    row++;
  };

  row = 0;

  const seafoodMenu = [
    ['~ Stuffed Lobster Tail', '18.00'],
    ['~ Maryland Crab Cake Dinner', '16.00'],
    ['~ Whole Lobster', '20.00'],
    ['~ Clam Zuppa', '14.50'],
    ['~ Maryland Crab Cakes', '22.00']
  ];

  const seafoodDiv = newDiv();
  seafoodDiv.classList.add('food');
  menuDiv.appendChild(seafoodDiv);
  seafoodDiv.appendChild(newH2());
  seafoodDiv.firstElementChild.textContent = '~ Seafood ~';

  for (let i=0; i < seafoodMenu.length * 2; i++) {
    seafoodDiv.appendChild(newPara());
    seafoodDiv.children[i+1].textContent = seafoodMenu[row][0];
    seafoodDiv.appendChild(newPara());
    seafoodDiv.children[i+2].textContent = seafoodMenu[row][1];
    i++;
    row++;
  };

  row = 0;

  const sidesMenu = [
    ['Sesame Green Beans', '4.00'],
    ['Cole Slaw', '3.00'],
    ['Baby Brussels Sprouts', '4.00'],
    ['Mashed Potatoes', '4.00'],
    ['Hand-Cut Fries', '3.00'],
    ['Creamed Spinach', '6.00'],
    ['Broiled Tomatoes', '5.00'],
    ['Sweet Potato Casserole', '6.00'],
    ['Buttermilk Biscuit', '3.50'],
    ['Fresh Asparagus', '7.00']
  ];

  const sidesDiv = newDiv();
  sidesDiv.classList.add('sides');
  menuDiv.appendChild(sidesDiv);
  sidesDiv.appendChild(newH2());
  sidesDiv.firstElementChild.textContent = '~ Sides ~';
  for (let i=0; i < sidesMenu.length * 2; i++) {
    sidesDiv.appendChild(newPara());
    sidesDiv.children[i+1].textContent = sidesMenu[row][0];
    sidesDiv.appendChild(newPara());
    sidesDiv.children[i+2].textContent = sidesMenu[row][1];
    i++;
    row++;
  };
};