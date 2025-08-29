import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppLanginPage } from './components/app-langin-page/app-langin-page';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AppLanginPage

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('retrorepair');
}
