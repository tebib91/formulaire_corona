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
  index = 0;

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
      hasError = this.testingForm.controls[this.testingDiag[this[index]].value].valid;
      length = this.testingDiag.length;
    }
    if (!hasError) {
      this.openSnackBar();
    }
    setTimeout(() => {
      if ((this[index] < length - 1) && hasError === true) {
        this[index]++;
        this.index = this[index];
      } else {
        if (this.toDisplay !== 3 && hasError === true) {
          this.toDisplay++;
          this.index = 0;
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
    if (this[index] > 0) {
      this[index]--;
      this.index = this[index];
    } else {
      if (this.toDisplay !== 1) {
        this.toDisplay--;
        this.index = 0;
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
    if (true) {
      this.api.sendDataForm(data).subscribe(res => {
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
