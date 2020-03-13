import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MedicalExtension, SymptomForm, Testing, Specimens} from './symptom-form';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  symptomForm: FormGroup;
  medicalForm: FormGroup;
  testingForm: FormGroup;
  specimensForm: FormGroup;
  symptomValues = SymptomForm;
  medicalExtension = MedicalExtension;
  testingDiag = Testing;
  preExisting: number;
  specimen = Specimens;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // symptom form
    const symptom = {};
    this.symptomValues.forEach(input => {
      symptom[input.value] = new FormControl('');
    });
    this.symptomForm = new FormGroup(symptom);

    // symptom form
    const medical = {};
    this.medicalExtension.forEach(input => {
      if (input.type === 'group') {
        medical[input.value] = this.specifyGroup();
      } else {
        medical[input.value] = new FormControl('');
      }
    });
    this.medicalForm = this.fb.group(medical);

    // testing Form
    const testing = {};
    this.testingDiag.forEach(input => {
      if (input.type === 'group') {
        testing[input.value] = this.fb.group({firstValue: '', secondValue: ''});
      } else {
        testing[input.value] = new FormControl('');
      }
    });
    this.testingForm = this.fb.group(testing);

    // Specimens Form
    const specimen = {};
    this.specimen.forEach(input => {
      if (input.type === 'object') {
        specimen[input.value] = this.specimensGroup();
      } else {
        specimen[input.value] = new FormControl('');
      }
    });
    this.specimensForm = this.fb.group(specimen);
  }


  onClick() {
    console.log('specimensForm :', this.specimensForm.value);
  }

  specifyGroup(): FormGroup {
    return this.fb.group({radio: '', specify: ''});
  }
  specimensGroup(): FormGroup {
    return this.fb.group({
      specimenID: '',
      DateCollected: '',
      labTested: false,
      labResult: '',
      sentCDC: false,
      CDCResult: '',
    });
  }
}
