import { createElement, addClass } from "./helper.js";
import "../stylesheets/home.css";

function createHeroMessage() {
  let heroMessageContainer = createElement("div"),
    heroMainText = createElement("h1"),
    heroSubtext = createElement("p");

  heroMainText.textContent = `THE BEST BURGERS IN SOCAL`;
  heroSubtext.textContent = `HAND CRAFTED ✕ FRESH INGREDIENTS`;

  addClass(heroSubtext, "hero-subtext");
  addClass(heroMessageContainer, "hero-container");

  heroMessageContainer.append(heroMainText, heroSubtext);

  return heroMessageContainer;
}

function renderHomePage() {
  let bodyElement = document.querySelector("body"),
    contentDiv = document.querySelector(".content"),
    mainElement = document.querySelector("main"),
    homeTab = document.querySelector(`[data-tab = 'home']`);

  addClass(mainElement, "homepage-hero-offset");
  addClass(bodyElement, "homepage-background");
  addClass(contentDiv, "homepage-overlay");
  addClass(homeTab, "selected-tab");

  mainElement.append(createHeroMessage());
}

export { renderHomePage };
