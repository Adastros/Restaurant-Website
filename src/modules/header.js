import { renderHomePage } from "./home.js";
import { renderMenuPage } from "./menu.js";
import { renderAboutPage } from "./about.js";
import { renderLocationPage } from "./location.js";
import { createElement, addClass } from "./helper.js";
import logo from "../images/logo.png";
import "../stylesheets/style.css";

function renderPage(page) {
  switch (page) {
    case "Home":
      renderHomePage();
      break;
    case "Menu":
      renderMenuPage();
      break;
    case "About":
      renderAboutPage();
      break;
    case "Location":
      renderLocationPage();
      break;
    default:
      renderHomePage();
      break;
  }
}

function addNavItemListener(navListItem) {
  navListItem.addEventListener("click", (e) => {
    let mainElement = document.querySelector("main");

    // clear out all child elements
    while (mainElement.firstChild) {
      mainElement.removeChild(mainElement.firstChild);
    }

    // render 'new' page and replace with children based on tab selected
    renderPage(e.target.textContent);
  });
}

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
    let navListItem = createElement("li"),
      itemAnchor = createElement("a");

    itemAnchor.textContent = navListItemArr[i];
    itemAnchor.setAttribute("href", "#");

    // highlight the home tab on page load
    if (i === 0) {
      addClass(itemAnchor, "selected-tab");
    }

    navListItem.append(itemAnchor);
    addNavItemListener(navListItem);
    navList.append(navListItem);
  }

  addClass(navList, "nav-list");
  navElement.append(navList);

  return navElement;
}

function renderHeader() {
  let headerElement = document.querySelector("header");

  headerElement.append(createNameAndLogo());
  headerElement.append(createNav());

  return headerElement;
}

export { renderHeader };
