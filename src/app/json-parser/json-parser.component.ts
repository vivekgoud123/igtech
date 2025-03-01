import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-json-parser',
  imports: [FormsModule,NgIf,RouterLink],
  templateUrl: './json-parser.component.html',
  styleUrl: './json-parser.component.css'
})
export class JsonParserComponent {
  jsonInput: string = '';
  formattedJson: string | null = null;
  errorMessage: string | null = null;



  formatJson() {
    try {
      this.formattedJson = JSON.stringify(JSON.parse(this.jsonInput), null, 2);
      this.errorMessage = null;
    } catch (error) {
      this.errorMessage = 'Invalid JSON format!';
      this.formattedJson = null;
    }
  }

  clearJson() {
    this.jsonInput = '';
    this.formattedJson = null;
    this.errorMessage = null;
  }











}
