import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, Subject, Subscriber } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppService {
  restAPIcall(): Observable<string> {
    function appAPIEmitter(appSubscriber: Subscriber<String>) {
      appSubscriber.next("Hello");
      appSubscriber.next("Welcome");
      appSubscriber.next("That's All.");
      appSubscriber.complete();
    }
    return new Observable<string>(appAPIEmitter);
  }
  vuCall(): Observable<string> {
    function vuEmitter(vuSubscriber: Subscriber<string>) {
      this.restAPIcall().subscribe(s => {
        console.log("Recieved :" + s);
        vuSubscriber.next("Vu - " + s);
        vuSubscriber.complete();
      });
    }
    return new Observable<string>(vuEmitter);
  }
}
