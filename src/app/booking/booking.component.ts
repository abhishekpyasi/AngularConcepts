import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.css"],
})
export class BookingComponent {
  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get("guests") as FormArray;
  }
  addGuests() {
    this.guests.push(this.fb.group({ guestName: [""], age: [""] }));
  }

  addbooking() {}
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: "2", disabled: true }),
      guestEmail: [""],
      checkinDate: [""],
      checkoutDate: [""],
      bookingStatus: [""],
      bookingAmount: [""],
      bookingDate: [""],
      mobileNumber: [""],
      guestName: [""],
      guestCount: [],

      guestAddress: this.fb.group({
        addressLine1: [""],
        addressLine2: [""],
        guestCity: [""],
        guestState: [""],
        guestCountry: [],
        guestZipCode: [""],
      }),
      guests: this.fb.array([this.fb.group({ guestName: [""], age: [""] })]),
    });
  }
}
export class Booking {
  roomId!: string;
  guestEmail!: string;
  checkinDate!: Date;
  checkoutDate!: Date;
  bookingStatus!: string;
  bookingAmount!: number;
  bookingDate!: Date;
  mobileNumber!: string;
  guestName!: string;
  guestAddress!: string;
  guestCity!: string;
  guestState!: string;
  guestCountry!: string;
  guestZipCode!: string;
  guestCount!: number;
  // guestList!: Guest[];
}
