import { Component } from "@angular/core";
import { RoomList } from "../room";
import { RoomService } from "../room.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-rooms-add",
  templateUrl: "./rooms-add.component.html",
  styleUrls: ["./rooms-add.component.css"],
})
export class RoomsAddComponent {
  constructor(private roomService: RoomService) {}

  successMessage: string = "";
  room: RoomList = {
    roomType: "",
    amenities: "",
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: "",
    price: 0,
    rating: 0,
  };

  addRoom(roomsForm: NgForm) {
    this.roomService.addRoom(this.room).subscribe((data) => {
      this.successMessage = "Rooms Added successfully";

      roomsForm.reset();
    });
  }
}
