// Schreibe ein code welches 100 boxen erstellt
// jede Box ist 100px x 100px
// even und odd boxes haben andere farben (odd: blue, even: red)

// STEP BY STEP
// 1: Kreiere einen for loop, welches 100 mal wiederholt wird
for (let i = 0; i < 100; i++) {
  // INNERHALB DES FOR-Loops
  // 2: Kreiere ein div und speichere es in eine variable
  const box = document.createElement("div");
  // 3: Setze die Höhe und die Breite der Box
  box.style.height = "100px";
  box.style.width = "100px";
  // 4. Übeprüfe ob die aktuelle iteration odd oder even ist anhand dem Modulo operator
  // Wenn die iteration odd ist, dann ist die Farbe der Box "blue", wenn es even ist, dann is die Farbe "red
  if (i % 2 === 0) {
    box.style.backgroundColor = "blue";
  } else {
    box.style.backgroundColor = "red";
  }
  // Wenn du es möchtest kannst du es auch mit einem ternary operator probieren
  // box.style.backgroundColor = i % 2 === 0 ? "blue" : "red";

  // 5. Append das Element als child in den container
  document.querySelector(".container").appendChild(box);
}
