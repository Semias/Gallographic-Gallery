import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Gallographic';

  ngOnInit() {
    this.checkAndSetSystemTheme();
  }

  checkAndSetSystemTheme = () => {
    if (localStorage.getItem('theme') === 'dark-theme') {
      document.querySelector('body')?.classList.add('dark-theme');
      document.querySelector('app-theme-button')?.classList.add('dark-theme');
    } else if (localStorage.getItem('theme') === 'light-theme') {
      document.querySelector('body')?.classList.add('light-theme');
      document.querySelector('app-theme-button')?.classList.add('light-theme');
    } else if (
      !localStorage.getItem('theme') &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.querySelector('body')?.classList.add('dark-theme');
      document.querySelector('app-theme-button')?.classList.add('dark-theme');
    } else if (
      !localStorage.getItem('theme') &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      document.querySelector('body')?.classList.add('light-theme');
      document.querySelector('app-theme-button')?.classList.add('light-theme');
    }
  };
}
