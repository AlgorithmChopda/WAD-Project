import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './MyComponent/home/home.component';
import { SearchPageComponent } from './MyComponent/search-page/search-page.component';
import { HotelComponent } from './MyComponent/hotel/hotel.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, SearchPageComponent, HotelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
