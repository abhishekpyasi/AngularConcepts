import { Injectable, Inject } from "@angular/core";
import { RoomList } from "./room";
import { APP_SERVICE_CONFIG } from "../AppConfig/appconfig.service";
import { AppConfig } from "../AppConfig/appconfig.interface";

@Injectable({
  providedIn: "root",
})
export class RoomService {
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log(config.apiEndpoint);
  }

  getList() {
    return this.roomlist;
  }
  roomlist: RoomList[] = [
    {
      roomNo: 1,
      roomType: "Deluxe Room",
      aminities: "Air Conditioner, Wi-Fi, TV, Bathroom, Kitchen",
      price: 500,
      photos:
        "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=2048x2048&w=is&k=20&c=O7ISCr88F9odUKdXIpbfJ5E-_WAHSxMH67PIyZR4PAA=",
      checkinTime: new Date("11-Nov-2021"),
      checkoutTime: new Date("12-Nov-2021"),
    },
    {
      roomNo: 2,
      roomType: "Standard Room",
      aminities: "Air Conditioner,  TV, Bathroom, Kitchen",
      price: 500,
      photos:
        "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=2048x2048&w=is&k=20&c=O7ISCr88F9odUKdXIpbfJ5E-_WAHSxMH67PIyZR4PAA=",
      checkinTime: new Date("11-Nov-2021"),
      checkoutTime: new Date("12-Nov-2021"),
    },

    {
      roomNo: 3,
      roomType: "Premium Room",
      aminities:
        "Air Conditioner,  TV, Bathroom, Kitchen , Wi-Fi,Electric Kettle",
      price: 500,
      photos:
        "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=2048x2048&w=is&k=20&c=O7ISCr88F9odUKdXIpbfJ5E-_WAHSxMH67PIyZR4PAA=",
      checkinTime: new Date("11-Nov-2021"),
      checkoutTime: new Date("12-Nov-2021"),
    },
  ];
}
