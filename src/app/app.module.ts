import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { SwiperModule } from 'swiper/angular';

import { AdminviewComponent } from './components/views/admin/adminview/adminview.component';
import { LoginadminviewComponent } from './components/views/admin/loginadminview/loginadminview.component';
import { BlockuserviewComponent } from './components/views/admin/blockuserview/blockuserview.component';
import { AdmindashboardviewComponent } from './components/views/admin/admindashboardview/admindashboardview.component';
import { ReportsviewComponent } from './components/views/admin/reportsview/reportsview.component';
import { HomeviewComponent } from './components/views/users/homeview/homeview.component';
import { HireserviceviewComponent } from './components/views/users/hireserviceview/hireserviceview.component';
import { ServicesviewComponent } from './components/views/users/servicesview/servicesview.component';
import { SignupviewComponent } from './components/views/users/signupview/signupview.component';
import { LoginviewComponent } from './components/views/users/loginview/loginview.component';
import { ForgotpasswordviewComponent } from './components/views/users/forgotpasswordview/forgotpasswordview.component';
import { HiredservicesviewComponent } from './components/views/users/hiredservicesview/hiredservicesview.component';
import { ServicesrequestviewComponent } from './components/views/users/servicesrequestview/servicesrequestview.component';
import { EntrepreneurviewComponent } from './components/views/entrepreneurs/entrepreneurview/entrepreneurview.component';
import { PostserviceviewComponent } from './components/views/entrepreneurs/postserviceview/postserviceview.component';
import { MyservicesviewComponent } from './components/views/entrepreneurs/myservicesview/myservicesview.component';
import { EntrepreneurhomeviewComponent } from './components/views/entrepreneurs/entrepreneurhomeview/entrepreneurhomeview.component';
import { LandingpageComponent } from './components/views/landingpage/landingpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { TableComponent } from './components/table/table.component';
import { AdmindialogComponent } from './components/admindialog/admindialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminviewComponent,
    LoginadminviewComponent,
    BlockuserviewComponent,
    AdmindashboardviewComponent,
    ReportsviewComponent,
    HomeviewComponent,
    HireserviceviewComponent,
    ServicesviewComponent,
    SignupviewComponent,
    LoginviewComponent,
    ForgotpasswordviewComponent,
    HiredservicesviewComponent,
    ServicesrequestviewComponent,
    EntrepreneurviewComponent,
    PostserviceviewComponent,
    MyservicesviewComponent,
    EntrepreneurhomeviewComponent,
    LandingpageComponent,
    FooterComponent,
    NavbarComponent,
    SearchbarComponent,
    TableComponent,
    AdmindialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
