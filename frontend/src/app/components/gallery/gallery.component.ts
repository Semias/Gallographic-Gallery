import { Component } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, {
  SwiperOptions,
  Pagination,
  Navigation,
  // Autoplay,
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    loop: true,
  };
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  albums = [
    {
      thumbnailSrc:
        '../../assets/images/gallery/thumbnails/aalen-thumbnail.jpg',
      thumbnailDescription: 'test1',
      thumbnailAlt: 'test1',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/aalen/aalen01.jpg',
          alt: 'aalen01',
        },
        {
          src: '../../assets/images/gallery/project/aalen/aalen02.jpg',
          alt: 'aalen02',
        },
        {
          src: '../../assets/images/gallery/project/aalen/aalen03.jpg',
          alt: 'aalen03',
        },
      ],
    },
    {
      thumbnailSrc:
        '../../assets/images/gallery/thumbnails/barcelona-thumbnail.jpg',
      thumbnailDescription: 'Barcelona 2019',
      thumbnailAlt: 'test1',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim01.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim02.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim03.jpg',
          alt: 'testalt',
        },
      ],
    },
    {
      thumbnailSrc: '../../assets/images/gallery/thumbnails/gti-thumbnail.jpg',
      thumbnailDescription: 'test1',
      thumbnailAlt: 'test1',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim01.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim02.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim03.jpg',
          alt: 'testalt',
        },
      ],
    },
    {
      thumbnailSrc:
        '../../assets/images/gallery/thumbnails/mannheim-thumbnail.jpg',
      thumbnailDescription: 'test1',
      thumbnailAlt: 'test1',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim01.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim02.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim03.jpg',
          alt: 'testalt',
        },
      ],
    },
  ];
}
