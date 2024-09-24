import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
// import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-enquiries',
  standalone: true,
  imports: [StepperModule,ButtonModule,SelectButtonModule, FormsModule,InputTextModule],
  templateUrl: './enquiries.component.html',
  styleUrl: './enquiries.component.css'
})
export class EnquiriesComponent {
  stateOptions: any[] = [{ label: 'Person', value: 'person' },{ label: 'Company', value: 'company' }];

  value: string = 'off';

}
