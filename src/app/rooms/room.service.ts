import { Injectable, Inject } from "@angular/core";
import { Room, RoomList } from "./room";
import { APP_SERVICE_CONFIG } from "../AppConfig/appconfig.service";
import { AppConfig } from "../AppConfig/appconfig.interface";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { shareReplay } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RoomService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(config.apiEndpoint);
  }

  headers = new HttpHeaders({ token: "125455GHH552" });
  getRoom$ = this.http.get<RoomList[]>("/api/rooms").pipe(shareReplay(1));

  getList() {
    console.log(this.config.apiEndpoint);

    return this.http.get<RoomList[]>("/api/rooms");
  }

  addRoom(room: any) {
    return this.http.post<RoomList[]>("api/rooms", room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }
  roomlist: RoomList[] = [];

  delete(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/photos",
      { reportProgress: true }
    );

    return this.http.request(request);
  }

  //   {
  //     roomNo: "1",
  //     roomType: "Deluxe Room",
  //     aminities: "Air Conditioner, Wi-Fi, TV, Bathroom, Kitchen",
  //     price: 500,
  //     photos:
  //       "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=2048x2048&w=is&k=20&c=O7ISCr88F9odUKdXIpbfJ5E-_WAHSxMH67PIyZR4PAA=",
  //     checkinTime: new Date("11-Nov-2021"),
  //     checkoutTime: new Date("12-Nov-2021"),
  //   },
  //   {
  //     roomNo: "2",
  //     roomType: "Standard Room",
  //     aminities: "Air Conditioner,  TV, Bathroom, Kitchen",
  //     price: 500,
  //     photos:
  //       "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=2048x2048&w=is&k=20&c=O7ISCr88F9odUKdXIpbfJ5E-_WAHSxMH67PIyZR4PAA=",
  //     checkinTime: new Date("11-Nov-2021"),
  //     checkoutTime: new Date("12-Nov-2021"),
  //   },

  //   {
  //     roomNo: "3",
  //     roomType: "Premium Room",
  //     aminities:
  //       "Air Conditioner,  TV, Bathroom, Kitchen , Wi-Fi,Electric Kettle",
  //     price: 500,
  //     photos:
  //       "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=2048x2048&w=is&k=20&c=O7ISCr88F9odUKdXIpbfJ5E-_WAHSxMH67PIyZR4PAA=",
  //     checkinTime: new Date("11-Nov-2021"),
  //     checkoutTime: new Date("12-Nov-2021"),
  //   },
  // ];
}
