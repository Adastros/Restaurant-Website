import { createElement, addClass } from "./helper.js";
import "../stylesheets/home.css";

function renderMenuPage() {
  let menuTab = document.querySelector(`[data-tab='menu'`);
  addClass(menuTab, "selected-tab");
}

export { renderMenuPage };
