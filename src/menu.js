import { method } from "./methods.js";
import hamburger from "./images/hamburger.png";
import cheeseBurger from "./images/cheeseburger.png";
import doubleCheeseBurger from "./images/double-cheeseburger.png";
import steak from "./images/steak.png";
import ribs from "./images/ribs.png";
import grilledCheese from "./images/grilled-cheese.png";
import salad from "./images/caesar-salad.png";
import fries from "./images/french-fries.png";
import chef from "./images/chef.png";


function createImage(imagePath){
    const image = document.createElement("img");
    image.src = imagePath;
    image.setAttribute("menuImage","");
    return image;
}

function createP(text){
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function createMenuItemContent(itemName, itemPrice, itemDesc){
    const menuItemContent = method.createDivClass("itemContent");
    const itemHead = method.createDivClass("namePrice");
    menuItemContent.appendChild(itemHead);
    itemHead.appendChild(method.createH4(itemName));
    itemHead.appendChild(method.createH3(itemPrice));
    menuItemContent.appendChild(createP(itemDesc));
    return menuItemContent;
}


function createMenuItem(imagePath, itemName, itemPrice, itemDesc){
    const menuItemElement = document.createElement("div");
    menuItemElement.setAttribute("menuItem","");
    menuItemElement.appendChild(createImage(imagePath));
    menuItemElement.appendChild(createMenuItemContent(itemName, itemPrice, itemDesc));
    return menuItemElement;
}

function createMenuHeader(){
    const menuHeader = method.createDiv("Menu");
    const image = document.createElement("img");
    image.src = chef;
    menuHeader.appendChild(image);
    return menuHeader;
}

export function createMenu(){
    const menu = method.createDivId("menu");
    menu.appendChild(createMenuHeader());
    const gridContainer = document.createElement('div');
    menu.appendChild(gridContainer);
    gridContainer.appendChild(createMenuItem(hamburger, "Hamburger:", "$2.49", "Buns, patty, tomato, onions, lettuce, and our secret family recipe."));
    gridContainer.appendChild(createMenuItem(cheeseBurger, "Cheeseburger:", "$2.99", "Similar to our hamburger, but with cheese."));
    gridContainer.appendChild(createMenuItem(doubleCheeseBurger, "Double Cheeseburger:", "$3.49", "Similar to our cheeseburger, but with an extra patty."));
    gridContainer.appendChild(createMenuItem(steak, "Steak:", "$11.99", "A juicy steak made just how you like it."));
    gridContainer.appendChild(createMenuItem(ribs, "BBQ Ribs:", "$8.99", "Barbecue ribs with your choice of a add-ons."));
    gridContainer.appendChild(createMenuItem(grilledCheese, "Grilled Cheese Sandwich:", "$4.99", "A toasted and grilled cheese sandwich, dipped in our special sauce."));
    gridContainer.appendChild(createMenuItem(salad, "Caesar Salad:", "$7.99", "Your typical caesar salad that comes with your choice of dressings."));
    gridContainer.appendChild(createMenuItem(fries, "French Fries:", "$2.00", "Sometimes you don't want to eat your burger alone, why not add some french fries?"));
    return menu;
}