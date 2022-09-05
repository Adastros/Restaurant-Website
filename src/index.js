import { createHeader } from "./modules/header.js";
import { renderHomePage } from "./modules/home.js";
import "./stylesheets/style.css";

const header = createHeader();

let bodyElement = document.querySelector("body");

bodyElement.prepend(header);

renderHomePage();

console.log("heelo");
