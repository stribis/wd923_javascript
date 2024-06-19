const scores = [10, 30, 15, 25, 50, 40, 5, 20, 10, 30, 15, 25, 50, 40, 5, 20];

/* FILTER METHODE */
// Die Filter methode erstellt ein neues array mit allen elementen,
// die den filterbedingungen entsprechen
// es feuert eine callback funktion für jedes element im array
// in diesem Beispuel gibt die callback funktion immer nur ein true oder false züruck
// wenn true, dann wird das element im neuen array gespeichert
// wenn flase, dann wird das element ignoriert
// das heisst, dass wie nie nach flase filtern sollen

// wir filtern alle scores, die grösser als 20 und kleiner als 40 sind
const filteredScore = scores.filter((score) => score > 20 && score < 40);
console.log(filteredScore);

console.clear();

/* FILTER METHODE MIT OBJEKTEN */
const users = [
  { name: "shaun", premium: true },
  { name: "yoshi", premium: false },
  { name: "mario", premium: false },
  { name: "chun-li", premium: true },
  { name: "luigi", premium: true },
  { name: "toad", premium: false },
  { name: "bowser", premium: true },
];

// wir filtern alle user, die ein premium-abonnement haben
// da wir immer nach true filter, wird das neue array
// nur die user beinhalten, die ein premium-abonnement haben
const premiumUsers = users.filter((user) => user.premium);
console.log(premiumUsers);

console.clear();

// Aufgabe 1: filteret nach scores die kleiner gleich 15 sind
const scoreLessThan15 = scores.filter((score) => score <= 15);
console.log(scoreLessThan15);

// Aufgabe 2: filteret nach den Benutzern, die nicht premium sind
const nonPremiumUsers = users.filter((user) => !user.premium);
console.log(nonPremiumUsers);

// Aufgabe 3: filteret nach den Benutzern, die nicht premium sind und deren Namen länger als 4 Buchstaben sind
const nonPremiumUsersLongNames = users.filter((user) => !user.premium && user.name.length > 4);
console.log(nonPremiumUsersLongNames);

console.clear();

/* MAP METHODE */
// Die map methode erstellt immer ein neues array
// es feuert eine callback funktion für jedes element im array
// die callback funktion gibt immer ein neues element zurück
// das neue element wird im neuen array gespeichert
// die map methoder verändert dementsprechend das originale array nicht

const salePrices = filteredScore.map((score) => score / 2);
console.log(salePrices);

console.clear();

const products = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shells", price: 50 },
  { name: "blue shells", price: 60 },
  { name: "star", price: 70 },
  { name: "bullet bill", price: 80 },
  { name: "lightning bolt", price: 90 },
  { name: "blooper", price: 100 },
];

// erstellen eines neuen array welche die preise der Produkte halbiert
// sofern die preise der Produkte grösser als 30 sind
// dann gib diese Produkte zurück
const saleProducts = products.map((product) => {
  if (product.price > 30) {
    // wir erstellen hier ein neues objekt im neuen array
    return { name: product.name, price: product.price / 2 };
  } else {
    // wir geben hier das originale objekt zurück
    return product;
  }
});
console.log(saleProducts);

console.clear();

// Aufgabe: Gegeben ist ein Array von Objekten,
// die Studenten und ihre Noten repräsentieren
// Erstelle ein neues Array, das nur die Namen der Studenten enthält,
// deren Noten größer oder gleich 50 sind (map-methode).
// das neue Array sollte auch nur die Namen beinhalten,
// die nicht null sind (filter-methode)
const students = [
  { name: "Alice", grade: 45 },
  { name: "Bob", grade: 85 },
  { name: "Charlie", grade: 50 },
  { name: "Dave", grade: 30 },
  { name: null, grade: 100 },
  { name: "Eve", grade: 95 },
  { name: "Frank", grade: 20 },
  { name: "Grace", grade: 55 },
  { name: "Heidi", grade: 65 },
  { name: "Ivan", grade: 75 },
  { name: null, grade: 75 },
  { name: "Judy", grade: 40 },
];

const passedStudents = students
  .map((student) => {
    if (student.grade >= 50) {
      return { name: student.name, grade: student.grade };
    }
  })
  .filter((student) => student !== undefined && student.name !== null);

console.log(passedStudents);

console.clear();

// const shortcut = students.filter((student) => student.grade >= 50 && student.name !== null);
// console.log(shortcut);

/*
## map
- erzeugt ein neues Array
- es gibt das neue array zurück
- verändert das urpsrüngliche array nicht
- hauptzweck transofmation von daten und in eine neue variable speichern

## forEach
- forEach gibt kein neues array züruck, sondern ein undefiend
- verändert das ursprüngliche array nicht
- Hauptzweck ist eine iteration durch ein array, ohne die daten dann weiter zu verarbeiten
*/

// forEach kopiert kein Array
const originalArray = [1, 2, 3, 4, 5];
const resultArray = originalArray.forEach((element) => element * 2);

console.log(originalArray); // bleibt unverändert
console.log(resultArray); // undefined

// map kopiert ein Array
const originalArrayMap = [1, 2, 3, 4, 5];
const resultArrayMap = originalArrayMap.map((element) => element * 2);

console.log(originalArrayMap); // bleibt unverändert
console.log(resultArrayMap); // [2, 4, 6, 8, 10]

console.clear();

/* REST PARAMETER */
// Der Rest-Parameter erlaubt es uns,
// eine unbestimmte Anzahl von Argumenten als Array zu erfassen
// Dies ist vor allem nützlich, wenn wir nicht wissen,
// wie viele Argumente wir erhalten werden
// Der Rest-Paramenter sammel alle übrigen argumente in einem array
// Der Rest-Parameter mus immer bei der letzten Stelle sein

/*
SYNTAX
function f(a,b, ...rest){
    code to execute
}
*/

// Beispiel
// wir wissen, dass wir immer mindestens zwei Argumente erhalten
function sum(a, b, ...numbers) {
  // wir initialisieren die summe von a und b
  let total = a + b;
  // wir iterieren durch alle restlichen argumente
  for (let num of numbers) {
    // addition der restlichen argumente
    total += num;
  }
  return total;
}

console.log(sum(1, 2)); // Ausgabe: 3
console.log(sum(1, 2, 3, 4, 5)); // Ausgabe: 15
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Ausgabe: 55

console.clear();

/* SPREAD OPERATOR */
// Der Spread-Operator erlaubt es uns,
// ein Array oder Objekt in einzelne Elemente zu zerlegen
// Der Spread-Operator wird verwendet um
// ein Array oder Objekt zu "entpacken"
// Dies ist nützlich wenn wir ein Array oder ein Objekt,
// in einem anderen Array oder Objekt verwenden wollen

/*
SYNTAX
const newArray = [...oldArray];
const newObject = {...oldObject};
*/

// Beispiel 1, kombinieren von Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];
console.log(combinedArray);

// Beispiel 2, kopieren von Arrays
const originalArraySpread = [1, 2, 3];
const copiedArray = [...originalArraySpread];
copiedArray.push(4);

console.log(copiedArray);

// Beispiel 3, kombinieren von Objekten
const object1 = { name: "Shaun", age: 30 };
const object2 = { job: "instructor", country: "USA" };

const combinedObject = { ...object1, ...object2 };
console.log(combinedObject);

console.clear();

// Beispiel 4
const people = [
  {
    name: "max",
    age: 26,
    job: "developer",
    country: "germany",
  },
];

// wir sind in der lange das komibierte objekt in das array zu pushen
// wir können das mit dem spread operator machen
const newPerson = [...people, combinedObject];

console.log(newPerson);
