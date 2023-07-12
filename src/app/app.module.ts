import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RoomsComponent } from "./rooms/rooms.component";
import { RoomListComponent } from "./rooms/room-list/room-list.component";
import { HeaderComponent } from "./header/header.component";
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";
import { APP_SERVICE_CONFIG, App_Config } from "./AppConfig/appconfig.service";

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [{ provide: APP_SERVICE_CONFIG, useValue: App_Config }],
  bootstrap: [AppComponent],
})
export class AppModule {}
