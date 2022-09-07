import { createElement, addClass } from "./helper.js";
import menuItems from "../data/menuItems.json";
import "../stylesheets/style.css";

function createMenu() {
  let menuContainer = createElement("div"),
    entreeContainer = createElement("div"),
    sidesContainer = createElement("div"),
    entreeHeader = createElement("h2"),
    sidesHeader = createElement("h2");

  entreeHeader.textContent = "Burgers";
  sidesHeader.textContent = "Sides";
  entreeContainer.append(entreeHeader);
  sidesContainer.append(sidesHeader);
  addClass(entreeContainer, 'entree-container');
  addClass(sidesContainer, 'sides-container');

  menuItems.forEach((item) => {
    let menuItem = createElement("div"),
      itemHeader = createElement("h3"),
      itemDescription = createElement("p");

    itemHeader.textContent = item.name;
    itemDescription.textContent = item.description + " " + item.price;

    menuItem.append(itemHeader);
    menuItem.append(itemDescription);

    if (item.type === "entree") {
      entreeContainer.append(menuItem);
    } else {
      sidesContainer.append(menuItem);
    }
  });

  menuContainer.append(entreeContainer);
  menuContainer.append(sidesContainer);
  addClass(menuContainer, "menu-container");

  return menuContainer;
}

function renderMenuPage() {
  let menuTab = document.querySelector(`[data-tab='menu']`),
    htmlElement = document.querySelector("html"),
    bodyElement = document.querySelector("body"),
    mainElement = document.querySelector("main");

  addClass(htmlElement, "menu-page-background");
  addClass(bodyElement, "menu-page-overlay");
  addClass(menuTab, "selected-tab");

  mainElement.append(createMenu());
}

export { renderMenuPage };
