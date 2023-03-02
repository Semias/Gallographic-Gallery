import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  Directive,
  ViewEncapsulation,
} from '@angular/core';
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
  encapsulation: ViewEncapsulation.None,
})
export class GalleryComponent implements AfterViewInit, OnInit {
  constructor() {}

  ngOnInit() {}

  openModal() {
    console.log('swiper-opened');
  }

  closeModal($event: any) {
    $event.stopPropagation();
    console.log('swiper-closed');
  }

  ngAfterViewInit() {}

  //SWIPER OPTIONS
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
    // scrollbar: { draggable: true },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    loop: true,
  };
  onSwiper(swiper: any) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }

  //ALBUMS PHOTO DATA
  albums = [
    {
      thumbnailSrc:
        '../../assets/images/gallery/thumbnails/aalen-thumbnail.jpg',
      thumbnailDescription: 'Aalen 2018',
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
      thumbnailAlt: 'Barcelona Album Thumbnail',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/barcelona/barcelona01.jpg',
          alt: 'barcelona01',
        },
        {
          src: '../../assets/images/gallery/project/barcelona/barcelona02.jpg',
          alt: 'barcelona02',
        },
        {
          src: '../../assets/images/gallery/project/barcelona/barcelona03.jpg',
          alt: 'barcelona03',
        },
      ],
    },
    {
      thumbnailSrc: '../../assets/images/gallery/thumbnails/gti-thumbnail.jpg',
      thumbnailDescription: 'GTI 2020',
      thumbnailAlt: 'test1',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/gti/gti01.jpg',
          alt: 'gti01',
        },
        {
          src: '../../assets/images/gallery/project/gti/gti02.jpg',
          alt: 'gti02',
        },
        {
          src: '../../assets/images/gallery/project/gti/gti03.jpg',
          alt: 'gti03',
        },
      ],
    },
    {
      thumbnailSrc:
        '../../assets/images/gallery/thumbnails/mannheim-thumbnail.jpg',
      thumbnailDescription: 'Mannheim 2019',
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
