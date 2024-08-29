import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule here

@NgModule({
  declarations: [
    AppComponent
    // Other components
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Add HttpClientModule to imports
    // Other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
