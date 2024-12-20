import { info, log } from "./import.js";
import { kolorowyTekst } from "./colors.js";
import { sciezkaDoAktualnegoKatalogu } from "./fileManager.js";
import { plikiKatalogu, plikiKataloguEmitter } from "./fileManager.js";
import { danePlikowKatalogu } from "./fileManager.js";

info("info function zmiana");
log("log function");

kolorowyTekst("Kolorowy tekst");
sciezkaDoAktualnegoKatalogu();
plikiKataloguEmitter.on("daneZaładowane", (danePlikowKatalogu) => {
  console.table(danePlikowKatalogu);
});

plikiKataloguEmitter.on("błąd", (error) => {
  console.error("Wystąpił błąd:", error);
});

plikiKatalogu();

// console.log(process.argv);
// console.log(process.env); // console
