import { createElement, addClass } from "./helper.js";
import logo from "../images/logo.png";
import "../stylesheets/style.css";

function createNameAndLogo() {
  let restaurantNameAndLogoContainer = createElement("div"),
    restaurantNameElement = createElement("h2"),
    logoElement = createElement("img");

  restaurantNameElement.textContent = `Bob's Bangin Burgers`;
  logoElement.setAttribute("src", logo);
  logoElement.setAttribute("alt", `Bob's Bangin Burgers Logo`);
  addClass(logoElement, "logoImg");

  restaurantNameAndLogoContainer.append(restaurantNameElement);
  restaurantNameAndLogoContainer.append(logoElement);
  addClass(restaurantNameAndLogoContainer, "nameLogoContainer");

  return restaurantNameAndLogoContainer;
}

function createNav() {
  let navElement = createElement("nav"),
    navList = createElement("ul"),
    navListItemArr = ["Home", "Menu", "About", "Location"];

  for (let i = 0; i < 4; i++) {
    let navListItem = createElement("li");
    navListItem.textContent = navListItemArr[i];
    navList.append(navListItem);
  }

  addClass(navList, "nav-list");
  navElement.append(navList);

  return navElement;
}

function createHeader() {
  let headerElement = createElement("header");

  headerElement.append(createNameAndLogo());
  headerElement.append(createNav());

  return headerElement;
}

export { createHeader };
