export interface Room {
  availableRooms: number;
  bookedRooms: number;
  totalRooms: number;
}

export interface RoomList {
  roomNo: number;
  roomType: string;
  aminities: string;
  price: number;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
}
