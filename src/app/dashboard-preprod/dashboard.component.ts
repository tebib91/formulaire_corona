import {ApiserviceService} from './../apiservice.service';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {PageEvent} from '@angular/material/paginator';
import {HelpComponent} from '../dashboard-preprod/help/help.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


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
  dead: number;
  // table charts
  cases: any[];
  casesPaginator: any[];
  averageAge: number;
  language: string;
  pageEvent: PageEvent;
  pageIndex = 0;
  length = 100;
  pageSize = 10;
  quarantaine: number;
  depistage: number;
  ratio: number;
  quarantaine_achevee: number;
  dateStatistics: string;
  lastUpdates: any = {};
  govs = {
    Tataouine: 'تطاوين',
    Kebili: 'قبلي',
    Medenine: 'مدنين',
    Kasserine: 'القصرين',
    Gafsa: 'قفصة',
    Sfax: 'صفاقس',
    'Sidi Bouzid': 'سيدي بوزيد',
    'Gabès': 'قابس',
    Kairouan: 'القيروان',
    Tozeur: 'توزر',
    Kef: 'الكاف',
    Siliana: 'سليانة',
    Bizerte: 'بنزرت',
    Beja: 'باجة',
    Jendouba: 'جندوبة',
    Mahdia: 'المهدية',
    Nabeul: 'نابل',
    Zaghouan: 'زغوان',
    Sousse: 'سوسة',
    Mannouba: 'منوبة',
    Monastir: 'المنستير',
    'Ben Arous': 'بن عروس',
    Ariana: 'أريانة',
    Tunis: 'تونس',
    unknown: 'غير معروف'
  };

  constructor(
    private matDialog: MatDialog,
    private apiService: ApiserviceService,
    private router: Router,
    private translate: TranslateService,
    private route: ActivatedRoute) {
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
        this.restablished = data.Recovered;
        this.last_update = data.last_update;
        this.dead = data.Dead;
      });
    this.apiService.get(this.statsEndpoint).subscribe(
      (data: any) => {
        this.quarantaine = data.quarantaine;
        this.depistage = data.depistage;
        this.ratio = data.ratio.toFixed(2);
        this.quarantaine_achevee = data.quarantaine_achevee;
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

  getServerData(event?) {
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
  }

  goTo(route) {
    this.router.navigate([route]);
  }

  changeLaneguage(event) {
    this.translate.use(event.value);
  }

  openHelpPopup(help) {
    this.matDialog.open(HelpComponent, {
      data: {
        help,
        lang: this.language
      }
    });
  }

  arGourenorate(gov) {
    const governorate = Object.keys(this.govs).find(value => gov.includes(value));
    return this.govs[governorate];
  }

  resultLastUpdate(event, label) {
    this.lastUpdates[label] = event;
  }
  mapDisplay() {
    this.cases.map(c => c.display = false);
  }
}
