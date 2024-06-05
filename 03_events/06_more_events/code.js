// Es gibt enorm viele events in JavaScript. Hier sind einige davon:

// window.onload - wird ausgeführt, wenn das gesamte Dokument geladen wurde
window.onload = function () {
  console.log("Das Dokument wurde geladen");
};

// mouseenter event - wird ausgeführt, wenn der Mauszeiger über ein Element bewegt wird
document.querySelector("label").addEventListener("mouseenter", function () {
  console.log("Mauszeiger über dem Label");
  document.querySelector("label").classList.remove("leave");
  document.querySelector("label").classList.add("entered");
});

// mouseout event - wird ausgeführt, wenn der Mauszeiger das Element verlässt
document.querySelector("label").addEventListener("mouseout", function () {
  console.log("Mauszeiger hat das Label verlassen");
  document.querySelector("label").classList.remove("entered");
  document.querySelector("label").classList.add("leave");
});

// keydown event - wird ausgeführt, wenn eine Taste auf der Tastatur gedrückt wird
document.addEventListener("keydown", function (event) {
  console.log("Taste gedrückt: " + event.key);
});
