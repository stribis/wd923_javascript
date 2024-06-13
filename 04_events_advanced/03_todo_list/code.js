// erstellen eines leeren arrays
let todoList = [];

// getTodos function um die todos aus dem local storage zu bekommen
getTodos();

// getTodos function
function getTodos() {
  // wenn es ein todos key ims lokal storage gibt, holen wir die todos
  if (localStorage.getItem("todos")) {
    // aktualisieren des arrays
    todoList = JSON.parse(localStorage.getItem("todos"));
    // aktualisieren des HTMLs
    populateList();
  }
}

// event listener für den add button
document.querySelector("#addbutton").addEventListener("click", (event) => {
  // preventDefault verhindert das standardverhalten des buttons in einer form
  // in diesem fall das neuladen der seite
  event.preventDefault();
  addTodo();
});

// addTodo function
function addTodo() {
  // wir adden nur das todo, wenn der input nicht leer ist
  const newTodo = document.querySelector("#addinput").value.trim();

  // wenn der input nicht leer ist, erstellen wir ein neues objkt
  if (newTodo) {
    // das neue objekt
    const todoObject = {
      text: newTodo,
      complete: false,
    };

    // wir fügen nun das Objekt dem array hinzu
    // das neue objekt ist immer am anfang des arrays
    todoList.push(todoObject);

    // update vom local storage
    localStorage.setItem("todos", JSON.stringify(todoList));

    // wir müssen eine andere Funktion aufrufen für das aktualisiern des HTMLS
    populateList();

    // zurücksetzen des inputs
    document.querySelector("#addinput").value = "";
  } else {
    // wenn der input leer ist, geben wir eine alert aus
    alert("Please enter a todo");
  }
}

// populateList function
function populateList() {
  // zurücksetzen der Liste
  // damit nicht mehrere Einträge hinzugefügt werden
  const list = document.querySelector("#list");
  list.innerHTML = "";

  // wir kreieren für jedes todo im Array ein neues listenelement
  if (todoList.length > 0) {
    // wir beziehen uns auf ein forEach loop
    todoList.forEach((todo, index) => {
      const todoWrapper = document.createElement("div");
      todoWrapper.classList.add("todoWrapper");

      // check ob ein todo abgeschlossen ist
      if (todo.complete) {
        todoWrapper.classList.add("marked");
      }
      todoWrapper.innerHTML = `
        <div class="todoText">${todo.text}</div>
        <div class="todoCheck ${todo.complete ? "complete" : "false"}" data-index="${index}"></div>
      `;
      list.appendChild(todoWrapper);
    });
  }
  updateBoxes();
}

// updateBoxes function
function updateBoxes() {
  let boxes = document.querySelectorAll(".todoCheck");
  // wir iterieren durch jede box und fügen allen einen eventListener hinzu
  boxes.forEach((box) => {
    // eventListener hinzufügen
    box.addEventListener("click", () => {
      // wir müssen den index des todos herausfinden
      const index = box.getAttribute("data-index");

      // wir können anhand des index das todo finden und den status toggeln
      todoList[index].complete = !todoList[index].complete;

      // wir müssen den local storage aktualisieren
      localStorage.setItem("todos", JSON.stringify(todoList));

      // aktualisieren des HTMLs
      populateList();
    });
  });
}

// clear completed button event listener, damit completed todos gelöscht werden können
document.querySelector("#clearCompleted").addEventListener("click", (event) => {
  event.preventDefault();
  // wir filtern alle todos, die nicht abgeschlossen sind
  // wir definieren eine neue Liste
  // die neue Liste wird nur die todos beinhalten, die nicht abgeschlossen sind
  // dies kann man mit der filter methode machen in einem array
  todoList = todoList.filter((todo) => !todo.complete);

  // wir aktualisieren die local storage, damit es nur die todos beinhaltet
  // die nicht completed sind
  localStorage.setItem("todos", JSON.stringify(todoList));

  // wir aktualisieren das HTML
  populateList();
});

// mark all as complete button event listener
document.querySelector("#markAsComplete").addEventListener("click", (event) => {
  event.preventDefault();
  // wir iterieren durch alle todos und setzen sie auf completed
  // dies kann durch ein spread operator gemacht werden
  // der spread operator kopiert alle keys und values von einem objekt in ein neues objekt
  // und so können wir das complete key auf true setzen
  todoList = todoList.map((todo) => ({ ...todo, complete: true }));

  // wir aktualisieren die local storage
  localStorage.setItem("todos", JSON.stringify(todoList));

  // wir aktualisieren das HTML
  populateList();
});

/*
1.) Wir erstellen ein leeres Array, das wir todoList nennen
2.) Wir rufen eine Funktion namens getTodos auf, die die todos aus dem local storage holt
3.) In der getTodos Funktion überprüfen wir, ob es einen todos key im local storage gibt
4.) Wenn es einen todos key gibt, holen wir die todos und aktualisieren das todoList Array
5.) Wir rufen die populateList Funktion auf, um das HTML zu aktualisieren
6.) Die populateList Funktion aktualisiert jeweils das HTML

Das schwierige an dieser Aufgabe ist die verschiedenen Abhängigkeiten zu sehen

Die popluateList Funktion wird immer wieder aufgerufen, damit das HTML immer den aktuellsten Stand aufzeigt

Die updateBoxes Funktion wird aufgerufen, sobald man die Checkboxes anklickt, damit die todos completed property getoggelt werden kann

Die addTodo Funktion wird aufgerufen, wenn ein neues Todo hinzugefügt wird, in dem man auf das add-Button klickt

Die clearCompleted Funktion sowie die marAsComplete Funktion sind die einzigen sachen, die nicht so komplex sind
da sie nur das aktuelle Array kopieren, manipulieren und neu setzen, damit dann wiederum die populateList aufgerufen wird,
damit wir das HTML aktualisieren können
*/
