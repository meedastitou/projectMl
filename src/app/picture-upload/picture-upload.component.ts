import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-picture-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Upload Picture</h2>
    <form (ngSubmit)="onSubmit()" #pictureForm="ngForm">
      <input type="file" (change)="onFileSelected($event)" accept="image/*" required>
      <button type="submit" [disabled]="!selectedFile">Upload</button>
      <div id="resutl_image">{{ responseData | json }}</div>
    </form>
  `
})
export class PictureUploadComponent {
  selectedFile: File | null = null;
  responseData: any; // Property to hold the response data

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('picture', this.selectedFile);

      // Replace with your backend URL
      const uploadUrl = 'http://balancer/signature';

      fetch(uploadUrl, {
        method: 'POST',
        body: formData
      }).then(response => response.json())
        .then(data => {
          this.responseData = data; // Assign the response data to the property
          console.log(data); // Log the response data to the console
        })
        .catch(error => console.error(error));
    }
  }
}
