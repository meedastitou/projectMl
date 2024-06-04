import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Upload File</h2>
    <form (ngSubmit)="onSubmit()" #fileForm="ngForm">
      <input type="file" (change)="onFileSelected($event)" required>
      <button type="submit" [disabled]="!selectedFile">Upload</button>
      <div id="result_signature">{{ responseData | json }}</div>
    </form>
  `
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  responseData: any; // Property to hold the response data

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // Replace with your Flask backend URL
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
