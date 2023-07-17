import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  isLoggedIn = false;
  isAdmin = false;

  constructor() {}

  login(userName: string, password: string) {
    if (userName === "admin@gmail.com" && password === "admin") {
      this.isLoggedIn = true;
      this.isAdmin = true;

      console.log("from login servuce ", this.isLoggedIn);
      console.log("from login service for isadmin ", this.isAdmin);
    }
    if (userName === "user@gmail.com" && password === "user") {
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
  }
}
