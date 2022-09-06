import { createElement, addClass } from "./helper.js";
import "../stylesheets/home.css";

function renderAboutPage() {
    let aboutTab = document.querySelector(`[data-tab='about'`);
    addClass(aboutTab, "selected-tab");
}

export { renderAboutPage };