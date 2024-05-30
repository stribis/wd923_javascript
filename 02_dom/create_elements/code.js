// HTML Body in eine Variable speichern
const htmlBody = document.querySelector("body");

/** SYNTAX **/
/**
    document.createElement("html_tag");
**/

// Kreieren wir ein neues element und speichern es in eine variable
const myParagraph = document.createElement("p");
// Fügen wir dem element text hinzu
myParagraph.textContent = "I am a new Paragraph";
// Fügen wir das element dem body hinzu
// htmlBody.appendChild(myParagraph);
// 1. Fügt eine classe "myClass" dem Paragraph hinzu
myParagraph.classList.add("myClass");
// 2. Fügt eine id "myId" dem Paragraph hinzu
// myParagraph.id = "myId";
myParagraph.setAttribute("id", "myId");

htmlBody.appendChild(myParagraph);

// 3. Fügt ein Bild dem body hinzu
// src = "https/://picsum.photos/500"
// alt ="Random Image"
const myImage = document.createElement("img");
myImage.src = "https://picsum.photos/500";
myImage.alt = "Random Image";

htmlBody.appendChild(myImage);

const myImage2 = document.createElement("img");
myImage2.setAttribute("src", "https://picsum.photos/550");
myImage2.setAttribute("alt", "Random Image");

htmlBody.appendChild(myImage2);
