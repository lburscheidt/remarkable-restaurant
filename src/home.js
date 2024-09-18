import homeImg from './home.jpg';

export function createHome() {
  const main = document.querySelector('main');
  const homeContent = document.createElement('div');
  homeContent.id = 'homeContent';
  const homeHeading = document.createElement('h1');
  homeHeading.textContent = "Naomi's Noodle Bar";
  const homeTagline = document.createElement('h2');
  homeTagline.textContent = 'The home of authentic Japanese cuisine';
  const image = document.createElement('img');
  image.src = homeImg;
  image.width = 300;
  main.appendChild(homeContent);
  homeContent.appendChild(homeHeading);
  homeContent.appendChild(homeTagline);
  homeContent.appendChild(image);
}
