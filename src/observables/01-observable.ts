import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("[Next] ", value),
  error: (error) => console.log("[Error] ", error),
  complete: () => console.log("[Completado]"),
};

//const obs$ = Observable.create()
const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");
  subs.next("Hola");
  subs.next("Mundo");
  subs.complete();
});

obs$.subscribe(observer);
/* obs$.subscribe(
  (valor) => console.log("next: ", valor),
  (error) => console.error("error: ", error),
  () => console.info("Completado")
); */
