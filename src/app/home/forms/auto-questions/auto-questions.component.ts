import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MedicalExtension, Specimens, SymptomForm, Testing} from '../symptom-form';
import {ApiserviceService} from '../../../apiservice.service';

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

  constructor(private fb: FormBuilder, private api: ApiserviceService) {
  }

  ngOnInit() {
    // symptom form
    const symptom = {};
    this.symptomValues.forEach(input => {
      symptom[input.value] = new FormControl('', [Validators.required]);
    });
    this.symptomForm = new FormGroup(symptom);

    // symptom form
    const medical = {};
    this.medicalExtension.forEach(input => {
      if (input.type === 'group') {
        medical[input.value] = this.specifyGroup();
      } else {
        medical[input.value] = new FormControl('', [Validators.required]);
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
        testing[input.value] = new FormControl('', [Validators.required]);
      }
    });
    this.testingForm = this.fb.group(testing);

    // Specimens Form
    const specimen = {};
    this.specimen.forEach(input => {
      if (input.type === 'object') {
        specimen[input.value] = this.specimensGroup();
      } else {
        specimen[input.value] = new FormControl('', [Validators.required]);
      }
    });
    this.specimensForm = this.fb.group(specimen);
    this.changeIndexes();
  }

  symptomChanges() {
    this.symptomForm.valueChanges.subscribe(value => {
      const valid = this.symptomForm.controls[this.symptomValues[this.symptomsIndex].value].valid;
      if (valid && this.symptomValues[this.symptomsIndex].value !== 'other') {
        setTimeout(() => {
          this.symptomsIndex++;
        }, 200);
      }
    });
  }

  medicalChanges() {
    this.medicalForm.valueChanges.subscribe(value => {
      const valid = this.medicalForm.controls[this.medicalExtension[this.medicalIndex].value].valid;
      const blur = value[this.medicalExtension[this.medicalIndex].value].blur;
      if (valid && (blur === undefined || blur === true)) {
        setTimeout(() => {
          this.medicalIndex++;
        }, 200);
      }
    });
  }

  testingChanges() {
    this.testingForm.valueChanges.subscribe(value => {
      const valid = this.testingForm.controls[this.testingDiag[this.testingIndex].value].valid;
      if (valid && this.testingDiag[this.testingIndex].value !== 'other') {
        setTimeout(() => {
          this.testingIndex++;
        }, 200);
      }
    });
  }

  specimenChange() {
    this.specimensForm.valueChanges.subscribe(value => {
      const valid = this.specimensForm.controls[this.specimen[this.specimensIndex].value].valid;
      if (valid && this.specimen[this.specimensIndex].value !== 'other') {
        setTimeout(() => {
          this.specimensIndex++;
        }, 300);
      }
    });
  }

  changeIndexes() {
    this.symptomChanges();
    this.medicalChanges();
    this.testingChanges();
    // this.specimenChange();
  }

  previous(i) {
    if (this[i] > 0) {
      this[i]--;
    }
  }

  next(i, length) {
    if (this[i] < length - 1) {
      this[i]++;
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
    return this.fb.group({radio: ['', Validators.required], specify: ['', Validators.required], blur: false});
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
