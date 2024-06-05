// 1. Burger menu button
const burger = document.querySelector(".burger");

// 2. Add event listener für den Burger menu button
burger.addEventListener("click", toggleMobileNavContent);

// 3. Holen des mobile navigation content welches hidden ist
const mobileNavContent = document.querySelector(".mobile-navigation-content-hidden");

// 3. Funktion für das togglen des mobile navigation content
function toggleMobileNavContent() {
  mobileNavContent.classList.toggle("mobile-navigation-content-visible");
}

// Aufgabe: Macht das gleiche mit dem About und dem Services Button
// Ihr habt hier zwei Möglichkeiten, entwedet macht ihr zwei verschiedene funktionen
// Oder ihr könnt auch eine Funktion schreiben, die das togglen für alle Buttons macht

// 4. About Button & Project Button
const aboutButton = document.querySelector(".about-button");
const projectsButton = document.querySelector(".project-button");

// 5. Selektieren der hidden sub contents
const aboutNavContent = document.querySelector(".about-sub-content-hidden");
const projectsNavContent = document.querySelector(".project-sub-content-hidden");

// // define functions to show about & project content
// function showAboutNavContent() {
//   aboutNavContent.classList.toggle("about-sub-content-visible");
// }
// function showProjectNavContent() {
//   projectNavContent.classList.toggle("project-sub-content-visible");
// }

// // add eventlisteners to the about & project "button"
// aboutButton.addEventListener("click", showAboutNavContent);
// projectButton.addEventListener("click", showProjectNavContent);

// 6. Erstellen einer einzelen Funktion für das togglen der sub contents
function toggleSubContent(subContent) {
  if (subContent === "about-button") {
    aboutNavContent.classList.toggle("about-sub-content-visible");
  }
  if (subContent === "project-button") {
    projectsNavContent.classList.toggle("project-sub-content-visible");
  }
}

// 7. Add event listeners für die about und project buttons
aboutButton.addEventListener("click", () => toggleSubContent("about-button"));
projectsButton.addEventListener("click", () => toggleSubContent("project-button"));
