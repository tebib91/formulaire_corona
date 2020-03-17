import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.scss']
})
export class BackOfficeComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private apiService: ApiserviceService,
  ) { }
  updateForm = this.fb.group({
    Confirmed: [''],
    hospitalized: [''],
    Discharged: [''],
    date: [''],
    quarantaine_achevee: [''],
    quarantaine: [''],
    depistage: [''],
    Recovered: ['']
  });
  ngOnInit(): void {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.updateForm.value);
    // /api/?f=stats
    this.apiService.updateback(this.updateForm.value).subscribe(value => {
      console.log('value update', value);

    });

  }
}
