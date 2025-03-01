import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-html-pdf',
  imports: [FormsModule],
  templateUrl: './html-pdf.component.html',
  styleUrl: './html-pdf.component.css'
})
export class HtmlPdfComponent {

  userHtml: string = '<h2>Welcome</h2><p>Enter your HTML above to preview and print as PDF.</p>';

  downloadPDF() {
    const element = document.getElementById('pdf-content');
    
    if (element) {
      html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 190;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
        pdf.save('converted.pdf');
      });
    }
  }
}
