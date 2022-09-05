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
    bodyElement = document.querySelector("body");

  bodyElement.append(createHeroMessage());
  addClass(bodyElement, "homepage");

  return homePage;
}

export { renderHomePage };
