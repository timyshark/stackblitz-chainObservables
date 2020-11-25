import { Component, VERSION } from '@angular/core';
import { AppService } from './_services/app-service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor(private appService:AppService){
    
  }
  getAppData(){
    console.log('Start getting app data');
    this.appService.restAPIcall()
     .subscribe(
       (s)=> {
         console.log('Recieved :' + s);
       }
     )
  }
  getVuData(){
      console.log('Start getting view data');
    this.appService.vuCall()
     .subscribe(
       (s)=> {
         console.log('Recieved :' + s);
       }
     )
  }
}
