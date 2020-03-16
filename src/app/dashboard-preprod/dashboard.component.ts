import { ApiserviceService } from './../apiservice.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
  casesEndpoint = '?f=api&endpoint=cases';
  govsEndpoint = '?f=api&endpoint=governates';
  // numbers
  confirmed: number;
  hospitalized: number;
  discharged: number;
  restablished: number;
  last_update: number;
  // table charts
  cases: any[];
  averageAge: number;
  language: string;
  constructor(
    private apiService: ApiserviceService,
    private router: Router,
    private translate: TranslateService,
    private route: ActivatedRoute) {
    console.log('Called Constructor');
    this.route.queryParams.subscribe(params => {
      if (params.lang) {
        this.language = params.lang;
      } else {
        this.language = 'fr';
      }
    });
    translate.setDefaultLang(this.language);
  }

  ngOnInit(): void {
    // getting numbers
    this.apiService.get(this.numbersEndpoint).subscribe(
      (data: any) => {
        this.confirmed = data.Confirmed;
        this.hospitalized = data.hospitalized;
        this.discharged = data.discharged;
        this.restablished = data.restablished;
        this.last_update = data.last_update;
      });
    // getting table data
    this.apiService.get(this.casesEndpoint).subscribe(
      (data: any) => {
        this.cases = data.cases;
        this.averageAge = data.average;
      });
  }
  goTo(route) {
    this.router.navigate([route]);
  }

  changeLaneguage(event) {
    console.log("change", event.value);
    this.translate.use(event.value)
  }
}
