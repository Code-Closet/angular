import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViqCarouselComponent } from './viq-carousel/viq-carousel.component';
import { ViqCarouselService } from './viq-carousel/viq-carousel.service';

@NgModule({
  declarations: [
    AppComponent,
    ViqCarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ViqCarouselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
