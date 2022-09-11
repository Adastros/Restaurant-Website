import { createElement, addClass } from "./helper.js";
import "../stylesheets/home.css";

function renderLocationPage() {
    let locationTab = document.querySelector(`[data-tab='location]`);
    addClass(locationTab, "selected-tab");
}

export { renderLocationPage };