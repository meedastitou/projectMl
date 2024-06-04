import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/picture-upload">Picture Upload</a>
      <a routerLink="/file-upload">File Upload</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
