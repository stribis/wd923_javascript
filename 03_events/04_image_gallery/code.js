//** Very simple mock static image gallery with vanilla JS **/

// 1. Deklariere alle variablen mit denen wir interagieren möchten
// current image -> big image
const currentImage = document.querySelector("#active");
// all images -> small images
const allImages = document.querySelectorAll(".images img");
// magic number opacity, welches das aktuell selektierte image besitzt
const opacity = 0.3;
// setzen wir die opactiy des ersten bildes im Array auf 0.6
allImages[0].style.opacity = opacity;

// 2. Iteriere über alle bilder und füge ein event listener hinzu
// Weil wir ein array mit dem querySelectorAll bekommen
// können wir einfach über das array iterieren -> forEach
allImages.forEach((element) => {
  // event listener für click event für jedes bild
  element.addEventListener("click", (event) => {
    // 3. early return, wenn das aktuelle bild bereits aktiv ist
    if (currentImage.src === event.target.src) {
      return;
    }

    // 4. alle opacites auf 1 zurücksetzen bevor wir das aktuelle bild ändern
    allImages.forEach((element) => {
      element.style.opacity = 1;
    });
    // 5. ersetze das aktuelle bild mit dem geklickten bild
    currentImage.src = event.target.src;
    // 6. Add fade in class beim current image
    currentImage.classList.add("fade-in");
    // 7. Entfernen der fade-in klasse nach 0.5s
    setTimeout(() => {
      currentImage.classList.remove("fade-in");
    }, 500);
    // 8. setze die opacity des geklickten bildes auf 0.6
    event.target.style.opacity = opacity;
    // element.style.opacity = opacity;
  });
});
