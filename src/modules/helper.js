function createElement(element) {
  return document.createElement(element);
}

function addClass(element, cssClass) {
  element.classList.add(cssClass);
}

export { createElement, addClass };
