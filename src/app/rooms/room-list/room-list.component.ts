import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChange,
  SimpleChanges,
} from "@angular/core";
import { Room, RoomList } from "../room";

@Component({
  selector: "app-room-list",
  templateUrl: "./room-list.component.html",
  styleUrls: ["./room-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomListComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  @Input() rooms: RoomList[] | null = [];
  @Input() listTitle = "";

  @Output() selectRoom = new EventEmitter<RoomList>();

  selectedRoom(room: RoomList) {
    this.selectRoom?.emit(room);

    console.log("in room list component");
  }
}
