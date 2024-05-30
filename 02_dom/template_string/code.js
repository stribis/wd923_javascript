// Template Strings / Literals
const client = {
  name: {
    first: "Princess",
    last: "Zelda",
    middle: "of Hyrule",
  },
  purchase: {
    qty: 3,
    item: "empty jar",
    price: 50,
  },
  shop: "Beedle's Shop Ship",
};

// Output CONSOLE.LOG: Princess Zelda purchased 3 empty jars.
// 1.) console.log mit concatination
// SOLUTION:
console.log(
  client.name.first +
    " " +
    client.name.last +
    " purchased " +
    client.purchase.qty +
    " " +
    client.purchase.item +
    "s."
);
// 2.) console.log mit template string
// SOLUTION:
console.log(
  `${client.name.first} ${client.name.last} purchased ${client.purchase.qty} ${client.purchase.item}s.`
);

console.clear();

// Output WEBSEITE (kein Console.log, sondern auf derm Live Server ersichtlich) => HTML NICHT VERÄNDERN:
/*
Hello Zelda,
Thank you for purchasing 3 emtpy jar(s).

Order Details:
    Buyer: Princess Zelda, of Hyrule.
    3 x 50 = $150 of emtpy jars

Please come again! Beedle's Shop Shop
*/

/*
3.) Speichert den template string in eine Variable. Fügt in dem template strings die verschiedenen value von den properties ein.
Zudem benötigt ihr eine Funktion welches den preis berechnet.
Fügt dann am schluss die Variable mit dem template string dem body des HTML's zu (TIPP: appendChild).
*/

/*
const name = "hadrian";
const age = 30;

**** Es kommt nicht drauf an wie die Parameter in der Funktion benannt sind, sondern in welcher Reihenfolge sie übergeben werden. ****
function getUserInfo(test, testing) {
  return `Hello ${testing}, you are ${test} years old.`;
}

** Beispiel: 1 **
getUserInfo(age, name); => Hello Hadrian, you are 30 years old.

** Beispiel: 1 **
getUserInfo(name, age); => Hello 30, you are Hadrian years old.
*/

function calculatePrice(qty, price) {
  return qty * price;
}

const templateString = `
Hello ${client.name.last},

Thank you for purchasing ${client.purchase.qty} ${client.purchase.item}(s).

Order Details:
    Buyer: ${client.name.first} ${client.name.last}, ${client.name.middle}.
    ${client.purchase.qty} x ${client.purchase.price} = $${calculatePrice(
  client.purchase.qty,
  client.purchase.price
)} of ${client.purchase.item}.

Please come again! ${client.shop}
`;

const text = document.createElement("p");
text.textContent = templateString;
document.body.appendChild(text);
