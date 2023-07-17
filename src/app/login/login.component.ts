import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  userName: string = "";

  password: string = "";

  constructor(private router: Router, private loginService: LoginService) {}

  login() {
    this.loginService.login(this.userName, this.password);
    this.router.navigate(["/rooms"]);
  }
}
