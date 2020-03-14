import { ApiserviceService } from './../../apiservice.service';
import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit, AfterViewInit {
  markers = [];
  @Input() dataSource: string;
  // google maps zoom level
  zoom = 6;
  // initial center position for the map
  lat = 33.8869;
  lng = 9.5375;
  constructor(private apiService: ApiserviceService) { }
  ngOnInit() {
    // this.apiService.get(this.dataSource).subscribe((data: any) => {

    // })

  }
  ngAfterViewInit() {
    const address = 'Ariana';
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({
      'address': address
    }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log('results', results);
      }
    });
  }
}
