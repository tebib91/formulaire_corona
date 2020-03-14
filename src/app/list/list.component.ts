import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data: any[]= [];

  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.apiService.getAll().subscribe(data => {
      console.log('data', data);
      this.data = data;

    })
  }

}
