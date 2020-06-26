import { of, range, asyncScheduler } from "rxjs";

//const src$ = of(1, 2, 3, 4, 5, 6);
// Desde valor inicial hasta x emiciones
const src$ = range(1, 6, asyncScheduler);

console.log("Inicio");
src$.subscribe(console.log);
console.log("Fin");
