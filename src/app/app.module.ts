import { APP_INITIALIZER, NgModule } from "@angular/core";
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

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { RequestInterceptor } from "./request.interceptor";
import { InitService } from "./init.service";
import { AppNavComponent } from "./app-nav/app-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { NotfoundComponent } from "./notfound/notfound.component";
import { RoomsBookingComponent } from "./rooms/rooms-booking/rooms-booking.component";
import { RoomsAddComponent } from "./rooms/rooms-add/rooms-add.component";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { HoverDirective } from "./hover.directive";
import { EmailvalidatorDirective } from "./emailValidator/emailvalidator.directive";
// import { RoomsModule } from "./rooms/rooms.module";

function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,

    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotfoundComponent,
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective,
  ],
  imports: [
    BrowserModule,
    // RoomsModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
  ],
  providers: [
    { provide: APP_SERVICE_CONFIG, useValue: App_Config },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      multi: true,
      deps: [InitService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
