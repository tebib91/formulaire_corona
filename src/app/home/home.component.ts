import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { nationality } from '../data';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Location, Appearance, GermanAddress } from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import { MapsAPILoader } from '@agm/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';
import { DialogsucessComponent } from './dialogsucess/dialogsucess.component';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  phoneNumber = '^((\\+91-?)|0)?[0-9]{10}$';
  nationality: { num_code: string; alpha_2_code: string; alpha_3_code: string; en_short_name: string; nationality: string; }[];
  status: any = [
    { name: 'En cours de diagnostic', value: 'Under Investigation' },
    { name: 'Déchargé', value: 'Discharged' },
    { name: 'Confirmé', value: 'Confirmed' },
    { name: 'Rétabli', value: 'Recovered' },
    { name: 'Mort', value: 'Dead' }
  ];

  public appearance = Appearance;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;
  hiden = false;
  case: number;
  private routeSub: Subscription;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private apiService: ApiserviceService,
    private route: ActivatedRoute,

  ) { }

  profileForm = this.fb.group({
    case: [''],
    age: ['', Validators.required],
    gender: ['', Validators.required],
    nationality: ['', Validators.required],
    // adress: ['', Validators.required],
    adress: this.fb.group({
      adress: ['', Validators.required],
      latitude: [''],
      longitude: ['']
    }),
    workLocation: this.fb.group({
      workLocation: ['', Validators.required],
      latitude: [''],
      longitude: ['']
    }),
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
      latitude: [''],
      longitude: ['']
    }),
  });
  newCase(): FormGroup {
    return this.fb.group({
      id: ['']
    });
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
      place: [''],
      date: [''],
      latitude: [''],
      longitude: ['']
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
    });

    // this.route.queryParams.subscribe(queryParams => {
    //   console.log(queryParams);

    //   const id = queryParams['id'];
    //   console.log('id', id);

    //   this.getData(id);

    // });
    this.routeSub = this.route.params.subscribe(params => {
      this.case = +params['id'];
      console.log(params['id']) //log the value of id
      this.getData(params['id']);
    });
    // GET DATA CASE
    // this.getData(2);
  }


  focusFunction(id: string, i?) {
    let data: any;
    switch (id) {
      case 'address_input':
        data = this.profileForm.controls.adress.value;
        break;
      case 'work_location':
        this.profileForm.controls.workLocation.value;
        break;

      case 'recent_location':
        this.profileForm.controls.location[i].place.value;
        break;
      case 'hospital_place':
        this.profileForm.get('hospitalized').get('adress').value;
        break;
      default:
        break;
    }
    const dialogRef = this.dialog.open(AutocompleteComponent, {
      width: '600px',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('resultat', result);

      if (result && result.name) {
        (document.getElementById(id) as HTMLInputElement).value = result.name;
        switch (id) {
          case 'address_input':
            this.profileForm.patchValue({
              adress: {
                adress: result.name,
                latitude: result.latitude,
                longitude: result.longitude
              }
            });
            break;
          case 'work_location':
            this.profileForm.patchValue({
              workLocation: {
                workLocation: result.name,
                latitude: result.latitude,
                longitude: result.longitude
              }
            });
            break;

          case 'recent_location':
            this.profileForm.controls.location[i].patchValue({
              place: result.name,
              latitude: result.latitude,
              longitude: result.longitude
            });
            break;
          case 'hospital_place':
            this.profileForm.patchValue({
              hospitalized: {
                adress: result.name,
                latitude: result.latitude,
                longitude: result.longitude
              }
            });
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
    if (this.case) {
      this.profileForm.patchValue({
        case: this.case
      });
    }
    this.apiService.Send(this.profileForm.value).subscribe(value => {
      console.log('response', value);
      const dialogRef = this.dialog.open(DialogsucessComponent, {
        panelClass: 'confirmed'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('resultat', result);
        this.profileForm.reset();
      });

    });
  }
  getData(value) {
    this.apiService.getData(value).subscribe(value => {
      console.log('data from get', value);
      this.patchValue(value);
    });
  }
  patchValue(value) {
    this.profileForm.patchValue(value);
  }


}
