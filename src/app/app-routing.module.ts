import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminviewComponent } from './components/views/admin/adminview/adminview.component';
import { LoginadminviewComponent } from './components/views/admin/loginadminview/loginadminview.component';
import { EntrepreneurhomeviewComponent } from './components/views/entrepreneurs/entrepreneurhomeview/entrepreneurhomeview.component';
import { EntrepreneurviewComponent } from './components/views/entrepreneurs/entrepreneurview/entrepreneurview.component';
import { MyservicesviewComponent } from './components/views/entrepreneurs/myservicesview/myservicesview.component';
import { PostserviceviewComponent } from './components/views/entrepreneurs/postserviceview/postserviceview.component';
import { LandingpageComponent } from './components/views/landingpage/landingpage.component';
import { ForgotpasswordviewComponent } from './components/views/users/forgotpasswordview/forgotpasswordview.component';
import { HiredservicesviewComponent } from './components/views/users/hiredservicesview/hiredservicesview.component';
import { HireserviceviewComponent } from './components/views/users/hireserviceview/hireserviceview.component';
import { HomeviewComponent } from './components/views/users/homeview/homeview.component';
import { LoginviewComponent } from './components/views/users/loginview/loginview.component';
import { ServicesrequestviewComponent } from './components/views/users/servicesrequestview/servicesrequestview.component';
import { ServicesviewComponent } from './components/views/users/servicesview/servicesview.component';
import { SignupviewComponent } from './components/views/users/signupview/signupview.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'login', component: LoginviewComponent },
  { path: 'signup', component: SignupviewComponent },
  { path: 'forgotpassword', component: ForgotpasswordviewComponent },
  {
    path: 'home',
    component: HomeviewComponent,
    children: [
      { path: 'hireservice', component: HireserviceviewComponent },
      { path: 'services', component: ServicesviewComponent },
      { path: 'hiredservices', component: HiredservicesviewComponent },
      { path: 'servicesrequest', component: ServicesrequestviewComponent },
      {
        path: 'entrepreneur',
        component: EntrepreneurviewComponent,
        children: [
          {
            path: 'home',
            component: EntrepreneurhomeviewComponent,
            children: [
              { path: 'postservice', component: PostserviceviewComponent },
              { path: 'myservices', component: MyservicesviewComponent },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'admin',
    component: LoginadminviewComponent,
    children: [{ path: 'home', component: AdminviewComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
