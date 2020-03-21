import { Component, OnInit, Inject } from '@angular/core';
import PlaceResult = google.maps.places.PlaceResult;
import { Location, Appearance, GermanAddress } from '@angular-material-extensions/google-maps-autocomplete';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  public appearance = Appearance;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;
  placesName: string;
  addressChosen = false;
  constructor(private dialogRef: MatDialogRef<AutocompleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {

    this.zoom = 1000;

    setTimeout(() => {
    if (this.data) {
      this.latitude = this.data.latitude;
      this.longitude = this.data.longitude;
      this.placesName = this.data.adress ? this.data.adress : this.data.workLocation;

    }

    }, 2000);

    this.setCurrentPosition();

  }
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  onAutocompleteSelected(result: PlaceResult) {
    this.placesName = result.formatted_address;
    this.addressChosen = true;
  }

  onLocationSelected(location: Location) {
    this.latitude = location.latitude;
    this.longitude = location.longitude;
    this.addressChosen = true;
  }

  onGermanAddressMapped($event: GermanAddress) {
  }
  onKey($event) {

  }
  ngAfterContentInit(): void {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.

  }
  onConfirm() {
    const mapData = {
      latitude: this.latitude,
      longitude: this.longitude,
      name: this.placesName
    };
    this.dialogRef.close(mapData);
  }
}
