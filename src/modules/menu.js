import { createElement, addClass } from "./helper.js";
import menuItems from "../data/menuItems.json";
import "../stylesheets/menu.css";

function createMenu() {
  let menuContainer = createElement("div"),
    entreeContainer = createElement("div"),
    sidesContainer = createElement("div"),
    entreeItemContainer = createElement("div"),
    sidesItemContainer = createElement("div"),
    entreeHeader = createElement("h2"),
    sidesHeader = createElement("h2");

  menuItems.forEach((item) => {
    let menuItem = createElement("div"),
      itemHeader = createElement("h3"),
      itemDescription = createElement("p"),
      itemPrice = createElement("i");

    itemHeader.textContent = item.name;
    itemDescription.textContent = item.description;
    itemPrice.textContent = item.price;

    itemDescription.append(itemPrice);
    menuItem.append(itemHeader, itemDescription);

    addClass(menuItem, "menu-item");

    if (item.type === "entree") {
      entreeItemContainer.append(menuItem);
    } else {
      sidesItemContainer.append(menuItem);
    }
  });

  addClass(entreeItemContainer, "menu-grid");
  addClass(sidesItemContainer, "menu-grid");

  entreeHeader.textContent = "Burgers";
  entreeContainer.append(entreeHeader, entreeItemContainer);
  addClass(entreeContainer, "entree-container");

  sidesHeader.textContent = "Sides";
  sidesContainer.append(sidesHeader, sidesItemContainer);

  menuContainer.append(entreeContainer, sidesContainer);
  addClass(menuContainer, "menu-container");

  return menuContainer;
}

function renderMenuPage() {
  let bodyElement = document.querySelector("body"),
    contentDiv = document.querySelector(".content"),
    mainElement = document.querySelector("main"),
    menuTab = document.querySelector(`[data-tab='menu']`);

  addClass(bodyElement, "menu-page-background");
  addClass(contentDiv, "menu-page-overlay");
  addClass(menuTab, "header-selected-tab");

  mainElement.append(createMenu());
}

export { renderMenuPage };
