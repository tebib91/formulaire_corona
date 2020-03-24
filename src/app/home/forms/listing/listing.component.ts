import {Component, OnInit} from '@angular/core';
import {ApiserviceService} from '../../../apiservice.service';
import {MatDialog} from '@angular/material/dialog';
import {DetailListDialogComponent} from '../detail-list-dialog/detail-list-dialog.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  declarationsList: any[] = [];
  totalTests = 0;
  page = 0;
  pageIndex = 0;
  constructor(private api: ApiserviceService, private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    // this.getListData(this.page);
    this.getServerData({pageIndex : 0});
  }

  getListData(page) {
    this.api.getDeclarationList(page).subscribe(data => {
      console.log('declarations :', data);
      this.declarationsList = data.data;
      this.totalTests = data.total_tests;
      this.page = data.pagination;
    });
  }

  convertValue(value) {
    return +value === 0 ? 'Oui' : value === 1 ? 'Non' : value === 2 ? 'Inconnu' : '-';
  }
  getServerData($event) {
    console.log($event);
    this.page = $event.pageIndex + 1;
    this.getListData(this.page);
  }
  openDetailDialog(data) {
    this.matDialog.open(DetailListDialogComponent, {
      data,
      panelClass: 'detailDeclarationDialog'
    });
  }
}
