import { ApiserviceService } from './../apiservice.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // endpoints
  genderPieEndpoint = '?f=api&endpoint=genderPie';
  casesTable = '?f=api&endpoint=cases';
  numbersEndpoint = '?f=api&endpoint=numbers';
  nationalitiesEndpoint = '?f=api&endpoint=nationalities';
  clusterEndpoint = '?f=api&endpoint=clusters';
  gendreAgeEndpoint = '?f=api&endpoint=genderAge';
  sourceEndpoint = '?f=api&endpoint=sources';
  exportersEndpoint = '?f=api&endpoint=exporters';
  stackedEndpoint = '?f=api&endpoint=stacked';
  // numbers
  confirmed: number;
  hospitalized: number;
  discharged: number;
  restablished: number;
  constructor(private apiService: ApiserviceService, private router: Router) { }

  ngOnInit(): void {
    // getting numbers
    this.apiService.get(this.numbersEndpoint).subscribe(
      (data: any) => {
        this.confirmed = data.confirmed;
        this.hospitalized = data.hospitalized;
        this.discharged = data.discharged;
        this.restablished = data.restablished;
      });
  }
  goTo(route) {
    this.router.navigate([route]);
}
}
