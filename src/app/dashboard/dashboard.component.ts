import { ApiserviceService } from './../apiservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  genderPieEndpoint = '?f=api&endpoint=genderPie';
  // numbers
  confirmed: number;
  hospitalized: number;
  dead: number;
  discharged: number;
  restablished: number;
  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.apiService.get('?f=api&endpoint=numbers').subscribe(
      (data: any) => {
        this.confirmed = data.confirmed;
        this.hospitalized = data.hospitalized;
        this.dead = data.dead;
        this.discharged = data.discharged;
        this.restablished = data.restablished;
      }
    )
  }

}
