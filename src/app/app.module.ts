import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

//Swiper
import { SwiperModule } from 'swiper/angular';
// import { SwiperHeaderComponent } from './components/swiper-header/swiper-header.component';

//Gallery
import { GalleryComponent } from './components/gallery/gallery.component';

//SidePanel
import { ThemeButtonComponent } from './components/theme-button/theme-button.component';
import { SiteProgressComponent } from './components/site-progress/site-progress.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    AppComponent,
    // SwiperHeaderComponent,
    GalleryComponent,
    ThemeButtonComponent,
    SiteProgressComponent,
    ScrollTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}