import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MedicalExtension, SymptomForm, Testing} from '../symptom-form';
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
  symptomValues = SymptomForm;
  medicalExtension = MedicalExtension;
  testingDiag = Testing;
  symptomsIndex = 0;
  medicalIndex = 0;
  testingIndex = 0;
  toDisplay = 0;
  done = false;
  index = 0;
  length = 0;

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
        if (input.value === 'other') {
          testing[input.value] = this.fb.group({
            firstValue: [''],
            secondValue: ['']
          });
        } else {
          testing[input.value] = this.fb.group({
            firstValue: ['', Validators.required],
            secondValue: ['', Validators.required]
          });
        }
      } else if (input.type === 'number' || input.type === 'string') {
        testing[input.value] = input.value === 'other' ? new FormControl('') :
          new FormControl('', [Validators.required]);
      }
    });
    this.testingForm = this.fb.group(testing);
    this.length = this.symptomValues.length;
  }


  openSnackBar() {
    this.snackBar.open('veuillez remplir tous les champs', 'Close', {duration: 5000});
  }

  next() {
    let index;
    let hasError = false;
    if (this.toDisplay === 1) {
      index = 'symptomsIndex';
      this.length = this.symptomValues.length;
      hasError = this.symptomForm.controls[this.symptomValues[this[index]].value].valid;
    } else if (this.toDisplay === 2) {
      index = 'medicalIndex';
      hasError = this.medicalForm.controls[this.medicalExtension[this[index]].value].valid;
      this.length = this.medicalExtension.length;
    } else if (this.toDisplay === 3) {
      index = 'testingIndex';
      hasError = this.testingForm.controls[this.testingDiag[this[index]].value].valid;
      this.length = this.testingDiag.length;
    }
    if (!hasError) {
      this.openSnackBar();
    }
    setTimeout(() => {
      console.log(index + ':', this[index], 'To Display :', this.toDisplay);
      console.log('hasError :', hasError);
      if ((this[index] < this.length - 1) && hasError === true) {
        this[index]++;
        this.index = this[index];
      } else {
        if (this.toDisplay !== 3 && hasError === true) {
          this.toDisplay++;
          this.index = 0;
        }
      }
      if (this.toDisplay && this.testingIndex === this.length - 1) {
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
      this.index = this[index];
    } else {
      if (this.toDisplay !== 0) {
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
    };
    const validate = this.symptomForm.valid && this.medicalForm.valid && this.testingForm.valid;
    if (validate) {
      this.api.sendDataForm(data).subscribe(res => {
        console.log(res);
        this.snackBar.open('Merci pour vos réponse, formulaire ajouté avec succès', '', {duration: 5000, panelClass : 'successSnack'});
      });
    } else {
      this.snackBar.open('veuillez remplir tous les champs', 'Close', {duration: 5000});
    }
  }

  specifyGroup(): FormGroup {
    return this.fb.group({radio: ['', Validators.required], specify: ['']});
  }



  gotToTest() {
    this.toDisplay++;
  }
}
