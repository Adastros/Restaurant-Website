import { createElement, addClass } from "./helper.js";
import "../stylesheets/home.css";

function createHeroMessage() {
  let heroMessageContainer = createElement("div"),
    heroMainText = createElement("h1"),
    heroSubtext = createElement("p");

  heroMainText.textContent = `THE BEST BURGERS IN SOCAL`;
  heroSubtext.textContent = `HAND CRAFTED WITH THE FRESHEST INGREDIENTS`;

  heroMessageContainer.append(heroMainText);
  heroMessageContainer.append(heroSubtext);
  addClass(heroMessageContainer, "heroText");

  return heroMessageContainer;
}

function renderHomePage() {
  let homePage = document.querySelector("main"),
    bodyElement = document.querySelector("body"),
    htmlElement = document.querySelector("html"),
    homeTab = document.querySelector(`[data-tab = 'home']`);

  homePage.append(createHeroMessage());
  addClass(bodyElement, "homepage-overlay");
  addClass(htmlElement, "homepage-background");
  addClass(homeTab, "selected-tab");

  return homePage;
}

export { renderHomePage };
