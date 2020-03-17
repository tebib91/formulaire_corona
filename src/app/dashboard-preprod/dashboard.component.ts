import {ApiserviceService} from './../apiservice.service';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {PageEvent} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {HelpComponent} from './help/help.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  casesTable = '?f=api&endpoint=cases';
  clusterEndpoint = '?f=api&endpoint=clusters';
  // endpoints
  genderPieEndpoint = '?f=api&endpoint=genderPie&preprod';
  stackedEndpoint = '?f=api&endpoint=stacked&preprod';
  nationalitiesEndpoint = '?f=api&endpoint=nationalities&preprod';
  gendreAgeEndpoint = '?f=api&endpoint=genderAge&preprod';
  sourceEndpoint = '?f=api&endpoint=sources&preprod';
  govsEndpoint = '?f=api&endpoint=governates&preprod';
  exportersEndpoint = '?f=api&endpoint=exporters&preprod';
  casesEndpoint = '?f=api&endpoint=cases';
  numbersEndpoint = '?f=api&endpoint=numbers';
  statsEndpoint = '?f=api&endpoint=statistics';
  // numbers
  confirmed: number;
  hospitalized: number;
  discharged: number;
  restablished: number;
  last_update: number;
  // table charts
  cases: any[];
  casesPaginator: any[];
  averageAge: number;
  language: string;
  dateStatistics: string;
  pageEvent: PageEvent;
  pageIndex = 0;
  length = 100;
  pageSize = 10;
  quarantaine: number;
  depistage: number;
  ratio: number;
  quarantaine_achevee: number;
  lastUpdate: string;
  lastUpdates: any = {};
  constructor(
    private apiService: ApiserviceService,
    private router: Router,
    private translate: TranslateService,
    private matDialog: MatDialog,
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
        this.discharged = data.Discharged;
        this.restablished = data.restablished;
        this.last_update = data.last_update;
      });
    this.apiService.get(this.statsEndpoint).subscribe(
      (data: any) => {
        this.quarantaine = data.quarantaine;
        this.depistage = data.depistage;
        this.ratio = data.ratio.toFixed(2);
        this.quarantaine_achevee = data.quarantaine_achevee;
        // update date of all this values
        this.dateStatistics = data.date;
      });
    this.getCases();
  }

  public getCases() {
    // getting table data
    this.apiService.get(this.casesEndpoint).subscribe(
      (data: any) => {
        this.cases = data.cases;
        this.getServerData();
        this.averageAge = data.average;
        this.length = data.cases.length;
      });
  }

  openHelpPopup(help) {
    this.matDialog.open(HelpComponent, {
      data: {
        help,
        lang: this.language
      }
    });
  }

  getServerData(event?) {
    console.log(event);
    if (event) {
      this.pageSize = event.pageSize;
      this.pageIndex = event.pageIndex;
    }
    this.casesPaginator = [];
    this.cases.forEach((item, index) => {
      if (index < this.pageSize + (this.pageSize * this.pageIndex) && index >= this.pageIndex * this.pageSize) {
        this.casesPaginator.push(item);
      }
    });
    console.log('casesPaginator', this.casesPaginator);
  }

  goTo(route) {
    this.router.navigate([route]);
  }

  changeLaneguage(event) {
    console.log('change', event.value);
    this.translate.use(event.value);
  }
  resultLastUpdate(event, label) {
    this.lastUpdates[label] = event;
    console.log('event :', this.lastUpdates);
  }

}
