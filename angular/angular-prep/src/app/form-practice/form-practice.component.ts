import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-practice',
  imports: [ReactiveFormsModule],
  templateUrl: './form-practice.component.html',
  styleUrl: './form-practice.component.scss',
  standalone: true,

})

export class FormPracticeComponent {
  myControl = new FormControl('');
}
