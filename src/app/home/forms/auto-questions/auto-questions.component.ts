import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MedicalExtension, Specimens, SymptomForm, Testing} from '../symptom-form';
import {ApiserviceService} from '../../../apiservice.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-auto-questions',
  templateUrl: './auto-questions.component.html',
  styleUrls: ['./auto-questions.component.scss']
})
export class AutoQuestionsComponent implements OnInit {

  symptomForm: FormGroup;
  medicalForm: FormGroup;
  testingForm: FormGroup;
  specimensForm: FormGroup;
  symptomValues = SymptomForm;
  medicalExtension = MedicalExtension;
  testingDiag = Testing;
  preExisting: number;
  specimen = Specimens;
  symptomsIndex = 0;
  medicalIndex = 0;
  testingIndex = 0;
  specimensIndex = 0;
  show = false;
  toDisplay = 1;
  done = false;

  constructor(private fb: FormBuilder, private api: ApiserviceService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    // symptom form
    const symptom = {};
    this.symptomValues.forEach(input => {
      symptom[input.value] = input.value === 'other' ? new FormControl('') :
        new FormControl('', [Validators.required]);
    });
    this.symptomForm = new FormGroup(symptom);

    // medical form
    const medical = {};
    this.medicalExtension.forEach(input => {
      if (input.type === 'group') {
        medical[input.value] = this.specifyGroup();
      } else {
        medical[input.value] = input.value === 'other' ? new FormControl('') :
          new FormControl('', [Validators.required]);
      }
    });
    this.medicalForm = this.fb.group(medical);

    // testing Form
    const testing = {};
    this.testingDiag.forEach(input => {
      if (input.type === 'group') {
        testing[input.value] = this.fb.group({
          firstValue: ['', Validators.required],
          secondValue: ['', Validators.required]
        });
      } else if (input.type === 'number') {
        testing[input.value] = input.value === 'other' ? new FormControl('') :
          new FormControl('', [Validators.required]);
      }
    });
    this.testingForm = this.fb.group(testing);

    // Specimens Form
    const specimen = {};
    this.specimen.forEach(input => {
      if (input.type === 'object') {
        specimen[input.value] = this.specimensGroup();
      } else {
        specimen[input.value] = input.value === 'other' ? new FormControl('') :
          new FormControl('', [Validators.required]);
      }
    });
    this.specimensForm = this.fb.group(specimen);
  }


  openSnackBar() {
    this.snackBar.open('veuillez remplir tous les champs', 'Close', {duration: 5000});
  }

  next() {
    let index;
    let length;
    let hasError = false;
    if (this.toDisplay === 1) {
      index = 'symptomsIndex';
      length = this.symptomValues.length;
      hasError = this.symptomForm.controls[this.symptomValues[this[index]].value].valid;
    } else if (this.toDisplay === 2) {
      index = 'medicalIndex';
      hasError = this.medicalForm.controls[this.medicalExtension[this[index]].value].valid;
      // console.log('object :', this.medicalForm.controls[this.medicalExtension[this[index]].value].valid);
      // console.log('valid :', this.medicalForm.get[this.medicalExtension[this[index]].value].valid);
      // console.log('validator :', this.medicalForm.controls[this.medicalExtension[this[index]].value]);
      length = this.medicalExtension.length;
    } else if (this.toDisplay === 3) {
      index = 'testingIndex';
      length = this.testingDiag.length;
      hasError = this.testingForm.controls[this.testingForm[this[index]].value].valid;
    }

    if (!hasError) {
      this.openSnackBar();
    }
    setTimeout(() => {
      console.log(index + ':', this[index], 'To Display :', this.toDisplay);
      console.log('hasError :', hasError);
      if ((this[index] < length - 1) && hasError === true) {
        this[index]++;
      } else {
        if (this.toDisplay !== 3 && hasError === true) {
          this.toDisplay++;
        }
      }
      if (this.toDisplay && this.testingIndex === length - 1) {
        this.done = true;
      }
    }, 200);
  }

  previous() {
    let index = 'symptomsIndex';
    if (this.toDisplay === 1) {
      index = 'symptomsIndex';
    } else if (this.toDisplay === 2) {
      index = 'medicalIndex';
    } else if (this.toDisplay === 3) {
      index = 'testingIndex';
    }
    console.log(index + ':', this[index], 'To Display :', this.toDisplay);
    if (this[index] > 0) {
      this[index]--;
    } else {
      if (this.toDisplay !== 1) {
        this.toDisplay--;
      }
    }
  }


  save() {
    const data = {
      symptom: this.symptomForm.value,
      medical: this.medicalForm.value,
      testing: this.testingForm.value,
      specimens: this.specimensForm.value
    };
    if (this.symptomForm.valid && this.medicalForm.valid && this.testingForm.valid && this.specimensForm.valid) {
      this.api.sendDataForm(data).subscribe(res => {
        console.log(res);
      });
    }
  }

  specifyGroup(): FormGroup {
    return this.fb.group({radio: ['', Validators.required], specify: ['']});
  }

  specimensGroup(): FormGroup {
    return this.fb.group({
      specimenID: ['', Validators.required],
      DateCollected: ['', Validators.required],
      labTested: false,
      labResult: ['', Validators.required],
      sentCDC: false,
      CDCResult: ['', Validators.required]
    });
  }
}
