import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormPracticeComponent } from './form-practice/form-practice.component'; // Adjust the path if needed

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormPracticeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-prep';
}
