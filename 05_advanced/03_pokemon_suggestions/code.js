// initialen zustand
let state = {
  suggestedPokemons: [], // array von den vorgeschlagenen pokemons
  offset: 0, // offset ist für die paginierung, für die pokemongruppen
  currentIndex: 0, // aktueller index des angezeigten pokemons
};

// async funktion zum abrufen der vorgeschlagenen pokemons
// eine async funktion ist nötig, weil wir mit einer API kommunizieren wollen
// ohne eine async funktion, kann kein await/async benutzt werden
// da der await benötigt wird, um die auflösung des promise abzuwarten
async function getSuggestedPokemons() {
  // der try ist wie ein promise,
  // wenn es erfolgreich ist, wird der code im try block ausgeführt
  // wenn es fehlschlägt, wird der code im catch block ausgeführt
  try {
    // wir rufen die api auf, um die vorgeschlagenen pokemons zu bekommen
    // wir limitieren die anzahl der pokemons auf 20 und dem aktuellen offset
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${state.offset}`
    );

    // Parsen der JSON-Antwort
    // JSON (JavaScript Object Notation)
    // Es wird verwendet um strukturierte Daten
    // im Textformat zu übertrage,
    const data = await response.json();
    const results = data.results; // Array der Pokemon-Ergebnisse aus der API

    // Abrufen zusätzlicher Daten für jedes Pokémon
    const pokemonData = await Promise.all(
      results.map(async (result, index) => {
        const id = state.offset + index + 1; // Berechnung der Pokémon-ID basierend auf dem Offset und dem Index
        const imgIndex = id.toString().padStart(3, "0"); // Formatierung der ID als 3-stellige Zeichenkette
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgIndex}.png`; // Konstruktion der Bild-URL

        // Abrufen zusätzlicher Daten für das Pokémon
        const statResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}`);
        const statData = await statResponse.json();

        // Rückgabe der kombinierten Pokémon-Daten
        return {
          ...result, // Basisdaten aus dem initialen Abruf
          id, // Pokémon-ID
          image, // Bild-URL
          types: statData.types.map((typeInfo) => typeInfo.type.name).join(", "), // Pokémon-Typen aus den zusätzlichen Daten
        };
      })
    );

    // Aktualisieren des Zustands mit den abgerufenen Pokémon-Daten
    state.suggestedPokemons = pokemonData;
    state.currentIndex = 0;
    console.log("Suggested Pokemons:", state.suggestedPokemons); // Protokoll

    // Anzeigen des vorgeschlagenen Pokemons
    displayCurrentPokemon();
  } catch (error) {
    console.error("Fehler beim Abrufen der vorgeschlagenen Pokemons:", error); // Fehlerprotokoll
  }
}

// Funktion zum anzeigen des aktuellen pokemons
function displayCurrentPokemon() {
  const container = document.querySelector("#pokemon-container");
  container.innerHTML = ""; // leeren des containers

  // abrufen des aktuellen pokemons
  // wir überprüfen das array und holen das pokemon an der aktuellen indexposition
  const pokemon = state.suggestedPokemons[state.currentIndex];

  // erstellen der karte des aktuellen pokemons
  const card = document.createElement("div");
  card.className = "pokemon-card";

  // 1. Aufgabe, erstellt ein template string welches dem card als innerHTML
  // hinzugefügt wird.
  /*
  img -> src: pokemon.image, alt: pokemon.name
  div -> classname pokemon-name -> textContent: pokemon.name
  div -> classname pokemon-types -> textContent: pokemon.types
  */
  card.innerHTML = `
 <img src="${pokemon.image}" alt="${pokemon.name}">
 <div class="pokemon-name">${pokemon.name}</div>
 <div class="pokemon-types">${pokemon.types}</div>
 `;

  // 2. hängt die card an den container an
  container.appendChild(card);
}

// Funktion zur Behandlung des Klicks auf den "Skip"-Button
function handleSkip() {
  // pokemon-card in eine variable speichern
  const card = document.querySelector(".pokemon-card");
  card.classList.add("skip-animation"); // hinzufügen der skip-animation-klasse

  // event-listener für das ende der css transition (animation)
  card.addEventListener(
    "transitionend", // das "transitioned" event wird ausgelöst, wenn die css transition beendet ist
    () => {
      // erhöhen den currentIndex zum nächsten pokemon um 1
      state.currentIndex++;
      // wenn der currentIndex grösser ist als das suggestedPokemons.length,
      // dann erhöhen wir den offset um 20 um 20 neue pokemons von der API zu holen
      if (state.currentIndex >= state.suggestedPokemons.length) {
        // abrufen neuer pokemons, wenn das ende des arrays erreicht sit
        state.offset += 20; // erhöhen des offsets um 20
        getSuggestedPokemons(); // abrufen der neuen pokemons
      } else {
        displayCurrentPokemon(); // anzeigen des nächsten pokemons
      }
    },
    { once: true } // der listener wird nur einmal ausgelöst und dann wieder entfernt
  );
}

// 3. erstellt eine handleLike funktion für den like button
function handleLike() {
  // pokemon-card in eine variable speichern
  const card = document.querySelector(".pokemon-card");
  card.classList.add("like-animation"); // hinzufügen der skip-animation-klasse

  // event-listener für das ende der css transition (animation)
  card.addEventListener(
    "transitionend", // das "transitioned" event wird ausgelöst, wenn die css transition beendet ist
    () => {
      // erhöhen den currentIndex zum nächsten pokemon um 1
      state.currentIndex++;
      // wenn der currentIndex grösser ist als das suggestedPokemons.length,
      // dann erhöhen wir den offset um 20 um 20 neue pokemons von der API zu holen
      if (state.currentIndex >= state.suggestedPokemons.length) {
        // abrufen neuer pokemons, wenn das ende des arrays erreicht sit
        state.offset += 20; // erhöhen des offsets um 20
        getSuggestedPokemons(); // abrufen der neuen pokemons
      } else {
        displayCurrentPokemon(); // anzeigen des nächsten pokemons
      }
    },
    { once: true } // der listener wird nur einmal ausgelöst und dann wieder entfernt
  );
}

getSuggestedPokemons();

// Event-Listener für den "Skip"-Button
document.querySelector("#skip-button").addEventListener("click", handleSkip);
// Event-Listener für den "Like"-Button
document.querySelector("#like-button").addEventListener("click", handleLike);
