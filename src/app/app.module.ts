import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { SwiperModule } from 'swiper/angular';
// Components
import { AdminviewComponent } from './components/views/admin/adminview/adminview.component';
import { LoginadminviewComponent } from './components/views/admin/loginadminview/loginadminview.component';
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
import { ServicecardComponent } from './components/servicecard/servicecard.component';
import { SliderComponent } from './components/slider/slider.component';
import { UserviewComponent } from './components/views/users/userview/userview.component';
import { ServicesliderComponent } from './components/serviceslider/serviceslider.component';
import { AdmindialogComponent } from './components/admindialog/admindialog.component';
import { EntrepreneursComponent } from './components/views/entrepreneurs/entrepreneurs/entrepreneurs.component';
import { EntrepreneucardComponent } from './components/entrepreneucard/entrepreneucard.component';
import { EntrepreneurdialogComponent } from './components/entrepreneurdialog/entrepreneurdialog.component';
import { SliderentrepreneurComponent } from './components/sliderentrepreneur/sliderentrepreneur.component';
import { EntrepreneurtableComponent } from './components/entrepreneurtable/entrepreneurtable.component';
import { AdmindashboardentrepreneurviewComponent } from './components/views/admin/admindashboardentrepreneurview/admindashboardentrepreneurview.component';
import { AdmindialogentrepreneurComponent } from './components/admindialogentrepreneur/admindialogentrepreneur.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import { EditservicedialogComponent } from './components/editservicedialog/editservicedialog.component';
import { RemoveservicedialogComponent } from './components/removeservicedialog/removeservicedialog.component';
import { RequestdialogComponent } from './components/requestdialog/requestdialog.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterCategoryPipe } from './pipes/filter-category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminviewComponent,
    LoginadminviewComponent,
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
    ServicecardComponent,
    SliderComponent,
    UserviewComponent,
    ServicesliderComponent,
    AdmindialogComponent,
    EntrepreneursComponent,
    EntrepreneucardComponent,
    EntrepreneurdialogComponent,
    SliderentrepreneurComponent,
    EntrepreneurtableComponent,
    AdmindashboardentrepreneurviewComponent,
    AdmindialogentrepreneurComponent,
    UsertableComponent,
    EditservicedialogComponent,
    RemoveservicedialogComponent,
    RequestdialogComponent,
    FilterPipe,
    FilterCategoryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SwiperModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
