import { ApiserviceService } from './../../apiservice.service';
import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
declare const Chart;
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
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
    Tunis: 'تونس'
  };
  // nationalities
  nationalities = {
    Afghan: 'أفغاني',
    Albanian: 'ألباني',
    Algerian: 'جزائري',
    American: 'أمريكي',
    Andorran: 'أندوري',
    Angolan: 'أنغولي',
    Antiguans: 'انتيغوا',
    Argentinean: 'أرجنتيني',
    Armenian: 'أرميني',
    Australian: 'أسترالي',
    Austrian: 'نمساوي',
    Azerbaijani: 'أذربيجاني',
    Bahamian: 'باهامى',
    Bahraini: 'بحريني',
    Bangladeshi: 'بنجلاديشي',
    Barbadian: 'باربادوسي',
    Barbudans: 'بربودا',
    Batswana: 'بوتسواني',
    Belarusian: 'بيلاروسي',
    Belgian: 'بلجيكي',
    Belizean: 'بليزي',
    Beninese: 'بنيني',
    Bhutanese: 'بوتاني',
    Bolivian: 'بوليفي',
    Bosnian: 'بوسني',
    Brazilian: 'برازيلي',
    British: 'بريطاني',
    Bruneian: 'بروناى',
    Bulgarian: 'بلغاري',
    Burkinabe: 'بوركيني',
    Burmese: 'بورمي',
    Burundian: 'بوروندي',
    Cambodian: 'كمبودي',
    Cameroonian: 'كاميروني',
    Canadian: 'كندي',
    'Cape Verdean': 'االرأس الأخضر',
    'Central African': 'وسط أفريقيا',
    Chadian: 'تشادي',
    Chilean: 'شيلي',
    Chinese: 'صينى',
    Colombian: 'كولومبي',
    Comoran: 'جزر القمر',
    Congolese: 'كونغولي',
    'Costa Rican': 'كوستاريكي',
    Croatian: 'كرواتية',
    Cuban: 'كوبي',
    Cypriot: 'قبرصي',
    Czech: 'تشيكي',
    Danish: 'دانماركي',
    Djibouti: 'جيبوتي',
    Dominican: 'دومينيكاني',
    Dutch: 'هولندي',
    'East Timorese': 'تيموري شرقي',
    Ecuadorean: 'اكوادوري',
    Egyptian: 'مصري',
    Emirian: 'إماراتي',
    'Equatorial Guinean': 'غيني  استوائي',
    Eritrean: 'إريتري',
    Estonian: 'إستوني',
    Ethiopian: 'حبشي',
    Fijian: 'فيجي',
    Filipino: 'فلبيني',
    Finnish: 'فنلندي',
    French: 'فرنسي',
    Gabonese: 'جابوني',
    Gambian: 'غامبيي',
    Georgian: 'جورجي',
    German: 'ألماني',
    Ghanaian: 'غاني',
    Greek: 'إغريقي',
    Grenadian: 'جرينادي',
    Guatemalan: 'غواتيمالي',
    'Guinea-Bissauan': 'غيني بيساوي',
    Guinean: 'غيني',
    Guyanese: 'جوياني',
    Haitian: 'هايتي',
    Herzegovinian: 'هرسكي',
    Honduran: 'هندوراسي',
    Hungarian: 'هنغاري',
    Icelander: 'إيسلندي',
    Indian: 'هندي',
    Indonesian: 'إندونيسي',
    Iranian: 'إيراني',
    Iraqi: 'عراقي',
    Irish: 'إيرلندي',
    Italian: 'إيطالي',
    Ivorian: 'إفواري',
    Jamaican: 'جامايكي',
    Japanese: 'ياباني',
    Jordanian: 'أردني',
    Kazakhstani: 'كازاخستاني',
    Kenyan: 'كيني',
    'Kittian and Nevisian': 'كيتياني ونيفيسياني',
    Kuwaiti: 'كويتي',
    Kyrgyz: 'قيرغيزستان',
    Laotian: 'لاوسي',
    Latvian: 'لاتفي',
    Lebanese: 'لبناني',
    Liberian: 'ليبيري',
    Libyan: 'ليبي',
    Liechtensteiner: 'ليختنشتايني',
    Lithuanian: 'لتواني',
    Luxembourger: 'لكسمبرغي',
    Macedonian: 'مقدوني',
    Malagasy: 'مدغشقري',
    Malawian: 'مالاوى',
    Malaysian: 'ماليزي',
    Maldivan: 'مالديفي',
    Malian: 'مالي',
    Maltese: 'مالطي',
    Marshallese: 'مارشالي',
    Mauritanian: 'موريتاني',
    Mauritian: 'موريشيوسي',
    Mexican: 'مكسيكي',
    Micronesian: 'ميكرونيزي',
    Moldovan: 'مولدوفي',
    Monacan: 'موناكو',
    Mongolian: 'منغولي',
    Moroccan: 'مغربي',
    Mosotho: 'ليسوتو',
    Motswana: 'لتسواني',
    Mozambican: 'موزمبيقي',
    Namibian: 'ناميبي',
    Nauruan: 'ناورو',
    Nepalese: 'نيبالي',
    'New Zealander': 'نيوزيلندي',
    'Ni-Vanuatu': 'ني فانواتي',
    Nicaraguan: 'نيكاراغوا',
    Nigerien: 'نيجري',
    'North Korean': 'كوري شمالي',
    'Northern Irish': 'إيرلندي شمالي',
    Norwegian: 'نرويجي',
    Omani: 'عماني',
    Pakistani: 'باكستاني',
    Palauan: 'بالاوي',
    Palestinian: 'فلسطيني',
    Panamanian: 'بنمي',
    'Papua New Guinean': 'بابوا غينيا الجديدة',
    Paraguayan: 'باراغواياني',
    Peruvian: 'بيروفي',
    Polish: 'بولندي',
    Portuguese: 'برتغالي',
    Qatari: 'قطري',
    Romanian: 'روماني',
    Russian: 'روسي',
    Rwandan: 'رواندي',
    'Saint Lucian': 'لوسياني',
    Salvadoran: 'سلفادوري',
    Samoan: 'ساموايان',
    'San Marinese': 'سان مارينيز',
    'Sao Tomean': 'ساو توميان',
    Saudi: 'سعودي',
    Scottish: 'سكتلندي',
    Senegalese: 'سنغالي',
    Serbian: 'صربي',
    Seychellois: 'سيشلي',
    'Sierra Leonean': 'سيرا ليوني',
    Singaporean: 'سنغافوري',
    Slovakian: 'سلوفاكي',
    Slovenian: 'سلوفيني',
    'Solomon Islander': 'جزر سليمان',
    Somali: 'صومالي',
    'South African': 'جنوب افريقيي',
    'South Korean': 'كوري جنوبي',
    Spanish: 'إسباني',
    'Sri Lankan': 'سري لانكي',
    Sudanese: 'سوداني',
    Surinamer: 'سورينامي',
    Swazi: 'سوازي',
    Swedish: 'سويدي',
    Swiss: 'سويسري',
    Syrian: 'سوري',
    Taiwanese: 'تايواني',
    Tajik: 'طاجيكي',
    Tanzanian: 'تنزاني',
    Thai: 'التايلاندي',
    Togolese: 'توغواني',
    Tongan: 'تونجاني',
    'Trinidadian or Tobagonian': 'ترينيدادي أو توباغوني',
    Tunisian: 'تونسي',
    Turkish: 'تركي',
    Tuvaluan: 'توفالي',
    Ugandan: 'أوغندي',
    Ukrainian: 'أوكراني',
    Uruguayan: 'أوروجواي',
    Uzbekistani: 'أوزبكستاني',
    Venezuelan: 'فنزويلي',
    Vietnamese: 'فيتنامي',
    Welsh: 'ويلزي',
    Yemenite: 'يمني',
    Zambian: 'زامبي',
    Zimbabwean: 'زيمبابوي'
  };
  countries = {
    Egypt: 'مصر',
    France: 'فرنسا',
    Italy: 'ايطاليا',
    China: 'الصين',
    Morroco: 'المغرب',
    Spain: 'اسبانيا',
    Algeria: 'الجزائر',
    Libya: 'ليبيا'
  };
  loading = true;
  @Input() chartType: string;
  pieData: any;
  @Input() dataSource: string;
  @Input() legend: boolean;
  @Input() chartLabel: string;
  @Input() language: string;
  options: any;
  public lineChartData: any = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Cas confirmés' },
    { data: [28, 2, 10, 5, 6, 8, 10], label: 'Débraillé' },
    { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Symptômes signalés' }
  ];
  dataPie: any;
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartLegend = true;
  public lineChartOptions = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.4,
        fill: false,
        spanGaps: true,
        bezierCurve: true
      }
    },
    tooltips: {
      intersect: false,
      mode: 'x',
      axis: 'x'
    },
    scales: {
      xAxes: [
        {
          // stacked: true,
          // interval: 1,
          gridLines: {
            display: false
          },
          offset: true,
          ticks: {
            maxRotation: 0,
            autoSkip: true,
            maxTicksLimit: 4,
          },
          type: 'category',
          unit: 'day',
          time: {
            displayFormats: {
              month: 'MMM',
              day: 'DD/MM',
              hour: 'DD/MM'
            }
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: true
          },
          type: 'linear',
          ticks: {
            autoSkip: true,
            maxTicksLimit: 5,
          }
        }
      ]
    }
  };
  public barChartOptions = {
    legend: {
      display: false
    },
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          // maxTicksLimit: 6,
          stepSize: 1
        },
        gridLines: {
          display: true
        }
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
    maintainAspectRatio: false,
  };
  public pieChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    elements: {
      line: {
        tension: 0,
        fill: false, // disables bezier curves
        spanGaps: true
      }
    },
    maintainAspectRatio: false,
  };
  colors: any;
  public lineColors: Color[] = [
    {
      backgroundColor: '#6342D2',
      borderColor: '#6342D2',
      pointBackgroundColor: '#6342D2',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      backgroundColor: '#59D5FD',
      borderColor: '#59D5FD',
      pointBackgroundColor: '#59D5FD',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#59D5FD'
    },
    {
      backgroundColor: '#FB6B80',
      borderColor: '#FB6B80',
      pointBackgroundColor: '#FB6B80',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#FB6B80'
    },
    {
      backgroundColor: '#3BA756',
      borderColor: '#3BA756',
      pointBackgroundColor: '#3BA756',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#3BA756'
    }
  ];
  public pieChartColors = [
    {
      backgroundColor: ['#6342D2', '#59D5FD', '#FB6B80', '#FF9578', '#3BA756', '#6563FF', '#FCBE2C'],
    },
  ];
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Masculin' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Féminin' }
  ];
  // legends margin bottom
  public pieChartPlugins = [{
    beforeInit: (chart, options) => {
      chart.legend.afterFit = function () {
        this.height += 20; // must use `function` and not => because of `this`
      };
    }
  }];
  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
    // getting data for the chart
    if (this.dataSource) {
      this.apiService.get(this.dataSource).subscribe(
        (data: any) => {
          console.log('data', data);
          switch (this.chartLabel) {
            case 'genderPie':
              console.log('gender pie');
              if (this.language === 'ar') {
                this.lineChartLabels = ['ذكر', 'أنثى'];
              }
              this.pieData = [data.men, data.women];
              break;
            case 'sourcePie':
              this.lineChartLabels = ['Importé', 'Local'];
              if (this.language === 'ar') {
                this.lineChartLabels = ['مستوردة', 'محلية'];
              }
              this.pieData = [data.imported, data.local];
              break;
            case 'countriesPie':
              let countrieslabels = [];
              if (this.language === 'ar') {
                console.log('labels in countries', Object.keys(data));
                Object.keys(data).map(key => {
                  if (this.countries[key]) {
                    console.log('this.nationalities[key]', this.countries[key]);
                    countrieslabels.push(this.countries[key]);
                  } else {
                    countrieslabels.push(key);
                  }
                });
              } else {
                countrieslabels = Object.keys(data);
              }
              console.log('countrieslabels', countrieslabels);
              this.lineChartLabels = countrieslabels;
              this.pieData = Object.values(data);
              break;
            case 'ageGenderRepartition':
              let barData = [];
              const dataWomen = [];
              const dataMan = [];
              Object.keys(data).map(key => {
                console.log('data key', data[key]);
                dataWomen.push(data[key].women ? data[key].women : 0);
                dataMan.push(data[key].men ? data[key].men : 0);
              });
              barData = [{ data: dataMan, label: 'Male' }, { data: dataWomen, label: 'Female' }];
              console.log('bar data', barData);
              this.lineChartLabels = Object.keys(data);
              this.lineChartData = barData;
              break;
            case 'casePerDay':
              this.options.scales.xAxes[0].stacked = true;
              this.options.scales.yAxes[0].ticks.beginAtZero = true;
              let allLabels = [];
              Object.keys(data).map((key: any) => {
                allLabels = [...Object.keys(data[key])];
              });
              // remove duplicate labels
              const cleanLabels = allLabels.filter((elem, index, self) => {
                return index === self.indexOf(elem);
              });
              // sorting labels
              const sortedLabels = cleanLabels.sort((a: any, b: any) => b.date - a.date);
              this.lineChartLabels = sortedLabels;
              const dataStacked = [];
              if (data.Confirmed) {
                dataStacked.push({ data: Object.values(data.Confirmed), label: 'Cas Confirmés' });
              }
              if (data.Discharged) {
                dataStacked.push({ data: Object.values(data.Discharged), label: 'Cas Déchargés' });
              }
              if (data.Recovred) {
                dataStacked.push({ data: Object.values(data.Recovred), label: 'Cas récovrés' });
              }
              if (data.Dead) {
                dataStacked.push({ data: Object.values(data.Confirmed), label: 'Cas mortes' });
              }
              console.log('dataa stacked', dataStacked);
              console.log('labels', sortedLabels);
              this.lineChartData = dataStacked;
              break;
            case 'nationalityPie':
              let labels = [];
              if (this.language === 'ar') {
                Object.keys(data).map(key => {
                  if (this.nationalities[key]) {
                    labels.push(this.nationalities[key]);
                  } else {
                    labels.push(key);
                  }
                });
              } else {
                labels = Object.keys(data);
              }
              this.lineChartLabels = labels;
              this.pieData = Object.values(data);
              break;
            case 'govsPie':
              const templabels = [];
              const dataGovs = [];
              Object.keys(data).map(key => {
                if (key.includes('Tunisia')) {
                  const formattedKey = key.split(',')[0];
                  if (this.govs[formattedKey]) {
                    templabels.push(this.govs[formattedKey]);
                  } else {
                    templabels.push(formattedKey);
                  }
                  dataGovs.push(data[key]);
                }
              });
              this.pieData = dataGovs;
              this.lineChartLabels = templabels;
              break;
            default:
              console.log('default shit');
              break;
          }
          this.loading = false;
        });
    }
    switch (this.chartType) {
      case 'line':
        this.options = this.lineChartOptions;
        this.colors = this.lineColors;
        break;
      case 'bar':
        this.options = this.barChartOptions;
        this.colors = this.lineColors;
        this.lineChartData = this.barChartData;
        break;
      case 'pie':
        this.options = this.pieChartOptions;
        this.colors = this.pieChartColors;
        this.lineChartLabels = ['Masculin', 'Féminin'];
        this.pieData = [300, 500];
        break;
      default:
        console.log('no options for this');
        break;
    }
    if (this.legend) {
      this.options.legend = {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          generateLabels(chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map(function (label, i) {
                const meta = chart.getDatasetMeta(0);
                const ds = data.datasets[0];
                const arc = meta.data[i];
                const custom = arc && arc.custom || {};
                const getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                const arcOpts = chart.options.elements.arc;
                const fill =
                  custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                const stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                const bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);
                const value = chart.config.data.datasets[arc._datasetIndex].data[arc._index];
                return {
                  text: label + ' : ' + value,
                  fillStyle: fill,
                  strokeStyle: stroke,
                  lineWidth: bw,
                  hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                  index: i
                };
              });
            } else {
              return [];
            }
          }
        },
      };
    }
  }

}
