import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Swiper
import { SwiperModule } from 'swiper/angular';

//Gallery
import { GalleryComponent } from '@components/gallery/gallery.component';

//SidePanel
import { ThemeButtonComponent } from '@components/theme-button/theme-button.component';
import { ScrollTopComponent } from '@components/scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ThemeButtonComponent,
    ScrollTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
