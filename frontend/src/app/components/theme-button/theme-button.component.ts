import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss'],
})
export class ThemeButtonComponent implements OnInit {
  ngOnInit() {}

  body = document.querySelector('body');
  themeSwitcher = document.querySelector('app-theme-button');

  toggleTheme() {
    if (this.themeSwitcher?.className === 'dark-theme') {
      this.themeSwitcher.className = 'light-theme';
      this.body!.className = 'light-theme';
      this.body!.setAttribute('color-scheme', 'light');
      localStorage.setItem('theme', 'light-theme');
      console.log(localStorage.getItem('theme'));
    } else if (this.themeSwitcher?.className === 'light-theme') {
      this.themeSwitcher.className = 'dark-theme';
      this.body!.className = 'dark-theme';
      this.body!.setAttribute('color-scheme', 'dark');
      localStorage.setItem('theme', 'dark-theme');
      console.log(localStorage.getItem('theme'));
    }
  }
}
