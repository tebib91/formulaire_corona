import { Component, OnInit } from '@angular/core';
import PlaceResult = google.maps.places.PlaceResult;
import { Location, Appearance, GermanAddress } from '@angular-material-extensions/google-maps-autocomplete';
import { MatDialogRef } from '@angular/material/dialog';

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
  constructor(private dialogRef: MatDialogRef<AutocompleteComponent>) {}
  ngOnInit() {

    this.zoom = 1000;
    this.latitude = 52.520008;
    this.longitude = 13.404954;

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
    console.log('onAutocompleteSelected: ', result);
    this.placesName = result.formatted_address;
    this.addressChosen = true;
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
    this.addressChosen = true;
  }

  onGermanAddressMapped($event: GermanAddress) {
    console.log('onGermanAddressMapped', $event);
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
