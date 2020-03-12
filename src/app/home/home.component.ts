import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { nationality } from '../data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  phoneNumber = "^((\\+91-?)|0)?[0-9]{10}$";
  nationality: { num_code: string; alpha_2_code: string; alpha_3_code: string; en_short_name: string; nationality: string; }[];

  profileForm = this.fb.group({
    fullName: ['', Validators.required],
    dateBirth: ['', Validators.required],
    gender: ['', Validators.required],
    nationality: ['', Validators.required],
    phone: ['', Validators.required],
    supportPhone: ['', Validators.required],

    // address: this.fb.group({
    //   street: [''],
    //   city: [''],
    //   state: [''],
    //   zip: ['']
    // }),

    // aliases: this.fb.array([
    //   this.fb.control('')
    // ])

  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.nationality = nationality;
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
