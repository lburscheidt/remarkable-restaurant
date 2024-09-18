import './style.css';
import { createHome } from './home.js';
import { createMenu } from './menu.js';
import { createMenuItem } from './menu.js';

createHome();

function clear() {
  let container = document.querySelector('div');
  if (container) {
    container.remove();
  }
}

let homeBtn = document.getElementById('homeBtn');

homeBtn.addEventListener('click', function () {
  clear();
  createHome();
});

let menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', function () {
  clear();
  createMenu();
});

let contactBtn = document.getElementById('contactBtn');
