import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss'],
})
export class ScrollTopComponent {
  ngOninit() {}

  scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  @ViewChild("scroll-top-button") scrolltop: any;

  constructor(private renderer: Renderer2) {}

  @HostListener("window:scroll")
  adjustHeights() {
    console.log("Into scroll");
    if (window.pageYOffset > 200) {
      this.scrolltop.class.remove("invisible");
    } else {
    }
  }
}