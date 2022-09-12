import { renderHomePage } from "./home.js";
import { renderMenuPage } from "./menu.js";
import { renderAboutPage } from "./about.js";
import { renderContactPage } from "./contact.js";
import { createElement, addClass, removeClass } from "./helper.js";
import logo from "../images/logo.png";
import "../stylesheets/style.css";

function renderPage(page) {
  switch (page) {
    case "home":
      renderHomePage();
      break;
    case "menu":
      renderMenuPage();
      break;
    case "about":
      renderAboutPage();
      break;
    case "contact":
      renderContactPage();
      break;
    default:
      renderHomePage();
      break;
  }
}

function addNavItemListener(navListItem) {
  navListItem.addEventListener("click", (e) => {
    let htmlElement = document.querySelector("html"),
      bodyElement = document.querySelector("body"),
      mainElement = document.querySelector("main"),
      currentSelectedNavListItem = document.querySelector(".selected-tab");
   
    htmlElement.removeAttribute("class");
    bodyElement.removeAttribute("class");
    mainElement.removeAttribute("class");
    removeClass(currentSelectedNavListItem, "selected-tab");

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
    restaurantNameElement = createElement("div"),
    logoElement = createElement("img");

  restaurantNameElement.textContent = `Bob's Bangin Burgers`;
  addClass(restaurantNameElement, 'logo-name')
  logoElement.setAttribute("src", logo);
  logoElement.setAttribute("alt", `Bob's Bangin Burgers Logo`);
  addClass(logoElement, "logoImg");

  restaurantNameAndLogoContainer.append(restaurantNameElement);
  restaurantNameAndLogoContainer.append(logoElement);
  addClass(restaurantNameAndLogoContainer, "site-logo");

  return restaurantNameAndLogoContainer;
}

function createNav() {
  let navElement = createElement("nav"),
    navList = createElement("ul"),
    navListItemArr = ["home", "menu", "about", "contact"]; // font used is capitalized by default

  for (let i = 0; i < 4; i++) {
    let navListItem = createElement("li"),
      itemAnchor = createElement("a");

    itemAnchor.textContent = navListItemArr[i];
    itemAnchor.setAttribute("href", "#");
    itemAnchor.dataset.tab = navListItemArr[i];

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
