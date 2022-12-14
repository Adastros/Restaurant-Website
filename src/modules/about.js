import { createElement, addClass } from "./helper.js";
import aboutImg from "../images/chefBob.jpg";
import "../stylesheets/about.css";

function createAboutPageElements() {
  let aboutContainer = createElement("div"),
    aboutHistoryContainer = createElement("div"),
    aboutHeader = createElement("h1"),
    aboutHistory = createElement("p"),
    aboutImage = createElement("img");

  aboutHeader.textContent = `Making Bangin Burgers`;

  aboutHistory.textContent = `Bob Gray first started selling his burgers at a 
  small food stall in a local farmer's market in Los Angeles, California. It 
  was there that Bob recalled many of the customers stating that his burgers 
  were 'Bangin'. Excited that customers enjoyed his burger, Bob went on to 
  open his own restaurant in Los Angeles in June 2017. From there, Bob's Bangin 
  Burger grew in popularity and appeared in many shows such as Flavor Town. 
  Bob's Bangin Burger has served more than a million burgers since it's opening 
  and will continue to make bangin burgers.`;

  aboutImage.setAttribute("src", aboutImg);
  aboutImage.setAttribute("alt", "Chef Bob Gray makng a Bangin Bird Burger");

  aboutHistoryContainer.append(aboutHeader, aboutHistory);
  aboutContainer.append(aboutHistoryContainer, aboutImage);

  addClass(aboutContainer, "about-page-main-container");
  addClass(aboutHistoryContainer, "about-page-history-container");
  addClass(aboutImage, "about-page-img");

  return aboutContainer;
}

function renderAboutPage() {
  let aboutTab = document.querySelector(`[data-tab='about']`),
    bodyElement = document.querySelector("body"),
    mainElement = document.querySelector("main");

  addClass(aboutTab, "header-selected-tab");

  mainElement.append(createAboutPageElements());
}

export { renderAboutPage };
