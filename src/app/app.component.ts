import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { RoomsComponent } from "./rooms/rooms.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // ngAfterViewChecked(): void {
  //   this.vcr.createComponent(RoomsComponent);
  // }
  title = "compComm";

  @ViewChild("user", { read: ViewContainerRef, static: true })
  vcr!: ViewContainerRef;
}
