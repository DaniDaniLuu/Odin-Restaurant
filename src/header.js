import { method } from "./methods.js"

function createH1(text){
    const h1 = document.createElement('h1');
    h1.textContent = text;
    return h1;
}

export function createHeader(){
    const header = document.createElement('header');
    header.appendChild(createH1("Dani's Diner"));
    const nav = document.createElement('nav');
    header.appendChild(nav);
    nav.appendChild(method.createButton('Home'));
    nav.appendChild(method.createButton('Menu'));
    nav.appendChild(method.createButton('Contact'));
    return header;
}