import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import * as L from "leaflet";
@Component({
  selector: "app-leaflet-map",
  templateUrl: "./leaflet-map.component.html",
  styleUrls: ["./leaflet-map.component.scss"]
})
export class LeafletMapComponent implements OnInit, AfterViewInit {
  @Input() dataSource: string;
  private map;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.initMap();
  }
  private initMap(): void {
    this.map = L.map("map", {
      center: [33.8869, 9.5375],
      zoom: 6
    });
    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }
    );

    tiles.addTo(this.map);
    const marker = L.marker([32.9210902, 10.4508956]);
    marker.addTo(this.map);
  }
}
