import starters1 from './menu_img/starters1.jpg';
import starters2 from './menu_img/starters2.jpg';
import starters3 from './menu_img/starters3.jpg';
import mains1 from './menu_img/mains1.jpg';
import mains2 from './menu_img/mains2.jpg';
import mains3 from './menu_img/mains3.jpg';
import desserts1 from './menu_img/desserts1.jpg';
import desserts2 from './menu_img/desserts1.jpg';
import desserts3 from './menu_img/desserts1.jpg';

/*export function createArray() {
  const images = require.context('./menu_img/', false, /\.jpg$/);
  return images.keys().map(images);
}*/

export function createMenu() {
  let main = document.querySelector('main');
  let menu = document.createElement('div');
  menu.id = 'menu';
  let menuHeading = document.createElement('h1');
  menuHeading.textContent = 'Menu';
  let starters = document.createElement('section');
  starters.id = 'starters';
  let startersHeading = document.createElement('h1');
  startersHeading.textContent = 'Starters';
  let mains = document.createElement('section');
  mains.id = 'mains';
  let mainsHeading = document.createElement('h1');
  mainsHeading.textContent = 'Mains';
  let desserts = document.createElement('section');
  desserts.id = 'desserts';
  let dessertsHeading = document.createElement('h1');
  dessertsHeading.textContent = 'Desserts';

  main.appendChild(menu);
  menu.appendChild(menuHeading);
  menu.appendChild(starters);
  menu.appendChild(mains);
  menu.appendChild(desserts);
  starters.appendChild(startersHeading);
  mains.appendChild(mainsHeading);
  desserts.appendChild(dessertsHeading);

  const starters1img = document.createElement('img');
  starters1img.src = starters1;
  starters1img.width = 300;
  starters.appendChild(starters1img);

  const starters2img = document.createElement('img');
  starters2img.src = starters2;
  starters2img.width = 300;
  starters.appendChild(starters2img);

  const starters3img = document.createElement('img');
  starters3img.src = starters3;
  starters3img.width = 300;
  starters.appendChild(starters3img);
}
