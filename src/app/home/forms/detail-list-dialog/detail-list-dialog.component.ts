import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MedicalExtension, SymptomForm, Testing} from '../symptom-form';

@Component({
  selector: 'app-detail-list-dialog',
  templateUrl: './detail-list-dialog.component.html',
  styleUrls: ['./detail-list-dialog.component.scss']
})
export class DetailListDialogComponent implements OnInit {
  symptomsList = SymptomForm;
  medicalList = MedicalExtension;
  testinList = Testing;

  constructor(
    public dialogRef: MatDialogRef<DetailListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('declaration :', data);
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  convertSymptom(value) {
    return +value === 0 ? 'Oui' : value === 1 ? 'Non' : value === 2 ? 'Inconnu' : value;
  }

  convertSanguin(value) {
    return +value === 0 ? 'A' : value === 1 ? 'B' : value;
  }

  convertTesting(value) {
    return +value === 0 ? 'Positive' : value === 1 ? 'Negative' : value === 2 ? 'En attente' : value === 3 ? 'Pas fini' : value ;
  }

  colors(value) {
    return value === 0 ? 'red' : value === 1 ? 'green' : value === 2 ? 'gray' : value === 3 ? '#ff9c08' : 'black';
  }
}
