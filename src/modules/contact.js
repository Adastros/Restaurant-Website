import { createElement, addClass } from "./helper.js";
import facebookIconImg from "../images/f_logo_RGB-Blue_72.png";
import instagramIconImg from "../images/Instagram_Glyph_Gradient_RGB.svg";
import twitterIconImg from "../images/Twitter social icons - circle - blue.svg";
import "../stylesheets/home.css";

function createAddressContent() {
  let addressContainer = createElement("div"),
    addressHeader = createElement("h2"),
    address = createElement("p");

  addressHeader.textContent = "Address";
  address.textContent = "727 N Broadway, Los Angeles, CA 90012";

  addressContainer.append(addressHeader, address);

  return addressContainer;
}

function createBusinessHoursContent() {
  let businessHoursContainer = createElement("div"),
    businessHoursHeader = createElement("h2"),
    businessHours = createElement("p");

  businessHoursHeader.textContent = "Business Hours";
  businessHours.textContent = "Open everyday from 10 AM to 9 PM";

  businessHoursContainer.append(businessHoursHeader, businessHours);

  return businessHoursContainer;
}

function createSocialMediaLinks() {
  let socialMediaContainer = createElement("div"),
    socialMediaHeader = createElement("h2"),
    iconContainer = createElement('div'),
    facebookIcon = createElement("img"),
    instagramIcon = createElement("img"),
    twitterIcon = createElement("img"),
    facebookLink = createElement("a"),
    instagramLink = createElement("a"),
    twitterLink = createElement("a");

  socialMediaHeader.textContent = "Follow us on";

  facebookIcon.setAttribute("src", facebookIconImg);
  facebookIcon.setAttribute("alt", "Facebook icon");
  facebookLink.setAttribute("href", "#");
  facebookLink.append(facebookIcon);

  instagramIcon.setAttribute("src", instagramIconImg);
  instagramIcon.setAttribute("alt", "Instagram icon");
  instagramLink.setAttribute("href", "#");
  instagramLink.append(instagramIcon);

  twitterIcon.setAttribute("src", twitterIconImg);
  twitterIcon.setAttribute("alt", "Twitter icon");
  twitterLink.setAttribute("href", "#");
  twitterLink.append(twitterIcon);

  addClass(iconContainer, 'icon-container')
  addClass(socialMediaContainer, 'social-media-container')

  iconContainer.append(facebookLink);
  iconContainer.append(instagramLink);
  iconContainer.append(twitterLink);
  socialMediaContainer.append(socialMediaHeader);
  socialMediaContainer.append(iconContainer);

  return socialMediaContainer;
}

function createGoogleMapsInteractable() {
  let googleMapsContainer = createElement("div"),
    googleMap = createElement("iframe");

  googleMap.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.3315762129079!2d-118.23971007719766!3d34.06114863770071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c65af52d6543%3A0x95f38db67f8f686b!2s727%20N%20Broadway%2C%20Los%20Angeles%2C%20CA%2090012!5e0!3m2!1sen!2sus!4v1662932683359!5m2!1sen!2sus"
  );
  googleMap.setAttribute("loading", "lazy");
  googleMap.setAttribute("referrerpolicy", "no-referrer-when-downgrade");

  addClass(googleMapsContainer, "contact-page-google-maps-container");

  googleMapsContainer.append(googleMap);

  return googleMapsContainer;
}

function createContactContent() {
  let contactContentContainer = createElement("div"),
    businessInfoContainer = createElement("div"),
    addressContent = createAddressContent(),
    businessHoursContent = createBusinessHoursContent(),
    socialMediaLinks = createSocialMediaLinks(),
    googleMapInterable = createGoogleMapsInteractable();

  addClass(businessInfoContainer, "contact-page-business-info-container");
  addClass(contactContentContainer, "contact-page-content-container");

  businessInfoContainer.append(
    addressContent,
    businessHoursContent,
    socialMediaLinks
  );
  contactContentContainer.append(businessInfoContainer, googleMapInterable);

  return contactContentContainer;
}

function renderContactPage() {
  let contactTab = document.querySelector(`[data-tab='contact']`),
    bodyElement = document.querySelector("body"),
    mainElement = document.querySelector("main");

  addClass(contactTab, "selected-tab");

  mainElement.append(createContactContent());
  addClass(mainElement, "contact-page");
}

export { renderContactPage };
