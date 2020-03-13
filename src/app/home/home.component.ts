import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { nationality } from '../data';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Location, Appearance, GermanAddress } from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import { MapsAPILoader } from '@agm/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  phoneNumber = '^((\\+91-?)|0)?[0-9]{10}$';
  nationality: { num_code: string; alpha_2_code: string; alpha_3_code: string; en_short_name: string; nationality: string; }[];
  status: any = ['En cours de diagnostic', 'Déchargé', 'Confirmé', 'Rétabli', 'Mort'];
  public appearance = Appearance;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;
  hiden: boolean = false;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private apiService: ApiserviceService
  ) { }

  profileForm = this.fb.group({
    fullName: ['', Validators.required],
    dateBirth: ['', Validators.required],
    gender: ['', Validators.required],
    nationality: ['', Validators.required],
    adress: ['', Validators.required],
    workLocation: ['', Validators.required],
    phone: ['', Validators.required],
    supportPhone: ['', Validators.required],

    infectedFamily: this.fb.array([
      this.newInfectedFamily()
    ]),

    location: this.fb.array([
      this.newLocation()
    ]),
    travelEtat: ['', Validators.required],
    travel: this.fb.array([
      this.newTravel()
    ]),

    caseEtat: ['', Validators.required],
    caseId: this.fb.array([
      this.newCase(),
    ]),
    symptoms: this.fb.group({
      etat: ['', Validators.required],
      date: [''],
    }),
    diagnosis: ['', Validators.required],
    status: this.fb.group({
      case: ['', Validators.required],
      date: [''],
    }),
    hospitalized: this.fb.group({
      etat: ['', Validators.required],
      adress: [''],
      date: [''],
    }),
  });
  newCase(): FormGroup {
    return this.fb.group({
      id: ['']
    })
  }
  newInfectedFamily(): FormGroup {
    return this.fb.group({
      name: '',
      infection: '',
    });
  }

  newTravel(): FormGroup {
    return this.fb.group({
      date: [''],
      from: [''],
      to: ['']
    });
  }

  newLocation(): FormGroup {
    return this.fb.group({
      place: '',
      date: '',
    });
  }

  get caseId() {
    return this.profileForm.get('caseId') as FormArray;
  }
  get infectedFamily() {
    return this.profileForm.get('infectedFamily') as FormArray;
  }

  get travel() {
    return this.profileForm.get('travel') as FormArray;
  }

  get location() {
    return this.profileForm.get('location') as FormArray;
  }

  addCase() {
    this.caseId.push(this.newCase());
  }
  removeCase(i) {
    this.caseId.removeAt(i);
  }
  addTravel() {
    this.travel.push(this.newTravel());
  }
  removeTravel(i) {
    this.travel.removeAt(i);
  }
  addAlias() {
    this.infectedFamily.push(this.newInfectedFamily());
  }
  removeAlias(i) {
    this.infectedFamily.removeAt(i);

  }


  addLocation() {
    this.location.push(this.newLocation());
  }
  removeLocation(i) {
    this.location.removeAt(i);

  }


  ngOnInit(): void {
    this.nationality = nationality;
    this.profileForm.get('location').valueChanges.subscribe(value => {
      console.log('value  on init', value);
    })
  }


  focusFunction(id: string, i?) {
    const dialogRef = this.dialog.open(AutocompleteComponent, {
      width: '600px',

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.name) {
        (<HTMLInputElement>document.getElementById(id)).value = result.name;
        switch (id) {
          case 'address_input':
            this.profileForm.controls['adress'].patchValue(result.name);
            break;
          case 'work_location':
            this.profileForm.controls['workLocation'].patchValue(result.name);
            break;
          case 'work_location':
            this.profileForm.controls['workLocation'].patchValue(result.name);
            break;
          case 'recent_location':
            this.profileForm.controls['location'][i]['place'].patchValue(result.name);
            break;
            case 'hospital_place':
              this.profileForm.get('hospitalized').get('adress').patchValue(result.name);
              break;
          default:
            break;
        }
      }
      console.log('The dialog was closed', result);
    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.apiService.Send(this.profileForm.value).subscribe(value => {
      console.log('response', value);

    })
  }


}
