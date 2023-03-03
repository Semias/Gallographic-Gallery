import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewEncapsulation,
  ViewChildren,
} from '@angular/core';
// @ts-ignore
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
  @ViewChildren('galleryProject') galleryProject!: QueryList<ElementRef>;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit(): void {}

  openModal($event: any) {
    this.renderer.addClass($event, 'active');
    console.log('swiper-opened');
  }

  closeModal(el: any, $event: any) {
    $event.stopPropagation();
    this.renderer.removeClass(el, 'active');
    console.log('swiper-closed');
  }

  //SWIPER OPTIONS
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: {
      clickable: true,
      // el: '.swiper-pagination',
      // type: 'bullets',
    },
    // scrollbar: { draggable: true },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    loop: true,
    speed: 500,
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
      thumbnailDescription: 'Aalen | 2018',
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
      thumbnailDescription: 'Barcelona | 2019',
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
      thumbnailDescription: 'GTI | 2020',
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
      thumbnailDescription: 'Mannheim | 2019',
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
