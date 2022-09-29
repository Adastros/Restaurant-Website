import { createElement, addClass } from "./helper.js";
import facebookIconImg from "../images/f_logo_RGB-Blue_72.png";
import instagramIconImg from "../images/Instagram_Glyph_Gradient_RGB.svg";
import twitterIconImg from "../images/Twitter social icons - circle - blue.svg";
import "../stylesheets/contact.css";

function createAddressContent() {
  let addressContainer = createElement("div"),
    addressHeader = createElement("h2"),
    addressStreet = createElement("p"),
    addressRegionalArea = createElement("p");

  addressHeader.textContent = "Address";
  addressStreet.textContent = "727 N Broadway";
  addressRegionalArea.textContent = "Los Angeles, CA 90012";

  addressContainer.append(addressHeader, addressStreet, addressRegionalArea);

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

function createPhoneNumberContent() {
  let phoneNumberContainer = createElement("div"),
    phoneNumberHeader = createElement("h2"),
    phoneNumber = createElement("div");

  phoneNumberHeader.textContent = "Phone";
  phoneNumber.textContent = "(555) 123-4567";

  addClass(phoneNumberContainer, "phone-number-container");
  phoneNumberContainer.append(phoneNumberHeader, phoneNumber);

  return phoneNumberContainer;
}

function createSocialMediaLinks() {
  let socialMediaContainer = createElement("div"),
    socialMediaHeader = createElement("h2"),
    iconContainer = createElement("div"),
    facebookIcon = createElement("img"),
    instagramIcon = createElement("img"),
    twitterIcon = createElement("img"),
    facebookLink = createElement("a"),
    instagramLink = createElement("a"),
    twitterLink = createElement("a");

  socialMediaHeader.textContent = "Follow us";

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

  addClass(iconContainer, "contact-page-social-media-icon-container");
  addClass(socialMediaContainer, "contact-page-social-media-container");

  iconContainer.append(facebookLink, instagramLink, twitterLink);
  socialMediaContainer.append(socialMediaHeader, iconContainer);

  return socialMediaContainer;
}

function createGoogleMapsInteractable() {
  let googleMap = createElement("iframe");

  googleMap.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.3315762129079!2d-118.23971007719766!3d34.06114863770071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c65af52d6543%3A0x95f38db67f8f686b!2s727%20N%20Broadway%2C%20Los%20Angeles%2C%20CA%2090012!5e0!3m2!1sen!2sus!4v1662932683359!5m2!1sen!2sus"
  );
  googleMap.setAttribute("loading", "lazy");
  googleMap.setAttribute("referrerpolicy", "no-referrer-when-downgrade");

  return googleMap;
}

function createContactForm() {
  let contactFormContainer = createElement("div"),
    contactFormHeaderContainer = createElement("div"),
    contactFormHeader = createElement("h2"),
    contactFormSubText = createElement("p"),
    contactForm = createElement("form"),
    firstNameContainer = createElement("div"),
    firstNameLabel = createElement("label"),
    firstNameInput = createElement("input"),
    lastNameContainer = createElement("div"),
    lastNameLabel = createElement("label"),
    lastNameInput = createElement("input"),
    emailContainer = createElement("div"),
    emailLabel = createElement("label"),
    emailInput = createElement("input"),
    messageContainer = createElement("div"),
    messageLabel = createElement("label"),
    messageTextarea = createElement("textarea"),
    submitButton = createElement("button");

  contactFormHeader.textContent = "Questions? Want to tell us something?";
  contactFormSubText.textContent =
    "Send us a message using the contact form below";

  firstNameLabel.textContent = "First Name:";
  firstNameLabel.setAttribute("for", "first-name");
  firstNameInput.setAttribute("id", "first-name");
  firstNameInput.setAttribute("type", "text");
  firstNameInput.setAttribute("name", "firstName");
  firstNameInput.setAttribute("placeholder", "First Name");
  firstNameInput.setAttribute("maxlength", "100");
  firstNameInput.setAttribute("required", "");

  lastNameLabel.textContent = "Last Name:";
  lastNameLabel.setAttribute("for", "last-name");
  lastNameInput.setAttribute("id", "last-name");
  lastNameInput.setAttribute("type", "text");
  lastNameInput.setAttribute("name", "lastName");
  lastNameInput.setAttribute("placeholder", "Last Name");
  lastNameInput.setAttribute("maxlength", "100");
  lastNameInput.setAttribute("required", "");

  emailLabel.textContent = "Email:";
  emailLabel.setAttribute("for", "email");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("placeholder", "Email");
  emailInput.setAttribute("maxlength", "200");
  emailInput.setAttribute("required", "");

  messageLabel.textContent = "Message:";
  messageLabel.setAttribute("for", "message");
  messageTextarea.setAttribute("id", "message");
  messageTextarea.setAttribute("name", "message");
  messageTextarea.setAttribute("rows", "5");
  messageTextarea.setAttribute("maxlength", "2000");
  messageTextarea.setAttribute("required", "");

  submitButton.textContent = "SUBMIT";
  submitButton.setAttribute("type", "submit");

  contactForm.setAttribute("action", "");
  contactForm.setAttribute("method", "post");
  contactForm.setAttribute("name", "contactForm");

  addClass(contactFormHeaderContainer, "contact-form-header-container");
  addClass(firstNameContainer, "contact-form-input-field");
  addClass(lastNameContainer, "contact-form-input-field");
  addClass(emailContainer, "contact-form-input-field");
  addClass(messageContainer, "contact-form-input-field");
  addClass(contactForm, "contact-form");
  addClass(contactFormContainer, "contact-form-container");

  contactFormHeaderContainer.append(contactFormHeader, contactFormSubText);
  firstNameContainer.append(firstNameLabel, firstNameInput);
  lastNameContainer.append(lastNameLabel, lastNameInput);
  emailContainer.append(emailLabel, emailInput);
  messageContainer.append(messageLabel, messageTextarea);
  contactForm.append(
    firstNameContainer,
    lastNameContainer,
    emailContainer,
    messageContainer,
    submitButton
  );
  contactFormContainer.append(contactFormHeaderContainer, contactForm);

  return contactFormContainer;
}

function createContactContent() {
  let contactContentContainer = createElement("div"),
    businessContactContainer = createElement("div"),
    businessInfoContainer = createElement("div"),
    addressContent = createAddressContent(),
    businessHoursContent = createBusinessHoursContent(),
    phoneNumberContent = createPhoneNumberContent(),
    socialMediaLinks = createSocialMediaLinks(),
    googleMapInterable = createGoogleMapsInteractable(),
    contactForm = createContactForm();

  addClass(businessInfoContainer, "contact-page-business-info-container");
  addClass(businessContactContainer, "contact-page-business-contact-container");
  addClass(contactContentContainer, "contact-page-content-container");

  businessInfoContainer.append(
    phoneNumberContent,
    businessHoursContent,
    addressContent,
    socialMediaLinks
  );
  businessContactContainer.append(businessInfoContainer, contactForm);
  contactContentContainer.append(googleMapInterable, businessContactContainer);

  return contactContentContainer;
}

function renderContactPage() {
  let contactTab = document.querySelector(`[data-tab='contact']`),
    bodyElement = document.querySelector("body"),
    mainElement = document.querySelector("main");

  addClass(contactTab, "header-selected-tab");
  addClass(mainElement, "contact-page");

  mainElement.append(createContactContent());
}

export { renderContactPage };
