import { Component, VERSION } from "@angular/core";
import { AppService } from "./_services/app-service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  appMessages: string[] = new Array();
  vuMessages: string[] = new Array();
  constructor(private appService: AppService) {}
  getAppData() {
    console.log("Start getting app data");
    this.appService.restAPIcall().subscribe((s: string) => {
      this.appMessages.push(s);
      console.log("Recieved :" + s);
    });
  }
  getVuData() {
    console.log("Start getting view data");
    this.appService.vuCall().subscribe((s: string) => {
      this.vuMessages.push(s);
      console.log("Recieved :" + s);
    });
  }
}
