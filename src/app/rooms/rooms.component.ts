import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { Room, RoomList } from "./room";
import { HeaderComponent } from "../header/header.component";
import { RoomService } from "./room.service";

@Component({
  selector: "app-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.css"],
})
export class RoomsComponent implements OnInit, AfterViewInit {
  constructor(private roomService: RoomService) {}
  ngOnInit(): void {
    this.roomList = this.roomService.getList();
  }
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }
  title = "Room List";
  text: string = "No of Rooms";
  noofRooms: number = 10;
  hideRoom: boolean = false;
  rooms: Room = {
    totalRooms: 15,
    availableRooms: 10,
    bookedRooms: 5,
  };

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  roomList: RoomList[] = [];
  toggle() {
    this.hideRoom = !this.hideRoom;
    this.title = this.title.toUpperCase();
  }

  roomSelected(room: RoomList) {
    console.log("In room component");
    console.log(room);
  }

  addRoom() {
    const room: RoomList = {
      roomNo: 4,
      roomType: "Premium Room",
      aminities:
        "Air Conditioner,  TV, Bathroom, Kitchen , Wi-Fi,Electric Kettle",
      price: 500,
      photos:
        "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=2048x2048&w=is&k=20&c=O7ISCr88F9odUKdXIpbfJ5E-_WAHSxMH67PIyZR4PAA=",
      checkinTime: new Date("11-Nov-2021"),
      checkoutTime: new Date("12-Nov-2021"),
    };
    //this.roomList.push(room);

    this.roomList = [...this.roomList, room];
  }
}
