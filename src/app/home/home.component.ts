import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { nationality } from '../data';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Location, Appearance, GermanAddress } from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import { MapsAPILoader } from '@agm/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('address_input', {static: false}) addressInput: ElementRef;
  phoneNumber = '^((\\+91-?)|0)?[0-9]{10}$';
  nationality: { num_code: string; alpha_2_code: string; alpha_3_code: string; en_short_name: string; nationality: string; }[];
  status: any = ['Under Investigation', 'Discharged', 'Confirmed', 'Recovered', 'Dead'];
  public appearance = Appearance;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;
  hiden: boolean = false;

  constructor(
    private fb: FormBuilder,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    public dialog: MatDialog
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

    travel: this.fb.array([
      this.newTravel()
    ]),

    connection: this.fb.group({
      etat: ['', Validators.required],
      caseId: ['']
    }),

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

  newInfectedFamily(): FormGroup {
    return this.fb.group({
      name: '',
      infection: '',
    });
  }

  newTravel(): FormGroup {
    return this.fb.group({
      etat: ['', Validators.required],
      date: ['']
    });
  }

  newLocation(): FormGroup {
    return this.fb.group({
      place: '',
      date: '',
    });
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

  addTravel() {
    this.travel.push(this.newTravel());
  }

  addAlias() {
    this.infectedFamily.push(this.newInfectedFamily());
  }


  addLocation() {
    this.location.push(this.newLocation());
  }



  ngOnInit(): void {
    this.nationality = nationality;
    this.profileForm.get('location').valueChanges.subscribe(value => {
      console.log('value  on init', value);
    })
  }


  focusFunction() {
    const dialogRef = this.dialog.open(AutocompleteComponent, {
      width: '600px',
      height: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.addressInput.nativeElement.value = result.name;
      console.log('The dialog was closed', result);
    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }


}
