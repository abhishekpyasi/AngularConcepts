import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
  Inject,
  OnInit,
} from "@angular/core";
import { RoomsComponent } from "./rooms/rooms.component";
import { localStorageToken } from "./localstorage.token";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  // ngAfterViewChecked(): void {
  //   this.vcr.createComponent(RoomsComponent);
  // }
  title = "compComm";

  constructor(@Inject(localStorageToken) private localStorage: Storage) {}
  ngOnInit(): void {
    this.localStorage.setItem("name", "Hilton Hotel");
  }

  @ViewChild("user", { read: ViewContainerRef, static: true })
  vcr!: ViewContainerRef;
}
