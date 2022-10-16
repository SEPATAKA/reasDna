import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { OptionsComponent } from './toolbox/options/options.component';
import { OptionsService } from './toolbox/options/options.service';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { StudentCardComponent } from './home/student-card/student-card.component';
import { StudentProjectComponent } from './home/student-project/student-project.component';
import { StudentsProjectsComponent } from './home/students-projects/students-projects.component';
import { HomeToolboxComponent } from './home/home-toolbox/home-toolbox.component';
import { HomeForumComponent } from './home/home-forum/home-forum.component';
import { HomeAccountComponent } from './home/home-account/home-account.component';
import { StudentHomeComponent } from './students/student-home/student-home.component';
import { StudentSupervisorComponent } from './students/student-supervisor/student-supervisor.component';
import { ManageStudentComponent } from './students/manage-student/manage-student.component';
import { InnerHeaderComponent } from './inner-header/inner-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolboxComponent,
    OptionsComponent,
    HeaderComponent,
    HomeComponent,
    HomeHeaderComponent,
    StudentCardComponent,
    StudentProjectComponent,
    StudentsProjectsComponent,
    HomeToolboxComponent,
    HomeForumComponent,
    HomeAccountComponent,
    StudentHomeComponent,
    StudentSupervisorComponent,
    ManageStudentComponent,
    InnerHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    OptionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }