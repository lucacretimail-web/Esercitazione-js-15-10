/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

const { split } = require("animejs");

/* ESERCIZIO 1 — area
   Funzione area(l1, l2) che ritorna l1 * l2.
   Stampa area(3, 4).
*/

function area (l1, l2) {
return l1*l2; 
}
console.log ("area(3, 4):", area(3, 4)); 

/* ESERCIZIO 2 — sommaPazza
   Funzione sommaPazza(a, b): ritorna a + b.
   Se a === b: ritorna (a + b) * 3.
   Prova con (2, 3) e (4, 4).
*/

function sommaPazza(a,b) {
   if (a===b) {
      return(a+b)*3
   }
   return a+b
}
console.log ("sommaPazza(2, 3):", sommaPazza(2, 3));
console.log("sommaPazza(4, 4):", sommaPazza(4, 4));

/* ESERCIZIO 3 — distanzaDa19
   Funzione distanzaDa19(n): ritorna Math.abs(n - 19).
   Se n > 19: ritorna distanza * 3.
   Prova con 5 e 25.
*/

function distanzaDa19(n) {
const distanza = Math.abs(n - 19);
if (n>19) 
   return distanza*3
}
console.log("Esercizio 3 — distanzaDa19(5):", distanzaDa19(5));
console.log("Esercizio 3 — distanzaDa19(25):", distanzaDa19(25));

/* ESERCIZIO 4 — dentroIntervallo
   Funzione dentroIntervallo(n):
   true se n è tra 20 e 100 (compresi) oppure è esattamente 400.
*/

function dentroIntervallo(n) {
   if (n>=20 && n<=100) return true n===400;
}
console.log("dentroIntervallo(50):", dentroIntervallo(50));
console.log("dentroIntervallo(150):", dentroIntervallo(150));
console.log("dentroIntervallo(400):", dentroIntervallo(400));

/* ESERCIZIO 5 — epify
   Funzione epify(testo): aggiunge "EPICODE " davanti.
   Se il testo comincia già con "EPICODE", lo lascia invariato.
   Usa startsWith.
*/

function epify(testo) {
   return testo.startsWith("EPICODE") ? testo : "EPICODE " + testo;
}
console.log("epify('EPICODE'):", epify("EPICODE"));

/* ESERCIZIO 6 — divisibilePer3o7
   Funzione divisibilePer3o7(n): true se n positivo E divisibile per 3 O per 7.
*/

function divisibilePer3o7(n) {
   return n>0 && (n%3===0 || n%7===0);
}
console.log("divisibilePer3o7(9):", divisibilePer3o7(9));
console.log("divisibilePer3o7(14):", divisibilePer3o7(14));
console.log("divisibilePer3o7(-21):", divisibilePer3o7(-21));

/* ESERCIZIO 7 — invertiStringa
   Funzione invertiStringa(testo): ritorna la stringa invertita.
   Vincolo: niente .reverse() di array.
   Suggerimento: split("") + for al contrario + join("").
*/

function invertiStringa(testo) {
   split ("")
}

/* ESERCIZIO 8 — inizialiMaiuscole
   Funzione inizialiMaiuscole(frase): metti in maiuscolo la prima lettera di ogni parola.
   "ciao mondo" → "Ciao Mondo".
   Suggerimento: split(" ") + for + slice(0,1).toUpperCase() + slice(1) + join(" ").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9 — togliPrimoEUltimo
   Funzione togliPrimoEUltimo(testo): rimuovi primo e ultimo carattere.
   Usa slice. Prova con "EPICODE".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10 — dammiCasuali
   Funzione dammiCasuali(n): ritorna un array di n numeri interi casuali tra 0 e 10 (inclusi).
   Usa Math.random e Math.floor.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* --EXTRA-- ESERCIZIO 11 — etaInGiorni
   Funzione etaInGiorni(annoNascita, meseNascita, giornoNascita).
   Ritorna l'età in giorni rispetto a oggi.
   - new Date() per oggi
   - new Date(anno, mese - 1, giorno) per la nascita (mese 0-based!)
   - oggi - nascita = millisecondi
   - dividi per 1000 * 60 * 60 * 24 e Math.floor per i giorni interi
   Stampa: "Hai X giorni!"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
