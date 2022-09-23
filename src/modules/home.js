import { createElement, addClass } from "./helper.js";
import "../stylesheets/home.css";

function createHeroMessage() {
  let heroMessageContainer = createElement("div"),
    heroMainText = createElement("h1"),
    heroSubtext = createElement("p");

  heroMainText.textContent = `THE BEST BURGERS IN SOCAL`;
  heroSubtext.textContent = `HAND CRAFTED WITH THE FRESHEST INGREDIENTS`;

  heroMessageContainer.append(heroMainText);
  addClass(heroSubtext, "hero-subtext");
  heroMessageContainer.append(heroSubtext);
  addClass(heroMessageContainer, "hero-container");

  return heroMessageContainer;
}

function renderHomePage() {
  let bodyElement = document.querySelector("body"),
    contentDiv = document.querySelector(".content"),
    mainElement = document.querySelector("main"),
    homeTab = document.querySelector(`[data-tab = 'home']`);

  mainElement.append(createHeroMessage());
  addClass(mainElement, "homepage-hero-offset");

  addClass(bodyElement, "homepage-background");
  addClass(contentDiv, "homepage-overlay");
  addClass(homeTab, "selected-tab");
}

export { renderHomePage };
