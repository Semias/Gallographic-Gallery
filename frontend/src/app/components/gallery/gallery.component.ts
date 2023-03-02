import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  albums = [
    {
      thumbnailSrc:
        '../../assets/images/gallery/thumbnails/aalen-thumbnail.jpg',
      thumbnailDescription: 'test1',
      thumbnailAlt: 'test1',
      albumSliderImages: [
        '../../assets/images/gallery/thumbnails/aalen-thumbnail.jpg',
        '../../assets/images/gallery/thumbnails/aalen-thumbnail.jpg',
      ],
    },
  ];

  thumbnails = [
    {
      src: '../../assets/images/gallery/thumbnails/aalen-thumbnail.jpg',
      alt: 'Header picture number 1',
      description: 'Barcelona 2019',
    },
    {
      src: '../../assets/images/gallery/thumbnails/barcelona-thumbnail.jpg',
      alt: 'Header picture number 2',
      description: 'Barcelona 2019',
    },
    {
      src: '../../assets/images/gallery/thumbnails/mannheim-thumbnail.jpg',
      alt: 'Header picture number 3',
      description: 'Barcelona 2019',
    },
    {
      src: '../../assets/images/gallery/thumbnails/gti-thumbnail.jpg',
      alt: 'Header picture number 3',
      description: 'Barcelona 2019',
    },
  ];
}
