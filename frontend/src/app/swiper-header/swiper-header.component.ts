import { Component } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-swiper-header',
  templateUrl: './swiper-header.component.html',
  styleUrls: ['./swiper-header.component.scss'],
})
export class SwiperHeaderComponent {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  headerImages = [
    '../../assets/images/gallery/aalen/aalen01.jpg',
    '../../assets/images/gallery/aalen/aalen02.jpg',
    '../../assets/images/gallery/aalen/aalen03.jpg',
  ];
}
