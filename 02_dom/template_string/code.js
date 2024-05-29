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
