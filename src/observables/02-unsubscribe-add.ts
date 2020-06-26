import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("[Next] ", value),
  error: (error) => console.warn("[Error] ", error),
  complete: () => console.info("[Completado] "),
};

const intervalo$ = new Observable<number>((subs) => {
  let contador = 0;
  const interval = setInterval(() => {
    contador++;
    subs.next(contador);
    console.log(contador);
  }, 1000);
  setTimeout(() => {
    subs.complete();
  }, 2500);
  return () => {
    clearInterval(interval);
    console.log("Interavlo destruido");
  };
});

const subs = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs.add(subs2).add(subs3);

setTimeout(() => {
  subs.unsubscribe();
  /*     subs2.unsubscribe();
  subs3.unsubscribe(); */
  console.log("Completado timeout");
}, 6000);
