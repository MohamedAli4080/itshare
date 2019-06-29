
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeTitlePipe } from './pipe/employee-title.pipe';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { InputFormatDirective } from './directive/input-format.directive';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent,
    InputFormatDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
