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
  button = document.querySelector('app-theme-button');

  toggleTheme() {
    if (this.button?.className === 'dark-theme') {
      this.button.className = 'light-theme';
      this.body!.className = 'light-theme';
      localStorage.setItem('theme', 'light-theme');
      console.log(localStorage.getItem('theme'));
    } else if (this.button?.className === 'light-theme') {
      this.button.className = 'dark-theme';
      this.body!.className = 'dark-theme';
      localStorage.setItem('theme', 'dark-theme');
      console.log(localStorage.getItem('theme'));
    }
  }
}
