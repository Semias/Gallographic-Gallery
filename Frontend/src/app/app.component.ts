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
    let themeSwitcher = document.querySelector('app-theme-button');
    let body = document.querySelector('body');
    let matchDark = window.matchMedia('(prefers-color-scheme: dark)');
    let matchLight = window.matchMedia('(prefers-color-scheme: light)');

    if (localStorage.getItem('theme') === 'dark-theme') {
      themeSwitcher?.classList.add('dark-theme');
      body?.setAttribute('color-scheme', 'dark');
    } else if (localStorage.getItem('theme') === 'light-theme') {
      themeSwitcher?.classList.add('light-theme');
      body?.setAttribute('color-scheme', 'light');
    } else if (!localStorage.getItem('theme') && matchDark.matches) {
      themeSwitcher?.classList.add('dark-theme');
      body?.setAttribute('color-scheme', 'dark');
    } else if (!localStorage.getItem('theme') && matchLight.matches) {
      themeSwitcher?.classList.add('light-theme');
      body?.setAttribute('color-scheme', 'light');
    }
  };
}
