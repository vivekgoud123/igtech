import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JsonParserComponent } from './json-parser/json-parser.component';
import { HtmlPdfComponent } from './html-pdf/html-pdf.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect empty path to /home
    { path: 'home', component: HomeComponent }, // Home route
    { path: 'json-parser', component: JsonParserComponent }, // Home route
    { path: 'html-pdf', component: HtmlPdfComponent }, // Home route
    { path: '**', redirectTo: 'home' },



];
