import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import { } from '@types/googlemaps';
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit, AfterViewInit {
  @ViewChild('gmap', {static: false}) gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {

  }

  ngAfterViewInit() {
    const mapProp = {
      center: new google.maps.LatLng(33.8869, 9.5375),
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
}
