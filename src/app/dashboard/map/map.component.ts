import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { latlong } from './map-config/latlong';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // if laoding data
  isLoading = true;
  mapData: any[] = [];
  mapOptions: any;
  // latlong
  latlong: any;
  echartMax = -Infinity;
  echartMin = Infinity;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../../assets/map/world.json').subscribe((geoJson) => {
      // register map
      echarts.registerMap('world', geoJson);
      this.latlong = latlong;
      // update map options
      this.mapOptions = {
        title: {
          text: 'Distribution des cas',
          // subtext: '人口密度数据来自Wikipedia',
          // sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
        },
        tooltip: {
          trigger: 'item',
          formatter: params => {
            return `${params.name}: ${params.value[2]}`;
          }
        },
        geo: {
          map: 'world',
          label: {
            emphasis: {
              show: false
            }
          },
          // colors and shit
          itemStyle: {
            normal: {
              areaColor: 'rgba(100, 60, 214, 0.7)',
              borderColor: 'white'
            },
            emphasis: {
              areaColor: 'rgba(100, 60, 214, 1)'
            }
          }
        },
        // colors and shit
        visualMap: {
          min: 0,
          max: this.echartMax,
          splitNumber: 5,
          precision: null,
          color: ['#F9677E', '#f9f967'],
          textStyle: {
            color: '#212121'
          }
        },
        // real shit for data to display
        series: [
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: this.mapData.map(itemOpt => {
              return {
                name: itemOpt.name,
                value: [
                  itemOpt.longitude,
                  itemOpt.latitude,
                  itemOpt.value
                ]
              };
            }),
            itemStyle: {
              emphasis: {
                areaColor: '#A5DABB',
                borderColor: '#fff',
                borderWidth: 2
              }
            }
          }
        ],
        zoom: 1.2
      };
    });
  }

}
