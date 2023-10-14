import { createHeader } from './header.js';
import { createHome } from './home.js';
import { createMenu } from './menu.js';
import { createContact } from './contact.js';
import './style.css';

const content = document.querySelector('#content');
const body = document.createElement('div');
body.id = 'body';

content.appendChild(createHeader());
content.appendChild(body);
body.appendChild(createHome());

const homeButton = document.querySelector("button#Home");
const menuButton = document.querySelector("button#Menu");
const contactButton = document.querySelector("button#Contact");

homeButton.addEventListener('click', () => {
    body.innerHTML = '';
    body.appendChild(createHome());
})

menuButton.addEventListener('click', () => {
    body.innerHTML = '';
    body.appendChild(createMenu());
})

contactButton.addEventListener('click', () => {
    body.innerHTML = '';
    body.appendChild(createContact());
})




