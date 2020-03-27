import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './core/_sidebar/main/main.component';
import { BlogComponent } from './module/blog/blog.component';
import { AppPipeModule } from './app-pipes.module';
import { fakeBackendProvider } from './core/_helpers/fakebackend';
import { JwtInterceptor } from './core/_helpers/jwt.interceptop';
import { ErrorInterceptor } from './core/_helpers/error.interceptors';
import { ContactComponent } from './module/contact/contact.component';
import { ResumeComponent } from './module/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppPipeModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
