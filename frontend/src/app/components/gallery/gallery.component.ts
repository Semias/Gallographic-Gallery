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
        '../../assets/images/gallery/thumbnails/summer2020-thumbnail.jpg',
      thumbnailDescription: 'Summer | 2020',
      thumbnailAlt: 'test1',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/summer2020/summer202001.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/summer2020/summer202002.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/summer2020/summer202003.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/summer2020/summer202004.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/summer2020/summer202005.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/summer2020/summer202006.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/summer2020/summer202007.jpg',
          alt: 'testalt',
        },
      ],
    },

    {
      thumbnailSrc:
        '../../assets/images/gallery/thumbnails/autumm2019-thumbnail.jpg',
      thumbnailDescription: 'Autumm | 2019',
      thumbnailAlt: 'test1',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201901.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201902.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201903.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201904.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201905.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201906.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201907.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201908.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201909.jpg',
          alt: 'testalt',
        },
      ],
    },
    {
      thumbnailSrc:
        '../../assets/images/gallery/thumbnails/berchtesgaden-thumbnail.jpg',
      thumbnailDescription: 'Berchtesgaden | 2019',
      thumbnailAlt: 'test1',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/berchtesgaden/berchtesgaden01.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/berchtesgaden/berchtesgaden02.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/berchtesgaden/berchtesgaden03.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/berchtesgaden/berchtesgaden04.jpg',
          alt: 'testalt',
        },
      ],
    },

    {
      thumbnailSrc:
        '../../assets/images/gallery/thumbnails/mannheim-thumbnail.jpg',
      thumbnailDescription: 'Mannheim | 2019',
      thumbnailAlt: 'Album - Mannheim 2019',
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
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim04.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim05.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim06.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim07.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim08.jpg',
          alt: 'testalt',
        },
      ],
    },
    {
      thumbnailSrc:
        '../../assets/images/gallery/thumbnails/heidelberg-thumbnail.jpg',
      thumbnailDescription: 'Heidelberg | 2019',
      thumbnailAlt: 'Album - Heidelberg 2019',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/heidelberg/heidelberg01.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/heidelberg/heidelberg02.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/heidelberg/heidelberg03.jpg',
          alt: 'testalt',
        },
        {
          src: '../../assets/images/gallery/project/heidelberg/heidelberg04.jpg',
          alt: 'testalt',
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
  ];
}
