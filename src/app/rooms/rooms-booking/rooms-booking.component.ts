import { ObserversModule } from "@angular/cdk/observers";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, map } from "rxjs";

@Component({
  selector: "app-rooms-booking",
  templateUrl: "./rooms-booking.component.html",
  styleUrls: ["./rooms-booking.component.css"],
})
export class RoomsBookingComponent implements OnInit {
  id: number = 0;
  id$!: Observable<number>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id$ = this.route.params.pipe(map((params) => params["id"]));
  }
}
