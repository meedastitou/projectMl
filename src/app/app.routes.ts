import { Routes } from '@angular/router';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { PictureUploadComponent } from './picture-upload/picture-upload.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

export const routes: Routes = [
  { path: 'picture-upload', component: PictureUploadComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: '', redirectTo: '/picture-upload', pathMatch: 'full' },
];
