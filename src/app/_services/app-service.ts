import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

restAPIcall(){
  function appAPIEmitter(appSubscriber : Subscriber<String>) {
     appSubscriber.next('Hello');
     appSubscriber.next('Welcome');
     appSubscriber.next("That's All.");
     appSubscriber.complete();
  }
  return new Observable<String>(appAPIEmitter);
}
vuCall(){
  function vuEmitter(vuSubscriber : Subscriber<String>) {
     this.restAPIcall()
     .subscribe(
       (s)=> {
         console.log('Recieved :' + s);
         vuSubscriber.next('Vu - ' + s);
         vuSubscriber.complete();
       }
     )
    }
  return new Observable<String>(vuEmitter);
}
}